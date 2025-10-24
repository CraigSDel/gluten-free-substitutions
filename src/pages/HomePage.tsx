import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Button } from '../components/ui/Button';
import { RecipeInput } from '../components/recipe/RecipeInput';
import { useRecipe } from '../contexts/RecipeContext';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { analyzeRecipe, isLoading, currentRecipe, error } = useRecipe();

  const handleAnalyze = async (text: string) => {
    await analyzeRecipe(text);
    if (currentRecipe) {
      navigate('/converter');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Convert Any Recipe to{' '}
            <span className="text-primary-500">Gluten-Free</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            No registration required. Your privacy is protected. Get instant, 
            accurate substitutions for any recipe in seconds.
          </p>
        </div>

        {/* Recipe Converter */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Paste Your Recipe Below
            </h2>
            <RecipeInput
              onAnalyze={handleAnalyze}
              isLoading={isLoading}
              placeholder="Paste your recipe here with ingredients and instructions..."
            />
            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700">{error}</p>
              </div>
            )}
          </div>

          {/* How It Works */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">1. Paste Recipe</h3>
              <p className="text-gray-600">
                Copy and paste any recipe with ingredients and instructions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">2. AI Analysis</h3>
              <p className="text-gray-600">
                Our system identifies gluten-containing ingredients automatically
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">3. Get Substitutions</h3>
              <p className="text-gray-600">
                Receive tested alternatives with exact ratios and cooking tips
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
                  <p className="text-gray-600">No data collection, no registration required</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Medically Safe</h3>
                  <p className="text-gray-600">All substitutions are safe for celiac disease</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Instant Results</h3>
                  <p className="text-gray-600">Get conversions in seconds, not hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Free Forever</h3>
                  <p className="text-gray-600">No hidden costs, no premium features</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
