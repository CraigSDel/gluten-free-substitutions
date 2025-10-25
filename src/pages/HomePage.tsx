import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Gluten-Free{" "}
            <span className="text-primary-500">Cooking Made Easy</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Complete gluten-free recipes with interactive checklists. Check off
            ingredients and steps as you cook!
          </p>
        </div>

        {/* Main Actions */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍪</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Complete Recipes
              </h3>
              <p className="text-gray-600 mb-6">
                Full gluten-free recipes with step-by-step instructions and
                interactive checklists
              </p>
              <Link to="/recipes">
                <Button variant="primary" className="w-full">
                  Browse Recipes
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Flour Guide
              </h3>
              <p className="text-gray-600 mb-6">
                Smart flour selection tool with personalized recommendations for
                your recipes
              </p>
              <Link to="/flour-guide">
                <Button variant="outline" className="w-full">
                  Open Flour Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📋</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">
              1. Choose Your Recipe
            </h3>
            <p className="text-gray-600">
              Browse complete gluten-free recipes with detailed instructions
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✅</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">
              2. Check Off as You Cook
            </h3>
            <p className="text-gray-600">
              Interactive checklists for ingredients and steps - never miss
              anything
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎉</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">
              3. Enjoy Perfect Results
            </h3>
            <p className="text-gray-600">
              Follow proven recipes and get delicious gluten-free results every
              time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
