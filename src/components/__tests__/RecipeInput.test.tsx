import React from 'react';
import { render, screen, fireEvent, waitFor } from '../../utils/testUtils';
import { RecipeInput } from '../recipe/RecipeInput';

describe('RecipeInput', () => {
  const mockOnAnalyze = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders input field with placeholder', () => {
    render(<RecipeInput onAnalyze={mockOnAnalyze} />);
    
    expect(screen.getByPlaceholderText(/paste your recipe/i)).toBeInTheDocument();
  });

  it('shows character count', () => {
    render(<RecipeInput onAnalyze={mockOnAnalyze} />);
    
    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'Test recipe' } });
    
    expect(screen.getByText(/10\/10000/)).toBeInTheDocument();
  });

  it('calls onAnalyze when analyze button is clicked', async () => {
    render(<RecipeInput onAnalyze={mockOnAnalyze} />);
    
    const textarea = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /analyze/i });
    
    fireEvent.change(textarea, { target: { value: 'Test recipe' } });
    fireEvent.click(button);
    
    await waitFor(() => {
      expect(mockOnAnalyze).toHaveBeenCalledWith('Test recipe');
    });
  });

  it('disables analyze button when loading', () => {
    render(<RecipeInput onAnalyze={mockOnAnalyze} isLoading={true} />);
    
    const button = screen.getByRole('button', { name: /analyzing/i });
    expect(button).toBeDisabled();
  });

  it('shows error message when provided', () => {
    render(<RecipeInput onAnalyze={mockOnAnalyze} error="Test error" />);
    
    expect(screen.getByText('Test error')).toBeInTheDocument();
  });

  it('validates minimum recipe length', async () => {
    render(<RecipeInput onAnalyze={mockOnAnalyze} />);
    
    const textarea = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /analyze/i });
    
    fireEvent.change(textarea, { target: { value: 'Short' } });
    fireEvent.click(button);
    
    expect(mockOnAnalyze).not.toHaveBeenCalled();
  });
});
