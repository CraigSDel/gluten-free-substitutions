import React, { useState } from "react";
import { Button } from "./ui/Button";

interface Ingredient {
  id: string;
  name: string;
  amount: string;
  checked: boolean;
}

interface Instruction {
  id: string;
  step: string;
  checked: boolean;
}

interface Recipe {
  id: string;
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  prepTime: number;
  cookTime: number;
  servings: number;
  image: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
  tips: string[];
  nutrition: {
    calories: number;
    carbs: string;
    protein: string;
    fat: string;
  };
}

interface RecipeCardProps {
  recipe: Recipe;
  onRecipeSelect?: (recipe: Recipe) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  onRecipeSelect,
}) => {
  const [ingredients, setIngredients] = useState<Ingredient[]>(
    recipe.ingredients,
  );
  const [instructions, setInstructions] = useState<Instruction[]>(
    recipe.instructions,
  );
  const [showDetails, setShowDetails] = useState(false);

  const toggleIngredient = (id: string) => {
    setIngredients((prev) =>
      prev.map((ing) =>
        ing.id === id ? { ...ing, checked: !ing.checked } : ing,
      ),
    );
  };

  const toggleInstruction = (id: string) => {
    setInstructions((prev) =>
      prev.map((inst) =>
        inst.id === id ? { ...inst, checked: !inst.checked } : inst,
      ),
    );
  };

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

  const completedIngredients = ingredients.filter((ing) => ing.checked).length;
  const completedInstructions = instructions.filter(
    (inst) => inst.checked,
  ).length;
  const totalProgress =
    ((completedIngredients + completedInstructions) /
      (ingredients.length + instructions.length)) *
    100;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Recipe Header */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {recipe.title}
            </h3>
            <p className="text-gray-600 mb-3">{recipe.description}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>⏱️ {recipe.prepTime} min prep</span>
              <span>🔥 {recipe.cookTime} min cook</span>
              <span>👥 {recipe.servings} servings</span>
            </div>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(recipe.difficulty)}`}
          >
            {recipe.difficulty.charAt(0).toUpperCase() +
              recipe.difficulty.slice(1)}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm text-gray-500">
              {Math.round(totalProgress)}% complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${totalProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Button
            onClick={() => setShowDetails(!showDetails)}
            variant="primary"
            size="sm"
          >
            {showDetails ? "Hide Details" : "Show Details"}
          </Button>
          {onRecipeSelect && (
            <Button
              onClick={() => onRecipeSelect(recipe)}
              variant="outline"
              size="sm"
            >
              Start Cooking
            </Button>
          )}
        </div>
      </div>

      {/* Recipe Details */}
      {showDetails && (
        <div className="border-t border-gray-200 p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Ingredients */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                🛒 Ingredients ({completedIngredients}/{ingredients.length})
                <span className="ml-2 text-sm text-gray-500">
                  {completedIngredients === ingredients.length ? "✅" : ""}
                </span>
              </h4>
              <div className="space-y-2">
                {ingredients.map((ingredient) => (
                  <label
                    key={ingredient.id}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={ingredient.checked}
                      onChange={() => toggleIngredient(ingredient.id)}
                      className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <span
                      className={`text-sm ${ingredient.checked ? "line-through text-gray-500" : "text-gray-700"}`}
                    >
                      <span className="font-medium">{ingredient.amount}</span>{" "}
                      {ingredient.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Instructions */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                👨‍🍳 Instructions ({completedInstructions}/{instructions.length})
                <span className="ml-2 text-sm text-gray-500">
                  {completedInstructions === instructions.length ? "✅" : ""}
                </span>
              </h4>
              <div className="space-y-3">
                {instructions.map((instruction, index) => (
                  <label
                    key={instruction.id}
                    className="flex items-start space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={instruction.checked}
                      onChange={() => toggleInstruction(instruction.id)}
                      className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 mt-1"
                    />
                    <div className="flex-1">
                      <span
                        className={`text-sm ${instruction.checked ? "line-through text-gray-500" : "text-gray-700"}`}
                      >
                        <span className="font-medium text-primary-600">
                          {index + 1}.
                        </span>{" "}
                        {instruction.step}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="mt-6">
            <h4 className="font-semibold text-gray-900 mb-3">💡 Pro Tips</h4>
            <ul className="space-y-1">
              {recipe.tips.map((tip, index) => (
                <li key={index} className="text-sm text-gray-600">
                  • {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Nutrition */}
          <div className="mt-6 bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">
              📊 Nutrition (per serving)
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="font-semibold text-gray-900">
                  {recipe.nutrition.calories}
                </div>
                <div className="text-gray-500">Calories</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-900">
                  {recipe.nutrition.carbs}
                </div>
                <div className="text-gray-500">Carbs</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-900">
                  {recipe.nutrition.protein}
                </div>
                <div className="text-gray-500">Protein</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-900">
                  {recipe.nutrition.fat}
                </div>
                <div className="text-gray-500">Fat</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
