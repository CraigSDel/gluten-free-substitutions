import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Recipe } from '../types';
import { RecipeAnalysisEngine } from '../services/analysisEngine';
import { ExportService } from '../services/exportService';

interface RecipeContextType {
  currentRecipe: Recipe | null;
  recipeHistory: Recipe[];
  isLoading: boolean;
  error: string | null;
  analyzeRecipe: (text: string) => Promise<void>;
  saveRecipe: (recipe: Recipe) => void;
  deleteRecipe: (id: string) => void;
  exportRecipe: (recipe: Recipe, format: 'text' | 'pdf') => void;
  copyRecipe: (recipe: Recipe) => Promise<void>;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const useRecipe = () => {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error('useRecipe must be used within a RecipeProvider');
  }
  return context;
};

interface RecipeProviderProps {
  children: ReactNode;
}

export const RecipeProvider: React.FC<RecipeProviderProps> = ({ children }) => {
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);
  const [recipeHistory, setRecipeHistory] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const analysisEngine = new RecipeAnalysisEngine();

  const analyzeRecipe = useCallback(async (text: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const analysis = await analysisEngine.analyzeRecipe(text);
      
      if (!analysis.hasGluten) {
        setError('This recipe appears to be already gluten-free!');
        setCurrentRecipe(null);
        return;
      }

      // Create a basic recipe structure from the analysis
      const recipe: Recipe = {
        id: Math.random().toString(36).substr(2, 9),
        title: 'Converted Recipe',
        ingredients: analysis.glutenIngredients,
        instructions: ['Instructions will be updated after conversion'],
        servings: 4,
        prepTime: 15,
        cookTime: 30,
        difficulty: analysis.difficulty,
        originalText: text,
        convertedText: text, // This would be updated with actual conversions
        substitutions: analysis.substitutions,
        createdAt: new Date()
      };

      setCurrentRecipe(recipe);
    } catch (err) {
      setError('Failed to analyze recipe. Please try again.');
      console.error('Recipe analysis error:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const saveRecipe = useCallback((recipe: Recipe) => {
    const updatedHistory = [recipe, ...recipeHistory.filter(r => r.id !== recipe.id)];
    setRecipeHistory(updatedHistory);
    
    // Save to localStorage
    localStorage.setItem('recipeHistory', JSON.stringify(updatedHistory));
  }, [recipeHistory]);

  const deleteRecipe = useCallback((id: string) => {
    const updatedHistory = recipeHistory.filter(recipe => recipe.id !== id);
    setRecipeHistory(updatedHistory);
    
    // Update localStorage
    localStorage.setItem('recipeHistory', JSON.stringify(updatedHistory));
  }, [recipeHistory]);

  const exportRecipe = useCallback((recipe: Recipe, format: 'text' | 'pdf') => {
    if (format === 'text') {
      const text = ExportService.exportAsText(recipe);
      const blob = new Blob([text], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${recipe.title}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } else if (format === 'pdf') {
      ExportService.exportAsPDF(recipe);
    }
  }, []);

  const copyRecipe = useCallback(async (recipe: Recipe) => {
    try {
      await ExportService.copyToClipboard(recipe);
    } catch (err) {
      console.error('Failed to copy recipe:', err);
    }
  }, []);

  // Load recipe history from localStorage on mount
  React.useEffect(() => {
    const saved = localStorage.getItem('recipeHistory');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setRecipeHistory(parsed);
      } catch (err) {
        console.error('Failed to load recipe history:', err);
      }
    }
  }, []);

  const value: RecipeContextType = {
    currentRecipe,
    recipeHistory,
    isLoading,
    error,
    analyzeRecipe,
    saveRecipe,
    deleteRecipe,
    exportRecipe,
    copyRecipe
  };

  return (
    <RecipeContext.Provider value={value}>
      {children}
    </RecipeContext.Provider>
  );
};
