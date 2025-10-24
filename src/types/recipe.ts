export interface Recipe {
  id: string;
  title: string;
  ingredients: Ingredient[];
  instructions: string[];
  servings: number;
  prepTime: number;
  cookTime: number;
  difficulty: "easy" | "medium" | "hard";
  originalText: string;
  convertedText: string;
  substitutions: Substitution[];
  createdAt: Date;
}

export interface Ingredient {
  id: string;
  name: string;
  amount: number;
  unit: string;
  isGlutenFree: boolean;
  confidence: number;
  substitutions: Substitution[];
  notes?: string;
}

export interface Substitution {
  id: string;
  originalIngredient: string;
  substituteIngredient: string;
  ratio: number;
  unit: string;
  difficulty: "easy" | "medium" | "hard";
  cookingNotes: string;
  nutritionalImpact: string;
  confidence: number;
}

export interface GlutenFreeIngredient {
  name: string;
  category: string;
  substitutions: string[];
  ratio: number;
  notes: string;
  difficulty: "easy" | "medium" | "hard";
}

export interface RecipeAnalysis {
  hasGluten: boolean;
  glutenIngredients: Ingredient[];
  difficulty: "easy" | "medium" | "hard";
  substitutions: Substitution[];
  cookingTimeAdjustment: number;
  confidence: number;
}
