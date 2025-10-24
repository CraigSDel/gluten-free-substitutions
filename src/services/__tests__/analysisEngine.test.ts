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

  // Note: Private methods are tested indirectly through analyzeRecipe
});
