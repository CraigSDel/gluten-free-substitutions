import { Ingredient } from '../types';

/**
 * Service for scaling recipes to different serving sizes using rule-based calculations.
 * Provides accurate ingredient scaling with proper rounding and unit conversions.
 */
export class RecipeScalingService {
  /**
   * Scales a recipe to a new serving size
   */
  static scaleRecipe(
    originalIngredients: Ingredient[],
    originalServings: number,
    newServings: number
  ): {
    scaledIngredients: Ingredient[];
    scalingFactor: number;
    scalingNotes: string[];
  } {
    const scalingFactor = newServings / originalServings;
    const scaledIngredients: Ingredient[] = [];
    const scalingNotes: string[] = [];

    originalIngredients.forEach(ingredient => {
      const newAmount = this.calculateScaledAmount(ingredient.amount, scalingFactor);
      const scaledIngredient: Ingredient = {
        ...ingredient,
        amount: newAmount,
        id: `${ingredient.id}-scaled-${Date.now()}`,
      };

      scaledIngredients.push(scaledIngredient);

      // Add scaling note if significant change
      if (scalingFactor > 1.5 || scalingFactor < 0.5) {
        scalingNotes.push(
          `${ingredient.name}: ${ingredient.amount} ${ingredient.unit} → ${newAmount} ${ingredient.unit}`
        );
      }
    });

    return {
      scaledIngredients,
      scalingFactor,
      scalingNotes,
    };
  }

  /**
   * Calculates the scaled amount with proper rounding
   */
  private static calculateScaledAmount(originalAmount: number, scalingFactor: number): number {
    const scaledAmount = originalAmount * scalingFactor;
    
    // Round to reasonable precision based on amount
    if (scaledAmount < 1) {
      return Math.round(scaledAmount * 4) / 4; // Round to nearest 1/4
    } else if (scaledAmount < 10) {
      return Math.round(scaledAmount * 2) / 2; // Round to nearest 1/2
    } else {
      return Math.round(scaledAmount); // Round to nearest whole number
    }
  }

  /**
   * Gets scaling recommendations based on serving size
   */
  static getScalingRecommendations(originalServings: number, newServings: number): string[] {
    const factor = newServings / originalServings;
    const recommendations: string[] = [];

    if (factor > 2) {
      recommendations.push("Consider using a larger mixing bowl or pot");
      recommendations.push("You may need to adjust cooking time for larger quantities");
    } else if (factor < 0.5) {
      recommendations.push("Use a smaller baking dish or pan");
      recommendations.push("Reduce cooking time to prevent over-baking");
    }

    if (factor > 1.5) {
      recommendations.push("Mix ingredients in batches if using a stand mixer");
    }

    return recommendations;
  }

  /**
   * Validates if scaling is reasonable
   */
  static validateScaling(originalServings: number, newServings: number): {
    isValid: boolean;
    warnings: string[];
  } {
    const warnings: string[] = [];
    const factor = newServings / originalServings;

    if (factor > 4) {
      warnings.push("Scaling to more than 4x the original recipe may affect texture and cooking time");
    }

    if (factor < 0.25) {
      warnings.push("Scaling to less than 1/4 of the original recipe may be difficult to measure accurately");
    }

    if (newServings < 1) {
      return {
        isValid: false,
        warnings: ["Cannot scale to less than 1 serving"],
      };
    }

    return {
      isValid: true,
      warnings,
    };
  }
}
