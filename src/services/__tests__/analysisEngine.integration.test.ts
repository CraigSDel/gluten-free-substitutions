import { RecipeAnalysisEngine } from '../analysisEngine';
import { IngredientDatabase } from '../ingredientDatabase';

describe('RecipeAnalysisEngine Integration', () => {
  let analysisEngine: RecipeAnalysisEngine;
  let ingredientDatabase: IngredientDatabase;

  beforeEach(() => {
    analysisEngine = new RecipeAnalysisEngine();
    ingredientDatabase = new IngredientDatabase();
  });

  describe('Complete Recipe Analysis Flow', () => {
    it('should analyze a complete gluten-containing recipe', async () => {
      const recipeText = `
        Chocolate Chip Cookies
        2 cups all-purpose flour
        1 cup sugar
        1/2 cup butter
        2 eggs
        1 tsp vanilla
        1 cup chocolate chips
        Salt to taste
      `;

      const result = await analysisEngine.analyzeRecipe(recipeText);

      expect(result.hasGluten).toBe(true);
      expect(result.glutenIngredients.length).toBeGreaterThan(0);
      expect(result.substitutions.length).toBeGreaterThan(0);
      expect(result.difficulty).toBeDefined();
      expect(result.cookingTimeAdjustment).toBeDefined();
      expect(result.confidence).toBeGreaterThan(0);
    });

    it('should analyze a gluten-free recipe', async () => {
      const recipeText = `
        Gluten-Free Pancakes
        1 cup almond flour
        2 eggs
        1/4 cup coconut milk
        1 tsp baking powder
        Pinch of salt
      `;

      const result = await analysisEngine.analyzeRecipe(recipeText);

      expect(result.hasGluten).toBe(false);
      expect(result.glutenIngredients).toHaveLength(0);
      expect(result.substitutions).toHaveLength(0);
    });

    it('should handle complex recipes with multiple gluten sources', async () => {
      const recipeText = `
        Beef and Barley Soup
        1 lb beef
        1/2 cup barley
        2 cups beef broth
        1 onion
        2 carrots
        1/4 cup all-purpose flour for thickening
        Salt and pepper
      `;

      const result = await analysisEngine.analyzeRecipe(recipeText);

      expect(result.hasGluten).toBe(true);
      expect(result.glutenIngredients.length).toBeGreaterThanOrEqual(2);
      expect(result.substitutions.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe('Error Handling Integration', () => {
    it('should handle empty recipe gracefully', async () => {
      const result = await analysisEngine.analyzeRecipe('');

      expect(result.hasGluten).toBe(false);
      expect(result.glutenIngredients).toHaveLength(0);
      expect(result.substitutions).toHaveLength(0);
    });

    it('should handle malformed recipe text', async () => {
      const malformedText = '!@#$%^&*()_+{}|:"<>?[]\\;\',./';
      
      const result = await analysisEngine.analyzeRecipe(malformedText);

      expect(result).toBeDefined();
      expect(result.hasGluten).toBe(false);
    });
  });

  describe('Performance Integration', () => {
    it('should analyze large recipes within reasonable time', async () => {
      const largeRecipe = Array(100).fill(0).map((_, i) => 
        `Ingredient ${i}: ${i % 2 === 0 ? 'flour' : 'sugar'} ${i} cups`
      ).join('\n');

      const startTime = Date.now();
      const result = await analysisEngine.analyzeRecipe(largeRecipe);
      const endTime = Date.now();

      expect(endTime - startTime).toBeLessThan(1000); // Should complete within 1 second
      expect(result).toBeDefined();
    });
  });
});
