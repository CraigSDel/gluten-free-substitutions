import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecipeProvider } from './contexts/RecipeContext';
import { IngredientProvider } from './contexts/IngredientContext';
import { UIProvider } from './contexts/UIContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { LoadingSpinner } from './components/ui/LoadingSpinner';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const RecipeConverter = lazy(() => import('./pages/RecipeConverter').then(module => ({ default: module.RecipeConverter })));
const IngredientDatabase = lazy(() => import('./pages/IngredientDatabase').then(module => ({ default: module.IngredientDatabase })));
const CookingTips = lazy(() => import('./pages/CookingTips').then(module => ({ default: module.CookingTips })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));

const App: React.FC = () => {
  return (
    <Router>
      <UIProvider>
        <RecipeProvider>
          <IngredientProvider>
            <div className="min-h-screen bg-gray-50">
              <Header />
              <main>
                <Suspense fallback={
                  <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center">
                      <LoadingSpinner size="lg" className="mx-auto mb-4" />
                      <p className="text-gray-600">Loading...</p>
                    </div>
                  </div>
                }>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/converter" element={<RecipeConverter />} />
                    <Route path="/ingredients" element={<IngredientDatabase />} />
                    <Route path="/tips" element={<CookingTips />} />
                    <Route path="/about" element={<About />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
          </IngredientProvider>
        </RecipeProvider>
      </UIProvider>
    </Router>
  );
};

export default App;