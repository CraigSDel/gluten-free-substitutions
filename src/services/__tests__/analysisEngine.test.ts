import { RecipeAnalysisEngine } from '../analysisEngine';

describe('RecipeAnalysisEngine', () => {
  let engine: RecipeAnalysisEngine;

  beforeEach(() => {
    engine = new RecipeAnalysisEngine();
  });

  describe('analyzeRecipe', () => {
    it('should identify gluten-free recipes', async () => {
      const recipe = '2 cups rice\n1 cup vegetables\nSalt to taste';
      const result = await engine.analyzeRecipe(recipe);
      
      expect(result.hasGluten).toBe(false);
      expect(result.glutenIngredients).toHaveLength(0);
      expect(result.substitutions).toHaveLength(0);
    });

    it('should identify gluten-containing ingredients', async () => {
      const recipe = '2 cups all-purpose flour\n1 cup sugar\n3 eggs';
      const result = await engine.analyzeRecipe(recipe);
      
      expect(result.hasGluten).toBe(true);
      expect(result.glutenIngredients.length).toBeGreaterThan(0);
      expect(result.substitutions.length).toBeGreaterThan(0);
    });

    it('should provide substitution recommendations', async () => {
      const recipe = '2 cups wheat flour\n1 cup milk';
      const result = await engine.analyzeRecipe(recipe);
      
      if (result.hasGluten) {
        expect(result.substitutions).toBeDefined();
        expect(result.substitutions.length).toBeGreaterThan(0);
        
        const substitution = result.substitutions[0];
        expect(substitution.originalIngredient).toBeDefined();
        expect(substitution.substituteIngredient).toBeDefined();
        expect(substitution.ratio).toBeDefined();
      }
    });

    it('should calculate difficulty correctly', async () => {
      const recipe = '2 cups all-purpose flour\n1 cup breadcrumbs';
      const result = await engine.analyzeRecipe(recipe);
      
      expect(['easy', 'medium', 'hard']).toContain(result.difficulty);
    });

    it('should handle empty recipe', async () => {
      const result = await engine.analyzeRecipe('');
      
      expect(result.hasGluten).toBe(false);
      expect(result.glutenIngredients).toHaveLength(0);
    });
  });

  describe('extractIngredients', () => {
    it('should extract ingredients from recipe text', () => {
      const recipe = '2 cups flour\n1 cup sugar\n3 eggs\nSalt to taste';
      const ingredients = engine.extractIngredients(recipe);
      
      expect(ingredients.length).toBeGreaterThan(0);
      expect(ingredients).toContain('flour');
      expect(ingredients).toContain('sugar');
    });

    it('should handle various formats', () => {
      const recipe = '• 2 cups flour\n- 1 cup sugar\n* 3 eggs';
      const ingredients = engine.extractIngredients(recipe);
      
      expect(ingredients.length).toBeGreaterThan(0);
    });
  });

  describe('identifyGlutenIngredients', () => {
    it('should identify common gluten ingredients', () => {
      const ingredients = ['flour', 'bread', 'pasta', 'wheat'];
      const glutenIngredients = engine.identifyGlutenIngredients(ingredients);
      
      expect(glutenIngredients.length).toBeGreaterThan(0);
    });

    it('should not identify gluten-free ingredients', () => {
      const ingredients = ['rice', 'quinoa', 'corn', 'potatoes'];
      const glutenIngredients = engine.identifyGlutenIngredients(ingredients);
      
      expect(glutenIngredients).toHaveLength(0);
    });
  });
});
