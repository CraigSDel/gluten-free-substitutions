import { Ingredient, Substitution, RecipeAnalysis } from "../types";
import ingredientsData from "../data/ingredients.json";

/**
 * Engine for analyzing recipes to identify gluten-containing ingredients
 * and provide appropriate substitutions. Uses rule-based fuzzy matching for better
 * ingredient detection and maintains a comprehensive database of gluten
 * ingredients and their alternatives.
 */
export class RecipeAnalysisEngine {
  private glutenIngredients: Set<string>;
  private substitutionMap: Map<string, Substitution[]>;

  constructor() {
    this.glutenIngredients = new Set();
    this.substitutionMap = new Map();
    this.initializeDatabase();
  }

  private initializeDatabase() {
    // Build gluten ingredients set
    ingredientsData.glutenIngredients.forEach((item) => {
      this.glutenIngredients.add(item.name.toLowerCase());
      item.aliases?.forEach((alias) => {
        this.glutenIngredients.add(alias.toLowerCase());
      });
    });

    // Build substitution map
    ingredientsData.glutenIngredients.forEach((item) => {
      const substitutions = item.substitutions.map((sub) => ({
        id: `${item.name}-${sub.ingredient}`,
        originalIngredient: item.name,
        substituteIngredient: sub.ingredient,
        ratio: sub.ratio,
        unit: "cup",
        difficulty: sub.difficulty as "easy" | "medium" | "hard",
        cookingNotes: sub.notes,
        nutritionalImpact: "Varies by substitution",
        confidence: 0.9,
      }));
      this.substitutionMap.set(item.name.toLowerCase(), substitutions);
    });
  }

  async analyzeRecipe(text: string): Promise<RecipeAnalysis> {
    const ingredients = this.extractIngredients(text);
    const glutenIngredients = this.identifyGlutenIngredients(ingredients);
    const substitutions = this.findSubstitutions(glutenIngredients);
    const difficulty = this.calculateDifficulty(substitutions);

    return {
      hasGluten: glutenIngredients.length > 0,
      glutenIngredients,
      difficulty,
      substitutions,
      cookingTimeAdjustment: this.calculateTimeAdjustment(substitutions),
      confidence: this.calculateConfidence(glutenIngredients, substitutions),
    };
  }

  async analyzeStructuredRecipe(recipe: {
    title: string;
    ingredients: Array<{ amount: string; unit: string; name: string }>;
    instructions: string[];
  }): Promise<RecipeAnalysis> {
    const glutenIngredients = this.identifyGlutenIngredientsFromStructured(recipe.ingredients);
    const substitutions = this.findSubstitutions(glutenIngredients);
    const difficulty = this.calculateDifficulty(substitutions);

    return {
      hasGluten: glutenIngredients.length > 0,
      glutenIngredients,
      difficulty,
      substitutions,
      cookingTimeAdjustment: this.calculateTimeAdjustment(substitutions),
      confidence: this.calculateConfidence(glutenIngredients, substitutions),
    };
  }

  private extractIngredients(text: string): string[] {
    const patterns = [
      /(\d+(?:\.\d+)?)\s*([a-zA-Z]+)\s+([a-zA-Z\s]+)/g,
      /([a-zA-Z\s]+)\s*(\d+(?:\.\d+)?)\s*([a-zA-Z]+)/g,
    ];

    const ingredients: string[] = [];
    patterns.forEach((pattern) => {
      const matches = text.matchAll(pattern);
      for (const match of matches) {
        ingredients.push(match[0].trim());
      }
    });

    return ingredients;
  }

  private identifyGlutenIngredients(ingredients: string[]): Ingredient[] {
    return ingredients
      .map((ingredient) => this.parseIngredient(ingredient))
      .filter((ingredient) => this.containsGluten(ingredient.name))
      .map((ingredient) => ({
        ...ingredient,
        isGlutenFree: false,
        confidence: this.getGlutenConfidence(ingredient.name),
      }));
  }

  private identifyGlutenIngredientsFromStructured(ingredients: Array<{ amount: string; unit: string; name: string }>): Ingredient[] {
    return ingredients
      .map((ingredient) => this.parseStructuredIngredient(ingredient))
      .filter((ingredient) => this.containsGluten(ingredient.name))
      .map((ingredient) => ({
        ...ingredient,
        isGlutenFree: false,
        confidence: this.getGlutenConfidence(ingredient.name),
      }));
  }

  private parseIngredient(ingredientText: string): Ingredient {
    const parts = ingredientText.trim().split(/\s+/);
    const amount = parseFloat(parts[0]) || 1;
    const unit = parts[1] || "cup";
    const name = parts.slice(2).join(" ").toLowerCase();

    return {
      id: Math.random().toString(36).substr(2, 9),
      name,
      amount,
      unit,
      isGlutenFree: false,
      confidence: 0,
      substitutions: [],
    };
  }

