import { GlutenFreeIngredient, Substitution } from '../types';
import ingredientsData from '../data/ingredients.json';

export class IngredientDatabase {
  private data: typeof ingredientsData;

  constructor() {
    this.data = ingredientsData;
  }

  findSubstitution(ingredient: string): Substitution[] {
    const normalized = this.normalizeIngredient(ingredient);
    const glutenIngredient = this.data.glutenIngredients.find(item => 
      item.name.toLowerCase() === normalized || 
      item.aliases?.some(alias => alias.toLowerCase() === normalized)
    );

    if (!glutenIngredient) return [];

    return glutenIngredient.substitutions.map(sub => ({
      id: `${glutenIngredient.name}-${sub.ingredient}`,
      originalIngredient: glutenIngredient.name,
      substituteIngredient: sub.ingredient,
      ratio: sub.ratio,
      unit: 'cup',
      difficulty: sub.difficulty as 'easy' | 'medium' | 'hard',
      cookingNotes: sub.notes,
      nutritionalImpact: 'Varies by substitution',
      confidence: 0.9
    }));
  }

  searchIngredients(query: string): GlutenFreeIngredient[] {
    const normalizedQuery = query.toLowerCase();
    const results: GlutenFreeIngredient[] = [];

    // Search in gluten ingredients for substitutions
    this.data.glutenIngredients.forEach(item => {
      if (item.name.toLowerCase().includes(normalizedQuery)) {
        item.substitutions.forEach(sub => {
          results.push({
            name: sub.ingredient,
            category: item.category,
            substitutions: [item.name],
            ratio: sub.ratio,
            notes: sub.notes,
            difficulty: sub.difficulty as 'easy' | 'medium' | 'hard'
          });
        });
      }
    });

    return results;
  }

  getAllCategories(): string[] {
    return Object.keys(this.data.categories);
  }

  getIngredientsByCategory(category: string): string[] {
    return (this.data.categories as Record<string, string[]>)[category] || [];
  }

  private normalizeIngredient(name: string): string {
    return name.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }
}
