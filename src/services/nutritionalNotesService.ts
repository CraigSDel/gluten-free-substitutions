import { Substitution } from '../types';

/**
 * Service for providing nutritional information about gluten-free substitutions.
 * Uses rule-based nutritional data for common substitutions.
 */
export class NutritionalNotesService {
  private static nutritionalData: Record<string, {
    calories: number;
    protein: number;
    carbs: number;
    fiber: number;
    fat: number;
    notes: string;
  }> = {
    'almond flour': {
      calories: 160,
      protein: 6,
      carbs: 6,
      fiber: 3,
      fat: 14,
      notes: 'Higher in protein and healthy fats, lower in carbs'
    },
    'coconut flour': {
      calories: 120,
      protein: 4,
      carbs: 18,
      fiber: 10,
      fat: 4,
      notes: 'Very high in fiber, absorbs more liquid than other flours'
    },
    'rice flour': {
      calories: 150,
      protein: 3,
      carbs: 32,
      fiber: 1,
      fat: 1,
      notes: 'Neutral flavor, similar to wheat flour nutritionally'
    },
    'tapioca flour': {
      calories: 130,
      protein: 0,
      carbs: 32,
      fiber: 0,
      fat: 0,
      notes: 'Pure starch, adds chewiness and binding'
    },
    'potato starch': {
      calories: 130,
      protein: 0,
      carbs: 32,
      fiber: 0,
      fat: 0,
      notes: 'Pure starch, excellent for binding and moisture retention'
    },
    'xanthan gum': {
      calories: 0,
      protein: 0,
      carbs: 0,
      fiber: 0,
      fat: 0,
      notes: 'Binding agent, use sparingly (1/4 tsp per cup of flour)'
    },
    'gluten-free bread flour': {
      calories: 140,
      protein: 3,
      carbs: 30,
      fiber: 2,
      fat: 1,
      notes: 'Blend of gluten-free flours, designed for bread baking'
    }
  };

  /**
   * Gets nutritional information for a substitution
   */
  static getNutritionalInfo(substitution: Substitution): {
    hasData: boolean;
    nutritionalInfo?: {
      calories: number;
      protein: number;
      carbs: number;
      fiber: number;
      fat: number;
      notes: string;
    };
  } {
    const ingredientName = substitution.substituteIngredient.toLowerCase();
    const data = this.nutritionalData[ingredientName];

    if (data) {
      return {
        hasData: true,
        nutritionalInfo: data,
      };
    }

    return { hasData: false };
  }

  /**
   * Compares nutritional differences between original and substitute
   */
  static compareNutrition(
    _originalIngredient: string,
    substituteIngredient: string
  ): {
    hasComparison: boolean;
    comparison?: {
      calories: { original: number; substitute: number; difference: number };
      protein: { original: number; substitute: number; difference: number };
      carbs: { original: number; substitute: number; difference: number };
      fiber: { original: number; substitute: number; difference: number };
      fat: { original: number; substitute: number; difference: number };
      summary: string;
    };
  } {
    // Basic wheat flour nutritional data (per 1/4 cup)
    const wheatFlourData = {
      calories: 110,
      protein: 4,
      carbs: 22,
      fiber: 1,
      fat: 0,
    };

    const substituteData = this.nutritionalData[substituteIngredient.toLowerCase()];

    if (!substituteData) {
      return { hasComparison: false };
    }

    const comparison = {
      calories: {
        original: wheatFlourData.calories,
        substitute: substituteData.calories,
        difference: substituteData.calories - wheatFlourData.calories,
      },
      protein: {
        original: wheatFlourData.protein,
        substitute: substituteData.protein,
        difference: substituteData.protein - wheatFlourData.protein,
      },
      carbs: {
        original: wheatFlourData.carbs,
        substitute: substituteData.carbs,
        difference: substituteData.carbs - wheatFlourData.carbs,
      },
      fiber: {
        original: wheatFlourData.fiber,
        substitute: substituteData.fiber,
        difference: substituteData.fiber - wheatFlourData.fiber,
      },
      fat: {
        original: wheatFlourData.fat,
        substitute: substituteData.fat,
        difference: substituteData.fat - wheatFlourData.fat,
      },
      summary: this.generateNutritionalSummary(substituteData, { ...wheatFlourData, notes: '' }),
    };

    return {
      hasComparison: true,
      comparison,
    };
  }

  /**
   * Generates a summary of nutritional differences
   */
  private static generateNutritionalSummary(
    substitute: typeof this.nutritionalData[string],
    original: typeof this.nutritionalData[string]
  ): string {
    const differences: string[] = [];

    if (substitute.calories > original.calories + 20) {
      differences.push('higher in calories');
    } else if (substitute.calories < original.calories - 20) {
      differences.push('lower in calories');
    }

    if (substitute.protein > original.protein + 2) {
      differences.push('higher in protein');
    }

    if (substitute.fiber > original.fiber + 3) {
      differences.push('much higher in fiber');
    }

    if (substitute.fat > original.fat + 5) {
      differences.push('higher in healthy fats');
    }

    if (differences.length === 0) {
      return 'Similar nutritional profile to wheat flour';
    }

    return `This substitution is ${differences.join(', ')}. ${substitute.notes}`;
  }

  /**
   * Gets general nutritional tips for gluten-free baking
   */
  static getNutritionalTips(): string[] {
    return [
      'Gluten-free flours often have different absorption rates - adjust liquid as needed',
      'Many gluten-free flours are higher in fiber, which can be beneficial for digestion',
      'Almond and coconut flours add healthy fats and protein to your recipes',
      'Rice flour provides a neutral base similar to wheat flour',
      'Tapioca and potato starch help with binding and texture',
      'Consider adding extra protein sources when using low-protein flours',
    ];
  }
}
