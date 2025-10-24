import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';

interface Ingredient {
  id: string;
  amount: string;
  unit: string;
  name: string;
}

interface StructuredRecipeInputProps {
  onAnalyze: (recipe: { title: string; ingredients: Ingredient[]; instructions: string[] }) => void;
  isLoading: boolean;
}

export const StructuredRecipeInput: React.FC<StructuredRecipeInputProps> = ({
  onAnalyze,
  isLoading,
}) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: '1', amount: '', unit: '', name: '' }
  ]);
  const [instructions, setInstructions] = useState('');

  const addIngredient = () => {
    const newIngredient: Ingredient = {
      id: Date.now().toString(),
      amount: '',
      unit: '',
      name: '',
    };
    setIngredients([...ingredients, newIngredient]);
  };

  const removeIngredient = (id: string) => {
    if (ingredients.length > 1) {
      setIngredients(ingredients.filter(ing => ing.id !== id));
    }
  };

  const updateIngredient = (id: string, field: keyof Ingredient, value: string) => {
    setIngredients(ingredients.map(ing => 
      ing.id === id ? { ...ing, [field]: value } : ing
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Filter out empty ingredients
    const validIngredients = ingredients.filter(ing => 
      ing.amount.trim() && ing.name.trim()
    );

    if (validIngredients.length === 0) {
      alert('Please add at least one ingredient');
      return;
    }

    if (!title.trim()) {
      alert('Please enter a recipe title');
      return;
    }

    if (!instructions.trim()) {
      alert('Please enter cooking instructions');
      return;
    }

    const instructionsArray = instructions
      .split('\n')
      .map(instruction => instruction.trim())
      .filter(instruction => instruction.length > 0);

    onAnalyze({
      title: title.trim(),
      ingredients: validIngredients,
      instructions: instructionsArray,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Enter Your Recipe</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Recipe Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Recipe Title *
          </label>
          <Input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Chocolate Chip Cookies"
            required
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ingredients *
          </label>
          <div className="space-y-3">
            {ingredients.map((ingredient) => (
              <div key={ingredient.id} className="flex gap-2 items-center">
                <Input
                  type="text"
                  placeholder="Amount"
                  value={ingredient.amount}
                  onChange={(e) => updateIngredient(ingredient.id, 'amount', e.target.value)}
                  className="w-20"
                />
                <Input
                  type="text"
                  placeholder="Unit"
                  value={ingredient.unit}
                  onChange={(e) => updateIngredient(ingredient.id, 'unit', e.target.value)}
                  className="w-20"
                />
                <Input
                  type="text"
                  placeholder="Ingredient name"
                  value={ingredient.name}
                  onChange={(e) => updateIngredient(ingredient.id, 'name', e.target.value)}
                  className="flex-1"
                />
                {ingredients.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeIngredient(ingredient.id)}
                    className="text-red-500 hover:text-red-700 px-2"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={addIngredient}
            className="mt-2 text-blue-600 hover:text-blue-800 text-sm"
          >
            + Add another ingredient
          </button>
        </div>

        {/* Instructions */}
        <div>
          <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-2">
            Instructions *
          </label>
          <TextArea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Enter cooking instructions, one step per line..."
            rows={6}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            {isLoading ? 'Analyzing...' : 'Convert Recipe'}
          </Button>
        </div>
      </form>
    </div>
  );
};
