import { Ingredient, Substitution } from '../types';

/**
 * Service for calculating exact substitution amounts using rule-based calculations.
 * Provides precise measurements and conversion ratios for gluten-free substitutions.
 */
export class SubstitutionCalculatorService {
  /**
   * Calculates the exact amount needed for a substitution
   */
  static calculateSubstitutionAmount(
    originalIngredient: Ingredient,
    substitution: Substitution
  ): {
    calculatedAmount: number;
    unit: string;
    conversionNotes: string[];
    measurementTips: string[];
  } {
    const calculatedAmount = originalIngredient.amount * substitution.ratio;
    const conversionNotes: string[] = [];
    const measurementTips: string[] = [];

    // Add conversion note
    conversionNotes.push(
      `${originalIngredient.amount} ${originalIngredient.unit} ${originalIngredient.name} → ${calculatedAmount.toFixed(2)} ${originalIngredient.unit} ${substitution.substituteIngredient}`
    );

    // Add measurement tips based on ingredient type
    if (substitution.substituteIngredient.toLowerCase().includes('flour')) {
      measurementTips.push('Spoon flour into measuring cup and level off with a knife');
      measurementTips.push('Don\'t pack flour - it should be loose and fluffy');
    }

    if (substitution.substituteIngredient.toLowerCase().includes('almond')) {
      measurementTips.push('Almond flour can be measured by weight for more accuracy');
      measurementTips.push('1 cup almond flour ≈ 4.2 oz (120g)');
    }

    if (substitution.substituteIngredient.toLowerCase().includes('coconut')) {
      measurementTips.push('Coconut flour is very absorbent - you may need less liquid');
      measurementTips.push('Sift coconut flour before measuring to avoid clumps');
    }

    // Add ratio-specific notes
    if (substitution.ratio !== 1) {
      if (substitution.ratio > 1) {
        conversionNotes.push(`You'll need ${substitution.ratio}x more ${substitution.substituteIngredient}`);
      } else {
        conversionNotes.push(`You'll need ${(1/substitution.ratio).toFixed(1)}x less ${substitution.substituteIngredient}`);
      }
    }

    return {
      calculatedAmount: this.roundToReasonablePrecision(calculatedAmount),
      unit: originalIngredient.unit,
      conversionNotes,
      measurementTips,
    };
  }

  /**
   * Calculates multiple substitution options with amounts
   */
  static calculateMultipleSubstitutions(
    originalIngredient: Ingredient,
    substitutions: Substitution[]
  ): Array<{
    substitution: Substitution;
    calculatedAmount: number;
    unit: string;
    conversionNotes: string[];
    measurementTips: string[];
  }> {
    return substitutions.map(substitution => ({
      substitution,
      ...this.calculateSubstitutionAmount(originalIngredient, substitution),
    }));
  }

  /**
   * Gets conversion tips for specific ingredient types
   */
  static getConversionTips(ingredientName: string): string[] {
    const tips: Record<string, string[]> = {
      'flour': [
        'Always sift gluten-free flours before measuring',
        'Consider using a kitchen scale for more accurate measurements',
        'Mix different gluten-free flours for better texture',
        'Add xanthan gum for binding (1/4 tsp per cup of flour)',
      ],
      'bread': [
        'Gluten-free bread may need longer rising time',
        'Use a bread machine with gluten-free setting if available',
        'Let bread cool completely before slicing',
        'Store in airtight container to prevent drying',
      ],
      'pasta': [
        'Cook gluten-free pasta in plenty of salted water',
        'Stir frequently to prevent sticking',
        'Test for doneness 1-2 minutes before package directions',
        'Rinse with cold water to stop cooking',
      ],
      'soy sauce': [
        'Tamari is naturally gluten-free soy sauce',
        'Coconut aminos are a soy-free alternative',
        'Use same amount as regular soy sauce',
        'Check labels for "gluten-free" certification',
      ],
    };

    const ingredientType = this.getIngredientType(ingredientName);
    return tips[ingredientType] || [
      'Always check labels for gluten-free certification',
      'When in doubt, contact the manufacturer',
      'Look for certified gluten-free symbols on packaging',
    ];
  }

  /**
   * Determines the type of ingredient for specific tips
   */
  private static getIngredientType(ingredientName: string): string {
    const name = ingredientName.toLowerCase();
    
    if (name.includes('flour') || name.includes('bread')) return 'flour';
    if (name.includes('bread') || name.includes('roll')) return 'bread';
    if (name.includes('pasta') || name.includes('noodle')) return 'pasta';
    if (name.includes('soy') || name.includes('sauce')) return 'soy sauce';
    
    return 'general';
  }

  /**
   * Rounds amounts to reasonable precision for cooking
   */
  private static roundToReasonablePrecision(amount: number): number {
    if (amount < 0.25) {
      return Math.round(amount * 8) / 8; // Round to nearest 1/8
    } else if (amount < 1) {
      return Math.round(amount * 4) / 4; // Round to nearest 1/4
    } else if (amount < 10) {
      return Math.round(amount * 2) / 2; // Round to nearest 1/2
    } else {
      return Math.round(amount); // Round to nearest whole number
    }
  }

  /**
   * Validates if a substitution calculation is reasonable
   */
  static validateSubstitutionCalculation(
    originalAmount: number,
    calculatedAmount: number,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _substitution: Substitution
  ): {
    isValid: boolean;
    warnings: string[];
  } {
    const warnings: string[] = [];
    const ratio = calculatedAmount / originalAmount;

    if (ratio > 3) {
      warnings.push('This substitution requires significantly more ingredient - consider if this is correct');
    }

    if (ratio < 0.1) {
      warnings.push('This substitution requires very little ingredient - double-check the ratio');
    }

    if (calculatedAmount < 0.125) {
      warnings.push('Amount is very small - consider if this ingredient is necessary');
    }

    if (calculatedAmount > 20) {
      warnings.push('Amount is very large - verify this is the correct substitution');
    }

    return {
      isValid: warnings.length === 0,
      warnings,
    };
  }
}
