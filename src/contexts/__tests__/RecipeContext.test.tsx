import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { RecipeProvider, useRecipe } from '../RecipeContext';
import { Recipe } from '../../types';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <RecipeProvider>{children}</RecipeProvider>
);

describe('RecipeContext', () => {
  it('should provide initial state', () => {
    const { result } = renderHook(() => useRecipe(), { wrapper });
    
    expect(result.current.currentRecipe).toBeNull();
    expect(result.current.recipeHistory).toEqual([]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('should analyze recipe successfully', async () => {
    const { result } = renderHook(() => useRecipe(), { wrapper });
    
    await act(async () => {
      await result.current.analyzeRecipe('2 cups all-purpose flour\n1 cup sugar');
    });
    
    expect(result.current.isLoading).toBe(false);
    // Note: The actual analysis depends on the implementation
    // This test verifies the function can be called without errors
  });

  it('should save recipe', () => {
    const { result } = renderHook(() => useRecipe(), { wrapper });
    
    const mockRecipe: Recipe = {
      id: 'test-1',
      title: 'Test Recipe',
      ingredients: [],
      instructions: ['Test instruction'],
      servings: 4,
      prepTime: 15,
      cookTime: 30,
      difficulty: 'easy',
      originalText: 'Test recipe text',
      convertedText: 'Test converted text',
      substitutions: [],
      createdAt: new Date()
    };
    
    act(() => {
      result.current.saveRecipe(mockRecipe);
    });
    
    expect(result.current.recipeHistory).toContain(mockRecipe);
  });

  it('should delete recipe', () => {
    const { result } = renderHook(() => useRecipe(), { wrapper });
    
    const mockRecipe: Recipe = {
      id: 'test-1',
      title: 'Test Recipe',
      ingredients: [],
      instructions: ['Test instruction'],
      servings: 4,
      prepTime: 15,
      cookTime: 30,
      difficulty: 'easy',
      originalText: 'Test recipe text',
      convertedText: 'Test converted text',
      substitutions: [],
      createdAt: new Date()
    };
    
    // Save recipe first
    act(() => {
      result.current.saveRecipe(mockRecipe);
    });
    
    expect(result.current.recipeHistory).toContain(mockRecipe);
    
    // Delete recipe
    act(() => {
      result.current.deleteRecipe('test-1');
    });
    
    expect(result.current.recipeHistory).not.toContain(mockRecipe);
  });

  it('should export recipe', () => {
    const { result } = renderHook(() => useRecipe(), { wrapper });
    
    const mockRecipe: Recipe = {
      id: 'test-1',
      title: 'Test Recipe',
      ingredients: [],
      instructions: ['Test instruction'],
      servings: 4,
      prepTime: 15,
      cookTime: 30,
      difficulty: 'easy',
      originalText: 'Test recipe text',
      convertedText: 'Test converted text',
      substitutions: [],
      createdAt: new Date()
    };
    
    // Mock console.log to avoid actual export
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    
    act(() => {
      result.current.exportRecipe(mockRecipe, 'text');
    });
    
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it('should copy recipe to clipboard', async () => {
    const { result } = renderHook(() => useRecipe(), { wrapper });
    
    const mockRecipe: Recipe = {
      id: 'test-1',
      title: 'Test Recipe',
      ingredients: [],
      instructions: ['Test instruction'],
      servings: 4,
      prepTime: 15,
      cookTime: 30,
      difficulty: 'easy',
      originalText: 'Test recipe text',
      convertedText: 'Test converted text',
      substitutions: [],
      createdAt: new Date()
    };
    
    // Mock navigator.clipboard
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockResolvedValue(undefined)
      }
    });
    
    await act(async () => {
      await result.current.copyRecipe(mockRecipe);
    });
    
    expect(navigator.clipboard.writeText).toHaveBeenCalled();
  });
});
