import React from "react";
import { FlourSelectionTool } from "../components/FlourSelectionTool";

export const HomePage: React.FC = () => {
  const handleRecommendationSelect = (recommendation: unknown) => {
    console.log("Selected flour recommendation:", recommendation);
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
            Get personalized flour recommendations for your specific recipe. No
            guesswork, just practical guidance that works.
          </p>
        </div>

        {/* Flour Selection Tool */}
        <FlourSelectionTool
          onRecommendationSelect={handleRecommendationSelect}
        />

        {/* How It Works */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">
              1. Choose Your Recipe
            </h3>
            <p className="text-gray-600">
              Select what you're making: cookies, bread, cake, pizza, or muffins
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">
              2. Get Smart Recommendations
            </h3>
            <p className="text-gray-600">
              Receive personalized flour suggestions with pros, cons, and tips
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👨‍🍳</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">
              3. Bake with Confidence
            </h3>
            <p className="text-gray-600">
              Follow step-by-step instructions and avoid common mistakes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
