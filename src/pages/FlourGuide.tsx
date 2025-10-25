import React, { useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import flourRecommendationsData from "../data/flourRecommendations.json";

interface FlourRecommendation {
  flour: string;
  name: string;
  ratio: number;
  difficulty: "easy" | "medium" | "hard";
  pros: string[];
  cons: string[];
  tips: string[];
  whenToUse: string;
  brands: string[];
}

interface RecipeCategory {
  id: string;
  name: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  flourRecommendations: FlourRecommendation[];
}

export const FlourGuide: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<RecipeCategory | null>(null);
  const [selectedFlour, setSelectedFlour] =
    useState<FlourRecommendation | null>(null);

  const recipeCategories: RecipeCategory[] =
    flourRecommendationsData.recipeCategories as RecipeCategory[];

  const filteredCategories = recipeCategories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800 border-green-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "hard":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedFlour(null);
  };

  const handleBackToFlours = () => {
    setSelectedFlour(null);
  };

  if (selectedFlour && selectedCategory) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Button onClick={handleBackToFlours} variant="outline" size="sm">
                ← Back to Flour Options
              </Button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedFlour.name} for {selectedCategory.name}
              </h1>
              <p className="text-gray-600 mb-6">
                Complete guide to using {selectedFlour.name} in your{" "}
                {selectedCategory.name} recipes.
              </p>

              <div className="space-y-8">
                {/* Basic Info */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 mb-2">
                      📏 Ratio
                    </h3>
                    <p className="text-blue-700">
                      {selectedFlour.ratio === 1
                        ? "1:1"
                        : `${selectedFlour.ratio}:1`}{" "}
                      substitution
                    </p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 mb-2">
                      🎯 Difficulty
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(selectedFlour.difficulty)}`}
                    >
                      {selectedFlour.difficulty.charAt(0).toUpperCase() +
                        selectedFlour.difficulty.slice(1)}
                    </span>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-800 mb-2">
                      🏷️ Best Brands
                    </h3>
                    <p className="text-purple-700 text-sm">
                      {selectedFlour.brands.slice(0, 2).join(", ")}
                    </p>
                  </div>
                </div>

                {/* Step-by-Step Instructions */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-green-800 mb-4 text-lg">
                    📋 Step-by-Step Instructions
                  </h3>
                  <ol className="space-y-3">
                    {selectedFlour.tips.map((tip, index) => (
                      <li key={index} className="text-green-700">
                        <span className="font-medium text-green-800">
                          {index + 1}.
                        </span>{" "}
                        {tip}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Pros and Cons */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 mb-3">
                      ✅ Advantages
                    </h3>
                    <ul className="space-y-2">
                      {selectedFlour.pros.map((pro, index) => (
                        <li key={index} className="text-green-700 text-sm">
                          • {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h3 className="font-semibold text-red-800 mb-3">
                      ⚠️ Considerations
                    </h3>
                    <ul className="space-y-2">
                      {selectedFlour.cons.map((con, index) => (
                        <li key={index} className="text-red-700 text-sm">
                          • {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* When to Use */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">
                    💡 When to Use This Flour
                  </h3>
                  <p className="text-blue-700">{selectedFlour.whenToUse}</p>
                </div>

                {/* Recommended Brands */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    🏷️ Recommended Brands
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedFlour.brands.map((brand, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-700"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedCategory) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <Button
                onClick={handleBackToCategories}
                variant="outline"
                size="sm"
              >
                ← Back to Recipe Types
              </Button>
            </div>

            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Flour Guide for {selectedCategory.name}
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the best gluten-free flour for your{" "}
                {selectedCategory.name} recipe. Each option includes detailed
                instructions and tips.
              </p>
            </div>

            <div className="grid gap-6">
              {selectedCategory.flourRecommendations.map((flour, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {flour.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Ratio: {flour.ratio === 1 ? "1:1" : `${flour.ratio}:1`}{" "}
                        substitution
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(flour.difficulty)}`}
                    >
                      {flour.difficulty.charAt(0).toUpperCase() +
                        flour.difficulty.slice(1)}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-medium text-green-800 mb-2">
                        ✅ Pros:
                      </h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        {flour.pros.slice(0, 3).map((pro, i) => (
                          <li key={i}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-800 mb-2">
                        ⚠️ Cons:
                      </h4>
                      <ul className="text-sm text-red-700 space-y-1">
                        {flour.cons.slice(0, 3).map((con, i) => (
                          <li key={i}>• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded p-3 mb-4">
                    <h4 className="font-medium text-blue-800 mb-1">
                      💡 When to Use:
                    </h4>
                    <p className="text-sm text-blue-700">{flour.whenToUse}</p>
                  </div>

                  <Button
                    onClick={() => setSelectedFlour(flour)}
                    variant="primary"
                    className="w-full"
                  >
                    View Complete Guide
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Gluten-Free Flour Guide
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get personalized flour recommendations for your specific recipe
              type. Complete with step-by-step instructions and pro tips.
            </p>
          </div>

          {/* Search */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <Input
              type="text"
              placeholder="Search recipe types..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Recipe Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => setSelectedCategory(category)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {category.description}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(category.difficulty)}`}
                  >
                    {category.difficulty.charAt(0).toUpperCase() +
                      category.difficulty.slice(1)}
                  </span>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">
                    {category.flourRecommendations.length} flour options
                    available
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {category.flourRecommendations
                      .slice(0, 2)
                      .map((flour, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                        >
                          {flour.name}
                        </span>
                      ))}
                    {category.flourRecommendations.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        +{category.flourRecommendations.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  View Flour Options
                </Button>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Flour Guide Stats
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">
                  {recipeCategories.length}
                </div>
                <div className="text-sm text-gray-500">Recipe Types</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {recipeCategories.reduce(
                    (total, cat) => total + cat.flourRecommendations.length,
                    0,
                  )}
                </div>
                <div className="text-sm text-gray-500">Flour Options</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {
                    new Set(
                      recipeCategories.flatMap((cat) =>
                        cat.flourRecommendations.map((f) => f.name),
                      ),
                    ).size
                  }
                </div>
                <div className="text-sm text-gray-500">Unique Flours</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {
                    recipeCategories.filter((cat) => cat.difficulty === "easy")
                      .length
                  }
                </div>
                <div className="text-sm text-gray-500">Easy Recipes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
