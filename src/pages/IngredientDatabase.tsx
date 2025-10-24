import React, { useState } from 'react';
import { useIngredient } from '../contexts/IngredientContext';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export const IngredientDatabase: React.FC = () => {
  const { 
    searchResults, 
    searchQuery, 
    searchIngredients, 
    getAllCategories, 
    getIngredientsByCategory 
  } = useIngredient();
  
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const categories = getAllCategories();

  const handleSearch = (query: string) => {
    searchIngredients(query);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    const ingredients = getIngredientsByCategory(category);
    // You could display these ingredients in a different way
    console.log(`Ingredients in ${category}:`, ingredients);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Ingredient Database
            </h1>
            <p className="text-gray-600">
              Search for gluten-free alternatives to common ingredients
            </p>
          </div>

          {/* Search Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="max-w-2xl mx-auto">
              <Input
                label="Search Ingredients"
                placeholder="Type an ingredient name..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                helperText="Search for gluten-containing ingredients to find alternatives"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'primary' : 'outline'}
                  onClick={() => handleCategorySelect(category)}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Search Results
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {searchResults.map((ingredient, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {ingredient.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Category: {ingredient.category}
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      {ingredient.notes}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        ingredient.difficulty === 'easy' 
                          ? 'bg-green-100 text-green-800'
                          : ingredient.difficulty === 'medium'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {ingredient.difficulty}
                      </span>
                      <span className="text-sm text-gray-500">
                        Ratio: {ingredient.ratio}:1
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {searchQuery && searchResults.length === 0 && (
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-gray-400">🔍</span>
              </div>
              <p className="text-gray-600">
                No ingredients found for "{searchQuery}". Try a different search term.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
