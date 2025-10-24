import React, { useState } from 'react';
import { Ingredient } from '../../types';
import { RecipeScalingService } from '../../services/recipeScalingService';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface RecipeScalingCalculatorProps {
  ingredients: Ingredient[];
  originalServings: number;
  onScaledIngredients: (scaledIngredients: Ingredient[]) => void;
}

export const RecipeScalingCalculator: React.FC<RecipeScalingCalculatorProps> = ({
  ingredients,
  originalServings,
  onScaledIngredients,
}) => {
  const [newServings, setNewServings] = useState(originalServings);
  const [scalingResult, setScalingResult] = useState<{
    scaledIngredients: Ingredient[];
    scalingFactor: number;
    scalingNotes: string[];
  } | null>(null);

  const handleCalculate = () => {
    const validation = RecipeScalingService.validateScaling(originalServings, newServings);
    
    if (!validation.isValid) {
      alert(validation.warnings.join('\n'));
      return;
    }

    const result = RecipeScalingService.scaleRecipe(ingredients, originalServings, newServings);
    setScalingResult(result);
    onScaledIngredients(result.scaledIngredients);
  };

  const recommendations = RecipeScalingService.getScalingRecommendations(originalServings, newServings);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Recipe Scaling Calculator
      </h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Original Servings
            </label>
            <Input
              type="number"
              value={originalServings}
              disabled
              className="bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Servings
            </label>
            <Input
              type="number"
              value={newServings}
              onChange={(e) => setNewServings(Number(e.target.value))}
              min="1"
              step="0.5"
            />
          </div>
        </div>

        <Button onClick={handleCalculate} className="w-full">
          Calculate Scaled Recipe
        </Button>

        {scalingResult && (
          <div className="mt-4 space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">
                Scaling Summary
              </h4>
              <p className="text-blue-800">
                Scaling factor: {scalingResult.scalingFactor.toFixed(2)}x
              </p>
              {scalingResult.scalingNotes.length > 0 && (
                <div className="mt-2">
                  <p className="text-sm font-medium text-blue-900">Notable changes:</p>
                  <ul className="text-sm text-blue-800 list-disc list-inside">
                    {scalingResult.scalingNotes.map((note, index) => (
                      <li key={index}>{note}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {recommendations.length > 0 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-900 mb-2">
                  Scaling Recommendations
                </h4>
                <ul className="text-sm text-yellow-800 list-disc list-inside">
                  {recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-2">
                Scaled Ingredients
              </h4>
              <div className="space-y-2">
                {scalingResult.scaledIngredients.map((ingredient, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-green-800">
                      {ingredient.amount} {ingredient.unit} {ingredient.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
