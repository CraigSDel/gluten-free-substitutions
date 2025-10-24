import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { GlutenFreeIngredient, Substitution } from '../types';
import { IngredientDatabase } from '../services/ingredientDatabase';

interface IngredientContextType {
  ingredients: GlutenFreeIngredient[];
  searchResults: GlutenFreeIngredient[];
  searchQuery: string;
  searchIngredients: (query: string) => void;
  getSubstitution: (ingredient: string) => Substitution[];
  getAllCategories: () => string[];
  getIngredientsByCategory: (category: string) => string[];
}

const IngredientContext = createContext<IngredientContextType | undefined>(undefined);

export const useIngredient = () => {
  const context = useContext(IngredientContext);
  if (context === undefined) {
    throw new Error('useIngredient must be used within an IngredientProvider');
  }
  return context;
};

interface IngredientProviderProps {
  children: ReactNode;
}

export const IngredientProvider: React.FC<IngredientProviderProps> = ({ children }) => {
  const [ingredients] = useState<GlutenFreeIngredient[]>([]);
  const [searchResults, setSearchResults] = useState<GlutenFreeIngredient[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const ingredientDatabase = new IngredientDatabase();

  const searchIngredients = useCallback((query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    const results = ingredientDatabase.searchIngredients(query);
    setSearchResults(results);
  }, []);

  const getSubstitution = useCallback((ingredient: string) => {
    return ingredientDatabase.findSubstitution(ingredient);
  }, []);

  const getAllCategories = useCallback(() => {
    return ingredientDatabase.getAllCategories();
  }, []);

  const getIngredientsByCategory = useCallback((category: string) => {
    return ingredientDatabase.getIngredientsByCategory(category);
  }, []);

  const value: IngredientContextType = {
    ingredients,
    searchResults,
    searchQuery,
    searchIngredients,
    getSubstitution,
    getAllCategories,
    getIngredientsByCategory
  };

  return (
    <IngredientContext.Provider value={value}>
      {children}
    </IngredientContext.Provider>
  );
};