  private parseStructuredIngredient(ingredient: { amount: string; unit: string; name: string }): Ingredient {
    const amount = parseFloat(ingredient.amount) || 1;
    const unit = ingredient.unit || "cup";
    const name = ingredient.name.toLowerCase().trim();

    return {
      id: Math.random().toString(36).substr(2, 9),
      name,
      amount,
      unit,
      isGlutenFree: false,
      confidence: 0,
      substitutions: [],
    };
  }

  private containsGluten(ingredient: string): boolean {
    const normalizedIngredient = ingredient.toLowerCase().trim();
    
    // Direct match
    if (this.glutenIngredients.has(normalizedIngredient)) {
      return true;
    }

    // Fuzzy matching for common variations
    const fuzzyMatches = [
      // Flour variations
      normalizedIngredient.includes('flour') && (
        normalizedIngredient.includes('wheat') ||
        normalizedIngredient.includes('all-purpose') ||
        normalizedIngredient.includes('bread') ||
        normalizedIngredient.includes('cake') ||
        normalizedIngredient.includes('plain')
      ),
      // Grain variations
      normalizedIngredient.includes('wheat') ||
      normalizedIngredient.includes('barley') ||
      normalizedIngredient.includes('rye') ||
      normalizedIngredient.includes('spelt') ||
      normalizedIngredient.includes('triticale'),
      // Pasta variations
      normalizedIngredient.includes('pasta') ||
      normalizedIngredient.includes('spaghetti') ||
      normalizedIngredient.includes('penne') ||
      normalizedIngredient.includes('macaroni'),
      // Bread variations
      normalizedIngredient.includes('bread') ||
      normalizedIngredient.includes('croutons') ||
      normalizedIngredient.includes('breadcrumbs'),
      // Sauce variations
      normalizedIngredient.includes('soy sauce') ||
      normalizedIngredient.includes('worcestershire') ||
      normalizedIngredient.includes('teriyaki'),
      // Other common gluten sources
      normalizedIngredient.includes('oats') && !normalizedIngredient.includes('gluten-free'),
      normalizedIngredient.includes('malt'),
      normalizedIngredient.includes('couscous'),
      normalizedIngredient.includes('bulgur'),
      normalizedIngredient.includes('semolina'),
    ];

    return fuzzyMatches.some(match => match);
  }

  private getGlutenConfidence(ingredient: string): number {
    // Simple confidence scoring based on ingredient name
    const name = ingredient.toLowerCase();
    if (
      name.includes("flour") ||
      name.includes("wheat") ||
      name.includes("barley") ||
      name.includes("rye")
    ) {
      return 0.95;
    }
    if (
      name.includes("bread") ||
      name.includes("pasta") ||
      name.includes("soy sauce")
    ) {
      return 0.9;
    }
    return 0.8;
  }

  private findSubstitutions(glutenIngredients: Ingredient[]): Substitution[] {
    const substitutions: Substitution[] = [];

    glutenIngredients.forEach((ingredient) => {
      const ingredientSubs = this.substitutionMap.get(
        ingredient.name.toLowerCase(),
      );
      if (ingredientSubs) {
        substitutions.push(...ingredientSubs);
      }
    });

    return substitutions;
  }

  private calculateDifficulty(
    substitutions: Substitution[],
  ): "easy" | "medium" | "hard" {
    if (substitutions.length === 0) return "easy";

    const difficulties = substitutions.map((sub) => sub.difficulty);
    const hasHard = difficulties.includes("hard");
    const hasMedium = difficulties.includes("medium");

    if (hasHard) return "hard";
    if (hasMedium) return "medium";
    return "easy";
  }

  private calculateTimeAdjustment(substitutions: Substitution[]): number {
    // Simple time adjustment based on difficulty
    const difficulties = substitutions.map((sub) => sub.difficulty);
    const hardCount = difficulties.filter((d) => d === "hard").length;
    const mediumCount = difficulties.filter((d) => d === "medium").length;

    return hardCount * 15 + mediumCount * 5; // minutes
  }

  private calculateConfidence(
    glutenIngredients: Ingredient[],
    substitutions: Substitution[],
  ): number {
    if (glutenIngredients.length === 0) return 1.0;

    const avgIngredientConfidence =
      glutenIngredients.reduce((sum, ing) => sum + ing.confidence, 0) /
      glutenIngredients.length;
    const avgSubstitutionConfidence =
      substitutions.reduce((sum, sub) => sum + sub.confidence, 0) /
      substitutions.length;

    return (avgIngredientConfidence + avgSubstitutionConfidence) / 2;
  }
}
