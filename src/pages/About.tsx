import React from "react";
import { Button } from "../components/ui/Button";

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              About GlutenFree Substitutions
            </h1>
            <p className="text-xl text-gray-600">
              Making gluten-free cooking accessible, one recipe at a time
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 mb-4">
                We believe that everyone should be able to enjoy their favorite
                recipes, regardless of dietary restrictions. Our tool helps you
                convert any recipe to gluten-free with confidence and accuracy.
              </p>
              <p className="text-gray-700">
                Whether you have celiac disease, gluten intolerance, or simply
                choose to follow a gluten-free diet, we're here to make your
                cooking journey easier.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Privacy First
              </h2>
              <p className="text-gray-700 mb-4">
                We don't collect your personal data, require registration, or
                store your recipes on our servers. Everything is processed
                locally in your browser, ensuring your privacy is protected.
              </p>
              <p className="text-gray-700">
                Your recipe history is stored locally on your device and never
                transmitted to our servers.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Medical Disclaimer
            </h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                <strong>Important:</strong> This tool is for informational
                purposes only and is not intended as medical advice. Always
                consult with your healthcare provider before making significant
                dietary changes.
              </p>
              <p className="text-gray-700">
                While we strive to provide accurate substitution information,
                individual sensitivities may vary. Always read ingredient labels
                carefully and consult with a healthcare professional if you have
                concerns about specific ingredients.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  AI-Powered Analysis
                </h3>
                <p className="text-gray-600">
                  Our advanced algorithm identifies gluten-containing
                  ingredients with high accuracy
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Tested Substitutions
                </h3>
                <p className="text-gray-600">
                  All substitution recommendations are based on tested ratios
                  and cooking techniques
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Instant Results</h3>
                <p className="text-gray-600">
                  Get your converted recipe in seconds, not hours of research
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-8">
              Try converting your first recipe today - it's completely free!
            </p>
            <Button
              onClick={() => (window.location.href = "/converter")}
              size="lg"
              className="px-8 py-3"
            >
              Start Converting Recipes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
