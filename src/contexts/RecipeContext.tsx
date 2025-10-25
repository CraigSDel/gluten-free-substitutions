import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { Recipe } from "../types";

interface RecipeContextType {
  currentRecipe: Recipe | null;
  recipeHistory: Recipe[];
  isLoading: boolean;
  error: string | null;
  analyzeRecipe: (text: string) => Promise<void>;
  analyzeStructuredRecipe: (recipe: {
    title: string;
    ingredients: Array<{ amount: string; unit: string; name: string }>;
    instructions: string[];
  }) => Promise<void>;
  saveRecipe: (recipe: Recipe) => void;
  deleteRecipe: (id: string) => void;
  exportRecipe: (recipe: Recipe, format: "text" | "pdf") => void;
  copyRecipe: (recipe: Recipe) => Promise<void>;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const useRecipe = () => {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error("useRecipe must be used within a RecipeProvider");
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

  const analyzeRecipe = useCallback(async (text: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // Mock analysis for now - this would normally call the analysis engine
      const mockRecipe: Recipe = {
        id: Date.now().toString(),
        title: "Analyzed Recipe",
        originalText: text,
        convertedText: text,
        ingredients: [],
        instructions: [],
        substitutions: [],
        difficulty: "easy",
        prepTime: 15,
        cookTime: 30,
        servings: 4,
        createdAt: new Date(),
      };

      setCurrentRecipe(mockRecipe);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Analysis failed");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const analyzeStructuredRecipe = useCallback(
    async (recipe: {
      title: string;
      ingredients: Array<{ amount: string; unit: string; name: string }>;
      instructions: string[];
    }) => {
      setIsLoading(true);
      setError(null);

      try {
        // Mock structured analysis
        const mockRecipe: Recipe = {
          id: Date.now().toString(),
          title: recipe.title,
          originalText: "",
          convertedText: "",
          ingredients: recipe.ingredients.map((ing, index) => ({
            id: `ing-${index}`,
            name: ing.name,
            amount: parseFloat(ing.amount) || 0,
            unit: ing.unit,
            isGlutenFree: false,
            confidence: 0.8,
            substitutions: [],
          })),
          instructions: recipe.instructions,
          substitutions: [],
          difficulty: "easy",
          prepTime: 15,
          cookTime: 30,
          servings: 4,
          createdAt: new Date(),
        };

        setCurrentRecipe(mockRecipe);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Analysis failed");
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const saveRecipe = useCallback((recipe: Recipe) => {
    setRecipeHistory((prev) => [...prev, recipe]);
  }, []);

  const deleteRecipe = useCallback(
    (id: string) => {
      setRecipeHistory((prev) => prev.filter((recipe) => recipe.id !== id));
      if (currentRecipe?.id === id) {
        setCurrentRecipe(null);
      }
    },
    [currentRecipe],
  );

  const exportRecipe = useCallback((recipe: Recipe, format: "text" | "pdf") => {
    // Mock export functionality
    console.log(`Exporting recipe ${recipe.id} as ${format}`);
  }, []);

  const copyRecipe = useCallback(async (recipe: Recipe) => {
    try {
      await navigator.clipboard.writeText(recipe.originalText || recipe.title);
    } catch (err) {
      console.error("Failed to copy recipe:", err);
    }
  }, []);

  const value: RecipeContextType = {
    currentRecipe,
    recipeHistory,
    isLoading,
    error,
    analyzeRecipe,
    analyzeStructuredRecipe,
    saveRecipe,
    deleteRecipe,
    exportRecipe,
    copyRecipe,
  };

  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
};
