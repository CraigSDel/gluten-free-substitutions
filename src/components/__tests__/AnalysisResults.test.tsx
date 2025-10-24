import { render, screen, fireEvent } from '../../utils/testUtils';
import { AnalysisResults } from '../recipe/AnalysisResults';
import { RecipeAnalysis } from '../../types';

const mockAnalysis: RecipeAnalysis = {
  hasGluten: true,
  glutenIngredients: [
    {
      id: 'flour-1',
      name: 'all-purpose flour',
      amount: 2,
      unit: 'cups',
      isGlutenFree: false,
      confidence: 0.95,
      substitutions: []
    }
  ],
  substitutions: [
    {
      id: 'flour-1',
      originalIngredient: 'all-purpose flour',
      substituteIngredient: 'almond flour',
      ratio: 1,
      unit: 'cup',
      difficulty: 'easy',
      cookingNotes: 'May need additional binding agent',
      nutritionalImpact: 'Higher protein, lower carbs',
      confidence: 0.9
    }
  ],
  difficulty: 'medium',
  cookingTimeAdjustment: 5,
  confidence: 0.9
};

describe('AnalysisResults', () => {
  const mockOnSave = jest.fn();
  const mockOnExport = jest.fn();
  const mockOnCopy = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders gluten-free message when no gluten found', () => {
    const glutenFreeAnalysis = { ...mockAnalysis, hasGluten: false };
    
    render(
      <AnalysisResults
        analysis={glutenFreeAnalysis}
        onSave={mockOnSave}
        onExport={mockOnExport}
        onCopy={mockOnCopy}
      />
    );
    
    expect(screen.getByText(/great news/i)).toBeInTheDocument();
    expect(screen.getByText(/already gluten-free/i)).toBeInTheDocument();
  });

  it('renders gluten ingredients when found', () => {
    render(
      <AnalysisResults
        analysis={mockAnalysis}
        onSave={mockOnSave}
        onExport={mockOnExport}
        onCopy={mockOnCopy}
      />
    );
    
    expect(screen.getByText(/gluten-containing ingredients/i)).toBeInTheDocument();
    expect(screen.getByText('all-purpose flour')).toBeInTheDocument();
    expect(screen.getByText(/95% confidence/i)).toBeInTheDocument();
  });

  it('renders substitution recommendations', () => {
    render(
      <AnalysisResults
        analysis={mockAnalysis}
        onSave={mockOnSave}
        onExport={mockOnExport}
        onCopy={mockOnCopy}
      />
    );
    
    expect(screen.getByText(/substitution recommendations/i)).toBeInTheDocument();
    expect(screen.getByText('almond flour')).toBeInTheDocument();
  });

  it('calls onSave when save button is clicked', () => {
    render(
      <AnalysisResults
        analysis={mockAnalysis}
        onSave={mockOnSave}
        onExport={mockOnExport}
        onCopy={mockOnCopy}
      />
    );
    
    const saveButton = screen.getByRole('button', { name: /save recipe/i });
    fireEvent.click(saveButton);
    
    expect(mockOnSave).toHaveBeenCalled();
  });

  it('calls onExport when export buttons are clicked', () => {
    render(
      <AnalysisResults
        analysis={mockAnalysis}
        onSave={mockOnSave}
        onExport={mockOnExport}
        onCopy={mockOnCopy}
      />
    );
    
    const textExportButton = screen.getByRole('button', { name: /export as text/i });
    const pdfExportButton = screen.getByRole('button', { name: /export as pdf/i });
    
    fireEvent.click(textExportButton);
    fireEvent.click(pdfExportButton);
    
    expect(mockOnExport).toHaveBeenCalledTimes(2);
  });

  it('calls onCopy when copy button is clicked', () => {
    render(
      <AnalysisResults
        analysis={mockAnalysis}
        onSave={mockOnSave}
        onExport={mockOnExport}
        onCopy={mockOnCopy}
      />
    );
    
    const copyButton = screen.getByRole('button', { name: /copy to clipboard/i });
    fireEvent.click(copyButton);
    
    expect(mockOnCopy).toHaveBeenCalled();
  });
});
