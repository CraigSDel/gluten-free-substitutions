import React, { useState } from "react";
import { useIngredient } from "../contexts/IngredientContext";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { Substitution } from "../types";

export const IngredientDatabase: React.FC = () => {
  const {
    searchResults,
    searchQuery,
    searchIngredients,
    getAllCategories,
    getIngredientsByCategoryWithData,
    getSubstitution,
  } = useIngredient();

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedIngredient, setSelectedIngredient] = useState<string>("");
  const [ingredientSubstitutions, setIngredientSubstitutions] = useState<Substitution[]>([]);

  const categories = getAllCategories();

  const handleSearch = (query: string) => {
    searchIngredients(query);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    // Clear search results when browsing by category
    searchIngredients("");
  };

  const handleIngredientClick = (ingredientName: string) => {
    setSelectedIngredient(ingredientName);
    const substitutions = getSubstitution(ingredientName);
    setIngredientSubstitutions(substitutions);
  };

  // Get ingredients for the selected category with full data
  const categoryIngredients = selectedCategory ? getIngredientsByCategoryWithData(selectedCategory) : [];

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
                  variant={
                    selectedCategory === category ? "primary" : "outline"
                  }
                  onClick={() => handleCategorySelect(category)}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Category Results */}
          {selectedCategory && !searchQuery && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Ingredients
              </h2>
              {categoryIngredients.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoryIngredients.map((ingredient, index) => (
                    <div 
                      key={index} 
                      className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => handleIngredientClick(ingredient.name)}
                    >
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
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            ingredient.difficulty === "easy"
                              ? "bg-green-100 text-green-800"
                              : ingredient.difficulty === "medium"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {ingredient.difficulty}
                        </span>
                        <span className="text-sm text-gray-500">
                          Ratio: {ingredient.ratio}:1
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">
                    No ingredients found in this category. Try searching for specific ingredients.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Search Results */}
          {searchResults.length > 0 && searchQuery && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Search Results
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {searchResults.map((ingredient, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleIngredientClick(ingredient.name)}
                  >
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
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          ingredient.difficulty === "easy"
                            ? "bg-green-100 text-green-800"
                            : ingredient.difficulty === "medium"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
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

          {/* Ingredient Substitutions Detail */}
          {selectedIngredient && ingredientSubstitutions.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Substitutions for {selectedIngredient}
                </h2>
                <button
                  onClick={() => {
                    setSelectedIngredient("");
                    setIngredientSubstitutions([]);
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ingredientSubstitutions.map((substitution, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {substitution.substituteIngredient}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Ratio: {substitution.ratio}:1
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      {substitution.cookingNotes}
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          substitution.difficulty === "easy"
                            ? "bg-green-100 text-green-800"
                            : substitution.difficulty === "medium"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {substitution.difficulty}
                      </span>
                      <span className="text-sm text-gray-500">
                        Confidence: {Math.round(substitution.confidence * 100)}%
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
                No ingredients found for "{searchQuery}". Try a different search
                term.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
