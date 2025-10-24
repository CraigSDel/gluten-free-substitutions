import React from 'react';
import { Substitution } from '../../types';
import { clsx } from 'clsx';

interface SubstitutionCardProps {
  substitution: Substitution;
}

export const SubstitutionCard: React.FC<SubstitutionCardProps> = ({
  substitution
}) => {
  const difficultyClasses = {
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    hard: 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h4 className="font-medium text-gray-900">
            {substitution.originalIngredient} → {substitution.substituteIngredient}
          </h4>
          <p className="text-sm text-gray-600">
            Ratio: {substitution.ratio}:1
          </p>
        </div>
        <span className={clsx(
          'px-2 py-1 rounded-full text-xs font-medium',
          difficultyClasses[substitution.difficulty]
        )}>
          {substitution.difficulty}
        </span>
      </div>
      
      <p className="text-sm text-gray-700 mb-2">
        {substitution.cookingNotes}
      </p>
      
      {substitution.nutritionalImpact && (
        <p className="text-xs text-gray-500">
          <strong>Nutritional Impact:</strong> {substitution.nutritionalImpact}
        </p>
      )}
    </div>
  );
};
