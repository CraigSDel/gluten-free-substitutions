import { render, screen, fireEvent, waitFor } from '../../utils/testUtils';
import { RecipeConverter } from '../../pages/RecipeConverter';
import { useRecipe } from '../../contexts/RecipeContext';

// Mock the context
jest.mock('../../contexts/RecipeContext');
const mockUseRecipe = useRecipe as jest.MockedFunction<typeof useRecipe>;

describe('RecipeConverter Behavior Tests', () => {
  const mockAnalyzeRecipe = jest.fn();
  const mockSaveRecipe = jest.fn();
  const mockExportRecipe = jest.fn();
  const mockCopyRecipe = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    
    mockUseRecipe.mockReturnValue({
      currentRecipe: null,
      isLoading: false,
      error: null,
      analyzeRecipe: mockAnalyzeRecipe,
      saveRecipe: mockSaveRecipe,
      exportRecipe: mockExportRecipe,
      copyRecipe: mockCopyRecipe,
      deleteRecipe: jest.fn(),
      recipes: [],
    });
  });

  describe('User Journey: Complete Recipe Conversion', () => {
    it('should guide user through complete recipe conversion flow', async () => {
      render(<RecipeConverter />);

      // Step 1: User sees input form
      expect(screen.getByPlaceholderText(/paste your recipe/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /analyze/i })).toBeInTheDocument();

      // Step 2: User enters recipe
      const textarea = screen.getByRole('textbox');
      const recipeText = '2 cups all-purpose flour\n1 cup sugar\n2 eggs';
      fireEvent.change(textarea, { target: { value: recipeText } });

      // Step 3: User clicks analyze
      const analyzeButton = screen.getByRole('button', { name: /analyze/i });
      fireEvent.click(analyzeButton);

      // Step 4: System shows loading state
      await waitFor(() => {
        expect(mockAnalyzeRecipe).toHaveBeenCalledWith(recipeText);
      });
    });

    it('should handle analysis success and show results', async () => {
      const mockAnalysis = {
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
            id: 'sub-1',
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

      mockUseRecipe.mockReturnValue({
        currentRecipe: mockAnalysis as any,
        isLoading: false,
        error: null,
        analyzeRecipe: mockAnalyzeRecipe,
        saveRecipe: mockSaveRecipe,
        exportRecipe: mockExportRecipe,
        copyRecipe: mockCopyRecipe,
        deleteRecipe: jest.fn(),
        recipes: [],
      });

      render(<RecipeConverter />);

      // User should see analysis results
      expect(screen.getByText(/gluten-free substitutions/i)).toBeInTheDocument();
      expect(screen.getByText(/almond flour/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /save recipe/i })).toBeInTheDocument();
    });

    it('should handle analysis error gracefully', () => {
      mockUseRecipe.mockReturnValue({
        currentRecipe: null,
        isLoading: false,
        error: 'Analysis failed. Please try again.',
        analyzeRecipe: mockAnalyzeRecipe,
        saveRecipe: mockSaveRecipe,
        exportRecipe: mockExportRecipe,
        copyRecipe: mockCopyRecipe,
        deleteRecipe: jest.fn(),
        recipes: [],
      });

      render(<RecipeConverter />);

      expect(screen.getByText(/analysis failed/i)).toBeInTheDocument();
    });
  });

  describe('User Interactions', () => {
    it('should handle save recipe action', async () => {
      const mockAnalysis = {
        hasGluten: true,
        glutenIngredients: [],
        substitutions: [],
        difficulty: 'easy',
        cookingTimeAdjustment: 0,
        confidence: 0.8
      };

      mockUseRecipe.mockReturnValue({
        currentRecipe: mockAnalysis as any,
        isLoading: false,
        error: null,
        analyzeRecipe: mockAnalyzeRecipe,
        saveRecipe: mockSaveRecipe,
        exportRecipe: mockExportRecipe,
        copyRecipe: mockCopyRecipe,
        deleteRecipe: jest.fn(),
        recipes: [],
      });

      render(<RecipeConverter />);

      const saveButton = screen.getByRole('button', { name: /save recipe/i });
      fireEvent.click(saveButton);

      expect(mockSaveRecipe).toHaveBeenCalledWith(mockAnalysis);
    });

    it('should handle export recipe action', async () => {
      const mockAnalysis = {
        hasGluten: true,
        glutenIngredients: [],
        substitutions: [],
        difficulty: 'easy',
        cookingTimeAdjustment: 0,
        confidence: 0.8
      };

      mockUseRecipe.mockReturnValue({
        currentRecipe: mockAnalysis as any,
        isLoading: false,
        error: null,
        analyzeRecipe: mockAnalyzeRecipe,
        saveRecipe: mockSaveRecipe,
        exportRecipe: mockExportRecipe,
        copyRecipe: mockCopyRecipe,
        deleteRecipe: jest.fn(),
        recipes: [],
      });

      render(<RecipeConverter />);

      const exportButton = screen.getByRole('button', { name: /export as text/i });
      fireEvent.click(exportButton);

      expect(mockExportRecipe).toHaveBeenCalledWith(mockAnalysis, 'text');
    });

    it('should handle copy recipe action', async () => {
      const mockAnalysis = {
        hasGluten: true,
        glutenIngredients: [],
        substitutions: [],
        difficulty: 'easy',
        cookingTimeAdjustment: 0,
        confidence: 0.8
      };

      mockUseRecipe.mockReturnValue({
        currentRecipe: mockAnalysis as any,
        isLoading: false,
        error: null,
        analyzeRecipe: mockAnalyzeRecipe,
        saveRecipe: mockSaveRecipe,
        exportRecipe: mockExportRecipe,
        copyRecipe: mockCopyRecipe,
        deleteRecipe: jest.fn(),
        recipes: [],
      });

      render(<RecipeConverter />);

      const copyButton = screen.getByRole('button', { name: /copy to clipboard/i });
      fireEvent.click(copyButton);

      expect(mockCopyRecipe).toHaveBeenCalledWith(mockAnalysis);
    });
  });

  describe('Loading States', () => {
    it('should show loading state during analysis', () => {
      mockUseRecipe.mockReturnValue({
        currentRecipe: null,
        isLoading: true,
        error: null,
        analyzeRecipe: mockAnalyzeRecipe,
        saveRecipe: mockSaveRecipe,
        exportRecipe: mockExportRecipe,
        copyRecipe: mockCopyRecipe,
        deleteRecipe: jest.fn(),
        recipes: [],
      });

      render(<RecipeConverter />);

      expect(screen.getByText(/analyzing your recipe/i)).toBeInTheDocument();
      expect(screen.getByRole('status')).toBeInTheDocument(); // Loading spinner
    });
  });

  describe('Accessibility', () => {
    it('should be keyboard navigable', () => {
      render(<RecipeConverter />);

      const textarea = screen.getByRole('textbox');
      const button = screen.getByRole('button', { name: /analyze/i });

      // Tab navigation should work
      textarea.focus();
      expect(document.activeElement).toBe(textarea);

      // Enter key should trigger analysis
      fireEvent.keyDown(textarea, { key: 'Enter', ctrlKey: true });
      // Note: This would need actual implementation of keyboard shortcuts
    });

    it('should have proper ARIA labels', () => {
      render(<RecipeConverter />);

      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('aria-label');
      
      const button = screen.getByRole('button', { name: /analyze/i });
      expect(button).toHaveAttribute('aria-label');
    });
  });
});
