import React from 'react';
import { Substitution } from '../services/ingredientLookup';

interface SubstitutionCardProps {
  substitution: Substitution;
  onSelect?: (substitution: Substitution) => void;
}

export const SubstitutionCard: React.FC<SubstitutionCardProps> = ({ substitution, onSelect }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'hard':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="text-lg font-semibold text-gray-900">
            {substitution.ingredient}
          </h4>
          <p className="text-sm text-gray-600">
            Ratio: {substitution.ratio === 1 ? '1:1' : `${substitution.ratio}:1`}
          </p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(substitution.difficulty)}`}>
          {substitution.difficulty.charAt(0).toUpperCase() + substitution.difficulty.slice(1)}
        </span>
      </div>

      <div className="space-y-2">
        <div className="bg-blue-50 border border-blue-200 rounded p-3">
          <p className="text-sm text-blue-800">
            <strong>Tips:</strong> {substitution.tips}
          </p>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded p-3">
          <p className="text-sm text-green-800">
            <strong>Best for:</strong> {substitution.whenToUse}
          </p>
        </div>
        
        {substitution.notes && (
          <div className="bg-gray-50 border border-gray-200 rounded p-3">
            <p className="text-sm text-gray-700">
              <strong>Notes:</strong> {substitution.notes}
            </p>
          </div>
        )}
      </div>

      {onSelect && (
        <div className="mt-4">
          <button
            onClick={() => onSelect(substitution)}
            className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Use This Substitution
          </button>
        </div>
      )}
    </div>
  );
};
