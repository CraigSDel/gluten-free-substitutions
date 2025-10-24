import React, { useState, useMemo } from 'react';
import { IngredientLookupService, SearchResult, Substitution } from '../services/ingredientLookup';
import { Input } from './ui/Input';
import { Button } from './ui/Button';

interface IngredientLookupProps {
  onSubstitutionSelect?: (substitution: Substitution) => void;
}

export const IngredientLookup: React.FC<IngredientLookupProps> = ({ onSubstitutionSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedIngredient, setSelectedIngredient] = useState<SearchResult | null>(null);

  const lookupService = useMemo(() => new IngredientLookupService(), []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = lookupService.searchIngredient(query);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleIngredientSelect = (result: SearchResult) => {
    setSelectedIngredient(result);
    setSearchResults([]);
  };

  const handleSubstitutionSelect = (substitution: Substitution) => {
    if (onSubstitutionSelect) {
      onSubstitutionSelect(substitution);
    }
  };

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
    <div className="max-w-4xl mx-auto">
      {/* Search Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Find Gluten-Free Substitutions
        </h2>
        <p className="text-gray-600 mb-6">
          Search for any gluten-containing ingredient to find tested substitution options.
        </p>
        
        <div className="relative">
          <Input
            type="text"
            placeholder="Search for an ingredient (e.g., wheat flour, soy sauce, breadcrumbs)..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full text-lg py-3 px-4"
          />
          
          {searchResults.length > 0 && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {searchResults.map((result, index) => (
                <button
                  key={index}
                  onClick={() => handleIngredientSelect(result)}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                >
                  <div className="font-medium text-gray-900">{result.ingredient.name}</div>
                  <div className="text-sm text-gray-500">
                    {result.matchType === 'exact' ? 'Exact match' : 
                     result.matchType === 'alias' ? 'Alias match' : 'Partial match'}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Results Section */}
      {selectedIngredient && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Substitutions for {selectedIngredient.ingredient.name}
            </h3>
            <Button
              onClick={() => {
                setSelectedIngredient(null);
                setSearchQuery('');
              }}
              variant="outline"
              size="sm"
            >
              Search Again
            </Button>
          </div>

          <div className="grid gap-4">
            {selectedIngredient.ingredient.substitutions.map((substitution, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
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

                <div className="mt-4">
                  <Button
                    onClick={() => handleSubstitutionSelect(substitution)}
                    variant="primary"
                    size="sm"
                  >
                    Use This Substitution
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Popular Ingredients */}
      {!selectedIngredient && searchQuery === '' && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Popular Ingredients
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {lookupService.getPopularIngredients().map((ingredient, index) => (
              <button
                key={index}
                onClick={() => handleIngredientSelect({ ingredient, matchType: 'exact' })}
                className="text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors"
              >
                <div className="font-medium text-gray-900">{ingredient.name}</div>
                <div className="text-sm text-gray-500">
                  {ingredient.substitutions.length} substitution{ingredient.substitutions.length !== 1 ? 's' : ''}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
