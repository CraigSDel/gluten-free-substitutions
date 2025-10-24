import ingredientsData from '../data/ingredients.json';

export interface Substitution {
  ingredient: string;
  ratio: number;
  difficulty: 'easy' | 'medium' | 'hard';
  tips: string;
  whenToUse: string;
  notes: string;
}

export interface Ingredient {
  name: string;
  aliases: string[];
  substitutions: Substitution[];
}

export interface SearchResult {
  ingredient: Ingredient;
  matchType: 'exact' | 'alias' | 'partial';
}

/**
 * Simple ingredient lookup service for gluten-free substitutions.
 * Provides fast, reliable ingredient search with practical cooking tips.
 */
export class IngredientLookupService {
  private ingredients: Ingredient[];

  constructor() {
    // Type assertion to handle JSON string values
    this.ingredients = ingredientsData.ingredients as Ingredient[];
  }

  /**
   * Search for an ingredient by name or alias
   */
  searchIngredient(query: string): SearchResult[] {
    if (!query.trim()) {
      return [];
    }

    const normalizedQuery = query.toLowerCase().trim();
    const results: SearchResult[] = [];

    // Exact match
    const exactMatch = this.ingredients.find(ingredient => 
      ingredient.name.toLowerCase() === normalizedQuery
    );
    if (exactMatch) {
      results.push({
        ingredient: exactMatch,
        matchType: 'exact'
      });
    }

    // Alias match
    const aliasMatch = this.ingredients.find(ingredient =>
      ingredient.aliases.some(alias => 
        alias.toLowerCase() === normalizedQuery
      )
    );
    if (aliasMatch && !results.some(r => r.ingredient.name === aliasMatch.name)) {
      results.push({
        ingredient: aliasMatch,
        matchType: 'alias'
      });
    }

    // Partial match
    const partialMatches = this.ingredients.filter(ingredient => {
      const nameMatch = ingredient.name.toLowerCase().includes(normalizedQuery);
      const aliasMatch = ingredient.aliases.some(alias => 
        alias.toLowerCase().includes(normalizedQuery)
      );
      return nameMatch || aliasMatch;
    });

    partialMatches.forEach(ingredient => {
      if (!results.some(r => r.ingredient.name === ingredient.name)) {
        results.push({
          ingredient,
          matchType: 'partial'
        });
      }
    });

    return results;
  }

  /**
   * Get all available ingredients
   */
  getAllIngredients(): Ingredient[] {
    return this.ingredients;
  }

  /**
   * Get ingredients by category (for future use)
   */
  getIngredientsByCategory(_category: string): Ingredient[] {
    // For now, return all ingredients
    // Could be extended to categorize ingredients
    return this.ingredients;
  }

  /**
   * Get popular ingredients (most commonly searched)
   */
  getPopularIngredients(): Ingredient[] {
    // Return first 5 ingredients as "popular"
    return this.ingredients.slice(0, 5);
  }

  /**
   * Get substitution tips for a specific substitution
   */
  getSubstitutionTips(ingredient: string, substitution: string): string[] {
    const ingredientData = this.ingredients.find(ing => 
      ing.name.toLowerCase() === ingredient.toLowerCase()
    );

    if (!ingredientData) {
      return [];
    }

    const sub = ingredientData.substitutions.find(sub => 
      sub.ingredient.toLowerCase() === substitution.toLowerCase()
    );

    if (!sub) {
      return [];
    }

    return [
      sub.tips,
      `Best for: ${sub.whenToUse}`,
      sub.notes
    ].filter(tip => tip.trim());
  }
}
