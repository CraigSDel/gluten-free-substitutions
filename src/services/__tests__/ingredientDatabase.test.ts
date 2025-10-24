import { IngredientDatabase } from '../ingredientDatabase';

describe('IngredientDatabase', () => {
  let database: IngredientDatabase;

  beforeEach(() => {
    database = new IngredientDatabase();
  });

  describe('findSubstitution', () => {
    it('should find substitutions for gluten ingredients', () => {
      const substitutions = database.findSubstitution('all-purpose flour');
      
      expect(substitutions.length).toBeGreaterThan(0);
      expect(substitutions[0]).toHaveProperty('originalIngredient');
      expect(substitutions[0]).toHaveProperty('substituteIngredient');
      expect(substitutions[0]).toHaveProperty('ratio');
    });

    it('should return empty array for gluten-free ingredients', () => {
      const substitutions = database.findSubstitution('rice flour');
      
      expect(substitutions).toHaveLength(0);
    });

    it('should handle case-insensitive search', () => {
      const substitutions = database.findSubstitution('FLOUR');
      
      expect(substitutions.length).toBeGreaterThan(0);
    });
  });

  describe('searchIngredients', () => {
    it('should search for ingredients', () => {
      const results = database.searchIngredients('flour');
      
      expect(results.length).toBeGreaterThan(0);
      expect(results[0]).toHaveProperty('name');
      expect(results[0]).toHaveProperty('category');
    });

    it('should return empty array for no matches', () => {
      const results = database.searchIngredients('nonexistent');
      
      expect(results).toHaveLength(0);
    });
  });

  describe('getAllCategories', () => {
    it('should return all ingredient categories', () => {
      const categories = database.getAllCategories();
      
      expect(categories.length).toBeGreaterThan(0);
      expect(categories).toContain('flour');
    });
  });

  describe('getIngredientsByCategory', () => {
    it('should return ingredients for a category', () => {
      const ingredients = database.getIngredientsByCategory('flour');
      
      expect(ingredients.length).toBeGreaterThan(0);
    });

    it('should return empty array for unknown category', () => {
      const ingredients = database.getIngredientsByCategory('unknown');
      
      expect(ingredients).toHaveLength(0);
    });
  });
});
