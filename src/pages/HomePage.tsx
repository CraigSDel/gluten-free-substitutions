import React from "react";
import { IngredientLookup } from "../components/IngredientLookup";
import { Substitution } from "../services/ingredientLookup";

export const HomePage: React.FC = () => {
  const handleSubstitutionSelect = (substitution: Substitution) => {
    console.log('Selected substitution:', substitution);
    // Could add functionality to save or share the substitution
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Gluten-Free{" "}
            <span className="text-primary-500">Substitutions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Quick, reliable ingredient substitutions with practical cooking tips.
            No registration required. Your privacy is protected.
          </p>
        </div>

        {/* Ingredient Lookup */}
        <IngredientLookup onSubstitutionSelect={handleSubstitutionSelect} />

        {/* How It Works */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">1. Search Ingredient</h3>
            <p className="text-gray-600">
              Type any gluten-containing ingredient to find alternatives
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">2. See Options</h3>
            <p className="text-gray-600">
              Get tested substitutions with exact ratios and difficulty ratings
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👨‍🍳</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">3. Cook with Confidence</h3>
            <p className="text-gray-600">
              Use practical cooking tips to make successful substitutions
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Why Choose Our Tool?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Privacy-First</h3>
                <p className="text-gray-600">
                  No data collection, no registration required
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Tested Substitutions
                </h3>
                <p className="text-gray-600">
                  All alternatives are tested and reliable
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Instant Results
                </h3>
                <p className="text-gray-600">
                  Get substitutions in seconds, not hours
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Free Forever</h3>
                <p className="text-gray-600">
                  No hidden costs, no premium features
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};