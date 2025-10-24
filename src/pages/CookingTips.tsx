import React from 'react';
import cookingTipsData from '../data/cookingTips.json';

export const CookingTips: React.FC = () => {
  const tips = cookingTipsData.tips;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Gluten-Free Cooking Tips
            </h1>
            <p className="text-gray-600">
              Expert advice for successful gluten-free cooking and baking
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip) => (
              <div key={tip.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {tip.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    tip.difficulty === 'easy' 
                      ? 'bg-green-100 text-green-800'
                      : tip.difficulty === 'medium'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {tip.difficulty}
                  </span>
                </div>
                <p className="text-gray-700 mb-3">
                  {tip.content}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 capitalize">
                    {tip.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Resources */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Additional Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600">📚</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Learn More</h3>
                <p className="text-sm text-gray-600">
                  Understanding gluten and its sources in food
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-secondary-600">🛡️</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Safety First</h3>
                <p className="text-sm text-gray-600">
                  Preventing cross-contamination in your kitchen
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600">🍽️</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Recipe Ideas</h3>
                <p className="text-sm text-gray-600">
                  Discover naturally gluten-free recipes and ingredients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
