import React, { useState } from "react";
import { useRecipe } from "../contexts/RecipeContext";
import { RecipeInput } from "../components/recipe/RecipeInput";
import { StructuredRecipeInput } from "../components/recipe/StructuredRecipeInput";
import { AnalysisResults } from "../components/recipe/AnalysisResults";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";
import { RecipeAnalysis } from "../types";

export const RecipeConverter: React.FC = () => {
  const {
    currentRecipe,
    isLoading,
    error,
    analyzeRecipe,
    analyzeStructuredRecipe,
    saveRecipe,
    exportRecipe,
    copyRecipe,
  } = useRecipe();

  const [inputMode, setInputMode] = useState<'structured' | 'text'>('structured');

  const handleAnalyze = async (text: string) => {
    await analyzeRecipe(text);
  };

  const handleStructuredAnalyze = async (recipe: { title: string; ingredients: Array<{ amount: string; unit: string; name: string }>; instructions: string[] }) => {
    await analyzeStructuredRecipe(recipe);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Recipe Converter
            </h1>
            <p className="text-gray-600">
              Convert any recipe to gluten-free with accurate substitutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Enter Your Recipe
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => setInputMode('structured')}
                    className={`px-3 py-1 rounded text-sm ${
                      inputMode === 'structured'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    Structured
                  </button>
                  <button
                    onClick={() => setInputMode('text')}
                    className={`px-3 py-1 rounded text-sm ${
                      inputMode === 'text'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    Text
                  </button>
                </div>
              </div>
              
              {inputMode === 'structured' ? (
                <StructuredRecipeInput
                  onAnalyze={handleStructuredAnalyze}
                  isLoading={isLoading}
                />
              ) : (
                <RecipeInput
                  onAnalyze={handleAnalyze}
                  isLoading={isLoading}
                  placeholder="Paste your recipe here with ingredients and instructions..."
                />
              )}
              
              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700">{error}</p>
                </div>
              )}
            </div>

            {/* Results Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Analysis Results
              </h2>
              {isLoading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="text-center">
                    <LoadingSpinner size="lg" className="mx-auto mb-4" />
                    <p className="text-gray-600">Analyzing your recipe...</p>
                  </div>
                </div>
              ) : currentRecipe ? (
                <AnalysisResults
                  analysis={currentRecipe as unknown as RecipeAnalysis}
                  onSave={saveRecipe}
                  onExport={exportRecipe}
                  onCopy={copyRecipe}
                />
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-gray-400">📝</span>
                  </div>
                  <p className="text-gray-600">
                    Enter a recipe to see gluten-free substitutions
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
