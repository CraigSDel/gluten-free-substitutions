import React from 'react';
import { Substitution } from '../../types';
import { NutritionalNotesService } from '../../services/nutritionalNotesService';

interface NutritionalInfoCardProps {
  substitution: Substitution;
  originalIngredient: string;
}

export const NutritionalInfoCard: React.FC<NutritionalInfoCardProps> = ({
  substitution,
  originalIngredient,
}) => {
  const nutritionalInfo = NutritionalNotesService.getNutritionalInfo(substitution);
  const comparison = NutritionalNotesService.compareNutrition(originalIngredient, substitution.substituteIngredient);

  if (!nutritionalInfo.hasData) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-2">
          Nutritional Information
        </h4>
        <p className="text-gray-600 text-sm">
          Nutritional data not available for this substitution.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <h4 className="font-semibold text-blue-900 mb-3">
        Nutritional Information
      </h4>
      
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium text-blue-800">Calories:</span>
            <span className="ml-2 text-blue-700">{nutritionalInfo.nutritionalInfo?.calories} per 1/4 cup</span>
          </div>
          <div>
            <span className="font-medium text-blue-800">Protein:</span>
            <span className="ml-2 text-blue-700">{nutritionalInfo.nutritionalInfo?.protein}g</span>
          </div>
          <div>
            <span className="font-medium text-blue-800">Carbs:</span>
            <span className="ml-2 text-blue-700">{nutritionalInfo.nutritionalInfo?.carbs}g</span>
          </div>
          <div>
            <span className="font-medium text-blue-800">Fiber:</span>
            <span className="ml-2 text-blue-700">{nutritionalInfo.nutritionalInfo?.fiber}g</span>
          </div>
          <div>
            <span className="font-medium text-blue-800">Fat:</span>
            <span className="ml-2 text-blue-700">{nutritionalInfo.nutritionalInfo?.fat}g</span>
          </div>
        </div>

        {nutritionalInfo.nutritionalInfo?.notes && (
          <div className="bg-blue-100 border border-blue-300 rounded p-3">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> {nutritionalInfo.nutritionalInfo.notes}
            </p>
          </div>
        )}

        {comparison.hasComparison && comparison.comparison && (
          <div className="bg-green-50 border border-green-300 rounded p-3">
            <h5 className="font-medium text-green-900 mb-2">Compared to Wheat Flour:</h5>
            <div className="text-sm text-green-800 space-y-1">
              {comparison.comparison.calories.difference !== 0 && (
                <div>
                  Calories: {comparison.comparison.calories.difference > 0 ? '+' : ''}
                  {comparison.comparison.calories.difference} 
                  ({comparison.comparison.calories.original} → {comparison.comparison.calories.substitute})
                </div>
              )}
              {comparison.comparison.protein.difference !== 0 && (
                <div>
                  Protein: {comparison.comparison.protein.difference > 0 ? '+' : ''}
                  {comparison.comparison.protein.difference}g
                </div>
              )}
              {comparison.comparison.fiber.difference !== 0 && (
                <div>
                  Fiber: {comparison.comparison.fiber.difference > 0 ? '+' : ''}
                  {comparison.comparison.fiber.difference}g
                </div>
              )}
            </div>
            <p className="text-sm text-green-700 mt-2">
              {comparison.comparison.summary}
            </p>
          </div>
        )}

        <div className="bg-yellow-50 border border-yellow-300 rounded p-3">
          <h5 className="font-medium text-yellow-900 mb-2">Nutritional Tips:</h5>
          <ul className="text-sm text-yellow-800 list-disc list-inside space-y-1">
            {NutritionalNotesService.getNutritionalTips().slice(0, 3).map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
