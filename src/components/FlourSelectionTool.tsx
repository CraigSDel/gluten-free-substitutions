import React, { useState } from "react";
import { Button } from "./ui/Button";
import flourRecommendationsData from "../data/flourRecommendations.json";

interface RecipeCategory {
  id: string;
  name: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  flourRecommendations: FlourRecommendation[];
}

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

interface FlourSelectionToolProps {
  onRecommendationSelect?: (recommendation: FlourRecommendation) => void;
}

export const FlourSelectionTool: React.FC<FlourSelectionToolProps> = ({
  onRecommendationSelect,
}) => {
  const [selectedCategory, setSelectedCategory] =
    useState<RecipeCategory | null>(null);
  const [selectedRecommendation, setSelectedRecommendation] =
    useState<FlourRecommendation | null>(null);

  // Use data from JSON file with type assertion
  const recipeCategories: RecipeCategory[] =
    flourRecommendationsData.recipeCategories as RecipeCategory[];

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

  const handleCategorySelect = (category: RecipeCategory) => {
    setSelectedCategory(category);
    setSelectedRecommendation(null);
  };

  const handleRecommendationSelect = (recommendation: FlourRecommendation) => {
    setSelectedRecommendation(recommendation);
    if (onRecommendationSelect) {
      onRecommendationSelect(recommendation);
    }
  };

  const handleBack = () => {
    if (selectedRecommendation) {
      setSelectedRecommendation(null);
    } else if (selectedCategory) {
      setSelectedCategory(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Step 1: Select Recipe Category */}
      {!selectedCategory && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What are you making?
          </h2>
          <p className="text-gray-600 mb-6">
            Select the type of recipe to get personalized flour recommendations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recipeCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategorySelect(category)}
                className="text-left p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">
                    {category.name}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(category.difficulty)}`}
                  >
                    {category.difficulty.charAt(0).toUpperCase() +
                      category.difficulty.slice(1)}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{category.description}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Select Flour Recommendation */}
      {selectedCategory && !selectedRecommendation && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Flour Recommendations for {selectedCategory.name}
              </h2>
              <p className="text-gray-600">{selectedCategory.description}</p>
            </div>
            <Button onClick={handleBack} variant="outline" size="sm">
              Back
            </Button>
          </div>

          <div className="space-y-4">
            {selectedCategory.flourRecommendations.map(
              (recommendation, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {recommendation.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Ratio:{" "}
                        {recommendation.ratio === 1
                          ? "1:1"
                          : `${recommendation.ratio}:1`}
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(recommendation.difficulty)}`}
                    >
                      {recommendation.difficulty.charAt(0).toUpperCase() +
                        recommendation.difficulty.slice(1)}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-medium text-green-800 mb-2">
                        ✅ Pros:
                      </h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        {recommendation.pros.map((pro, i) => (
                          <li key={i}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-800 mb-2">
                        ⚠️ Cons:
                      </h4>
                      <ul className="text-sm text-red-700 space-y-1">
                        {recommendation.cons.map((con, i) => (
                          <li key={i}>• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded p-3 mb-3">
                    <h4 className="font-medium text-blue-800 mb-2">
                      💡 When to Use:
                    </h4>
                    <p className="text-sm text-blue-700">
                      {recommendation.whenToUse}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">
                      🏷️ Recommended Brands:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {recommendation.brands.map((brand, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={() => handleRecommendationSelect(recommendation)}
                    variant="primary"
                    className="w-full"
                  >
                    Choose This Flour
                  </Button>
                </div>
              ),
            )}
          </div>
        </div>
      )}

      {/* Step 3: Detailed Instructions */}
      {selectedRecommendation && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                {selectedRecommendation.name} Instructions
              </h2>
              <p className="text-gray-600">For {selectedCategory?.name}</p>
            </div>
            <Button onClick={handleBack} variant="outline" size="sm">
              Back
            </Button>
          </div>

          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-3">
                📋 Step-by-Step Instructions:
              </h3>
              <ol className="space-y-2">
                {selectedRecommendation.tips.map((tip, index) => (
                  <li key={index} className="text-green-700">
                    <span className="font-medium">{index + 1}.</span> {tip}
                  </li>
                ))}
              </ol>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  ✅ What This Flour Does Well:
                </h3>
                <ul className="space-y-1">
                  {selectedRecommendation.pros.map((pro, i) => (
                    <li key={i} className="text-sm text-gray-700">
                      • {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  ⚠️ Things to Watch For:
                </h3>
                <ul className="space-y-1">
                  {selectedRecommendation.cons.map((con, i) => (
                    <li key={i} className="text-sm text-gray-700">
                      • {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">
                🎯 Pro Tip:
              </h3>
              <p className="text-yellow-700">
                {selectedRecommendation.whenToUse}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
