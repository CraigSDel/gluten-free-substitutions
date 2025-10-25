import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UIProvider } from "./contexts/UIContext";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { LoadingSpinner } from "./components/ui/LoadingSpinner";
import { ErrorBoundary } from "./components/ErrorBoundary";

// Lazy load pages for code splitting
const HomePage = lazy(() =>
  import("./pages/HomePage").then((module) => ({ default: module.HomePage })),
);
const Recipes = lazy(() =>
  import("./pages/Recipes").then((module) => ({ default: module.Recipes })),
);
const About = lazy(() =>
  import("./pages/About").then((module) => ({ default: module.About })),
);

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <UIProvider>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main>
              <Suspense
                fallback={
                  <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center">
                      <LoadingSpinner size="lg" className="mx-auto mb-4" />
                      <p className="text-gray-600">Loading...</p>
                    </div>
                  </div>
                }
              >
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/recipes" element={<Recipes />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </UIProvider>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
