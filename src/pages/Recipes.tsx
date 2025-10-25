import React, { useState } from "react";
import { RecipeCard } from "../components/RecipeCard";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import recipesData from "../data/glutenFreeRecipes.json";

interface Recipe {
  id: string;
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  prepTime: number;
  cookTime: number;
  servings: number;
  image: string;
  ingredients: Array<{
    id: string;
    name: string;
    amount: string;
    checked: boolean;
  }>;
  instructions: Array<{
    id: string;
    step: string;
    checked: boolean;
  }>;
  tips: string[];
  nutrition: {
    calories: number;
    carbs: string;
    protein: string;
    fat: string;
  };
}

export const Recipes: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const recipes: Recipe[] = recipesData.recipes as Recipe[];

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch =
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty =
      difficultyFilter === "all" || recipe.difficulty === difficultyFilter;
    return matchesSearch && matchesDifficulty;
  });

  const handleRecipeSelect = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackToRecipes = () => {
    setSelectedRecipe(null);
  };

  if (selectedRecipe) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Button onClick={handleBackToRecipes} variant="outline" size="sm">
                ← Back to Recipes
              </Button>
            </div>
            <RecipeCard recipe={selectedRecipe} />
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
              Gluten-Free Recipes
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete gluten-free recipes with interactive checklists. Check
              off ingredients and steps as you cook!
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Search recipes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => setDifficultyFilter("all")}
                  variant={difficultyFilter === "all" ? "primary" : "outline"}
                  size="sm"
                >
                  All
                </Button>
                <Button
                  onClick={() => setDifficultyFilter("easy")}
                  variant={difficultyFilter === "easy" ? "primary" : "outline"}
                  size="sm"
                >
                  Easy
                </Button>
                <Button
                  onClick={() => setDifficultyFilter("medium")}
                  variant={
                    difficultyFilter === "medium" ? "primary" : "outline"
                  }
                  size="sm"
                >
                  Medium
                </Button>
                <Button
                  onClick={() => setDifficultyFilter("hard")}
                  variant={difficultyFilter === "hard" ? "primary" : "outline"}
                  size="sm"
                >
                  Hard
                </Button>
              </div>
            </div>
          </div>

          {/* Recipes Grid */}
          <div className="grid gap-6">
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onRecipeSelect={handleRecipeSelect}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-gray-400">🔍</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No recipes found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Recipe Collection Stats
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">
                  {recipes.length}
                </div>
                <div className="text-sm text-gray-500">Total Recipes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {recipes.filter((r) => r.difficulty === "easy").length}
                </div>
                <div className="text-sm text-gray-500">Easy Recipes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">
                  {recipes.filter((r) => r.difficulty === "medium").length}
                </div>
                <div className="text-sm text-gray-500">Medium Recipes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">
                  {recipes.filter((r) => r.difficulty === "hard").length}
                </div>
                <div className="text-sm text-gray-500">Hard Recipes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
