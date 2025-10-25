import React from "react";
import { FlourSelectionTool } from "../components/FlourSelectionTool";

export const HomePage: React.FC = () => {
  const handleRecommendationSelect = (recommendation: unknown) => {
    console.log('Selected flour recommendation:', recommendation);
    // Could add functionality to save or share the recommendation
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Smart Gluten-Free{" "}
            <span className="text-primary-500">Flour Selection</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get personalized flour recommendations for your specific recipe.
            No guesswork, just practical guidance that works.
          </p>
        </div>

        {/* Flour Selection Tool */}
        <FlourSelectionTool onRecommendationSelect={handleRecommendationSelect} />

        {/* How It Works */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">1. Choose Your Recipe</h3>
            <p className="text-gray-600">
              Select what you're making: cookies, bread, cake, pizza, or muffins
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">2. Get Smart Recommendations</h3>
            <p className="text-gray-600">
              Receive personalized flour suggestions with pros, cons, and tips
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👨‍🍳</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">3. Bake with Confidence</h3>
            <p className="text-gray-600">
              Follow step-by-step instructions and avoid common mistakes
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