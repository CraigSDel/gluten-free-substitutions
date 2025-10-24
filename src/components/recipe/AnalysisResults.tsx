import React from 'react';
import { RecipeAnalysis, Recipe } from '../../types';
import { Button } from '../ui/Button';
import { SubstitutionCard } from './SubstitutionCard';

interface AnalysisResultsProps {
  analysis: RecipeAnalysis;
  onSave: (recipe: Recipe) => void;
  onExport: (recipe: Recipe, format: 'text' | 'pdf') => void;
  onCopy: (recipe: Recipe) => void;
}

export const AnalysisResults: React.FC<AnalysisResultsProps> = ({
  analysis,
  onSave,
  onExport,
  onCopy
}) => {
  if (!analysis.hasGluten) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          🎉 Great News!
        </h3>
        <p className="text-green-700">
          This recipe appears to be already gluten-free!
        </p>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">
          Gluten-Containing Ingredients Found
        </h3>
        <ul className="space-y-2">
          {analysis.glutenIngredients.map((ingredient, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="text-yellow-700">{ingredient.name}</span>
              <span className="text-sm text-yellow-600">
                ({Math.round(ingredient.confidence * 100)}% confidence)
              </span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Substitution Recommendations</h3>
        {analysis.substitutions.map((substitution, index) => (
          <SubstitutionCard
            key={index}
            substitution={substitution}
          />
        ))}
      </div>
      
      <div className="flex flex-wrap gap-4">
        <Button
          onClick={() => onSave(analysis as unknown as Recipe)}
          variant="primary"
        >
          Save Recipe
        </Button>
        <Button
          onClick={() => onExport(analysis as unknown as Recipe, 'text')}
          variant="secondary"
        >
          Export as Text
        </Button>
        <Button
          onClick={() => onExport(analysis as unknown as Recipe, 'pdf')}
          variant="outline"
        >
          Export as PDF
        </Button>
        <Button
          onClick={() => onCopy(analysis as unknown as Recipe)}
          variant="ghost"
        >
          Copy to Clipboard
        </Button>
      </div>
    </div>
  );
};
