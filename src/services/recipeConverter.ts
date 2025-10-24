import { Ingredient, Substitution } from '../types';

/**
 * Service for converting recipes from gluten-containing to gluten-free versions.
 * Handles ingredient substitution, ratio calculations, and instruction modifications.
 */
export class RecipeConverter {
  /**
   * Converts a recipe by replacing gluten ingredients with their substitutions
   */
  static convertRecipe(
    originalIngredients: Ingredient[],
    substitutions: Substitution[]
  ): {
    convertedIngredients: Ingredient[];
    conversionNotes: string[];
  } {
    const convertedIngredients: Ingredient[] = [];
    const conversionNotes: string[] = [];

    for (const ingredient of originalIngredients) {
      if (ingredient.isGlutenFree) {
        // Keep gluten-free ingredients as-is
        convertedIngredients.push(ingredient);
      } else {
        // Find the best substitution for this ingredient
        const substitution = this.findBestSubstitution(ingredient, substitutions);
        
        if (substitution) {
          const convertedIngredient: Ingredient = {
            ...ingredient,
            name: substitution.substituteIngredient,
            amount: this.calculateConvertedAmount(ingredient.amount, substitution.ratio),
            isGlutenFree: true,
            confidence: substitution.confidence,
            substitutions: [substitution],
          };
          
          convertedIngredients.push(convertedIngredient);
          
          // Add conversion note
          conversionNotes.push(
            `${ingredient.amount} ${ingredient.unit} ${ingredient.name} → ${convertedIngredient.amount} ${ingredient.unit} ${convertedIngredient.name}${substitution.cookingNotes ? ` (${substitution.cookingNotes})` : ''}`
          );
        } else {
          // No substitution found, keep original but mark as problematic
          convertedIngredients.push({
            ...ingredient,
            isGlutenFree: false,
            confidence: 0,
          });
          conversionNotes.push(`⚠️ No gluten-free substitution found for ${ingredient.name}`);
        }
      }
    }

    return {
      convertedIngredients,
      conversionNotes,
    };
  }

  /**
   * Converts recipe instructions to account for gluten-free substitutions
   */
  static convertInstructions(
    originalInstructions: string[],
    conversionNotes: string[]
  ): string[] {
    const convertedInstructions = [...originalInstructions];
    
    // Add conversion notes at the beginning
    if (conversionNotes.length > 0) {
      convertedInstructions.unshift(
        'Gluten-Free Substitutions Made:',
        ...conversionNotes.map(note => `• ${note}`),
        ''
      );
    }

    // Add general gluten-free cooking tips
    convertedInstructions.push(
      '',
      'Gluten-Free Cooking Tips:',
      '• Mix dry ingredients thoroughly to ensure even distribution',
      '• Let batter rest for 5-10 minutes before baking for better texture',
      '• Check all packaged ingredients for gluten-free certification',
      '• Consider adding xanthan gum (1/4 tsp per cup of flour) for better binding'
    );

    return convertedInstructions;
  }

  /**
   * Finds the best substitution for an ingredient
   */
  private static findBestSubstitution(
    ingredient: Ingredient,
    substitutions: Substitution[]
  ): Substitution | null {
    // Find substitutions that match this ingredient
    const matchingSubstitutions = substitutions.filter(sub => 
      sub.originalIngredient.toLowerCase() === ingredient.name.toLowerCase()
    );

    if (matchingSubstitutions.length === 0) {
      return null;
    }

    // Return the substitution with highest confidence
    return matchingSubstitutions.reduce((best, current) => 
      current.confidence > best.confidence ? current : best
    );
  }

  /**
   * Calculates the converted amount based on substitution ratio
   */
  private static calculateConvertedAmount(
    originalAmount: number,
    ratio: number
  ): number {
    return Math.round((originalAmount * ratio) * 100) / 100; // Round to 2 decimal places
  }

  /**
   * Generates a complete converted recipe
   */
  static generateConvertedRecipe(
    title: string,
    originalIngredients: Ingredient[],
    originalInstructions: string[],
    substitutions: Substitution[]
  ): {
    title: string;
    ingredients: Ingredient[];
    instructions: string[];
    conversionSummary: {
      totalIngredients: number;
      glutenIngredients: number;
      convertedIngredients: number;
      difficulty: 'easy' | 'medium' | 'hard';
    };
  } {
    const { convertedIngredients, conversionNotes } = this.convertRecipe(
      originalIngredients,
      substitutions
    );

    const convertedInstructions = this.convertInstructions(
      originalInstructions,
      conversionNotes
    );

    const glutenIngredients = originalIngredients.filter(ing => !ing.isGlutenFree);
    const convertedCount = convertedIngredients.filter(ing => 
      ing.isGlutenFree && ing.substitutions && ing.substitutions.length > 0
    ).length;

    const difficulty = this.calculateOverallDifficulty(substitutions);

    return {
      title: `Gluten-Free ${title}`,
      ingredients: convertedIngredients,
      instructions: convertedInstructions,
      conversionSummary: {
        totalIngredients: originalIngredients.length,
        glutenIngredients: glutenIngredients.length,
        convertedIngredients: convertedCount,
        difficulty,
      },
    };
  }

  /**
   * Calculates overall difficulty based on substitutions
   */
  private static calculateOverallDifficulty(substitutions: Substitution[]): 'easy' | 'medium' | 'hard' {
    if (substitutions.length === 0) return 'easy';

    const difficulties = substitutions.map(sub => sub.difficulty);
    const hasHard = difficulties.includes('hard');
    const hasMedium = difficulties.includes('medium');

    if (hasHard) return 'hard';
    if (hasMedium) return 'medium';
    return 'easy';
  }
}
