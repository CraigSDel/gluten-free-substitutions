import React, { useState } from 'react';
import { TextArea } from '../ui/TextArea';
import { Button } from '../ui/Button';
import { LoadingSpinner } from '../ui/LoadingSpinner';

interface RecipeInputProps {
  onAnalyze: (text: string) => void;
  isLoading: boolean;
  placeholder?: string;
  maxLength?: number;
}

export const RecipeInput: React.FC<RecipeInputProps> = ({
  onAnalyze,
  isLoading,
  placeholder = "Paste your recipe here...",
  maxLength = 10000
}) => {
  const [text, setText] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) {
      setError('Please enter a recipe');
      return;
    }
    if (text.length > maxLength) {
      setError(`Recipe too long (max ${maxLength} characters)`);
      return;
    }
    setError(null);
    onAnalyze(text);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <TextArea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        className="w-full h-64 p-4"
        disabled={isLoading}
        error={error || undefined}
        helperText="Enter your recipe with ingredients and instructions"
      />
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          {text.length}/{maxLength} characters
        </span>
        <Button
          type="submit"
          disabled={isLoading || !text.trim()}
          className="px-6 py-2"
        >
          {isLoading ? (
            <>
              <LoadingSpinner size="sm" className="mr-2" />
              Analyzing...
            </>
          ) : (
            'Convert Recipe'
          )}
        </Button>
      </div>
    </form>
  );
};
