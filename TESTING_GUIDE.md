# 🧪 **Comprehensive Testing Guide**

## **Testing Strategy Overview**

This project implements a **3-tier testing strategy** following industry best practices:

1. **Unit Tests** (70% of tests) - Fast, isolated, focused
2. **Integration Tests** (20% of tests) - Component interactions, data flow
3. **Behavior/E2E Tests** (10% of tests) - User journeys, critical paths

---

## **Unit Testing** 🔬

### **Purpose**
Test individual functions, components, and services in isolation.

### **Coverage Requirements**
- **Services**: 90%+ coverage (business logic)
- **Utils**: 95%+ coverage (utility functions)
- **Components**: 80%+ coverage (UI components)
- **Contexts**: 85%+ coverage (state management)

### **Test Structure**
```typescript
describe('ComponentName', () => {
  describe('Feature/Behavior', () => {
    it('should do something specific', () => {
      // Arrange
      // Act
      // Assert
    });
  });
});
```

### **Running Unit Tests**
```bash
npm run test:unit
```

### **Examples**
- `src/utils/__tests__/idGenerator.test.ts` ✅
- `src/services/__tests__/analysisEngine.test.ts`
- `src/components/__tests__/RecipeInput.test.tsx`
- `src/contexts/__tests__/RecipeContext.test.tsx`

---

## **Integration Testing** 🔗

### **Purpose**
Test how multiple components/services work together.

### **Coverage Requirements**
- **Component Integration**: 80%+ coverage
- **Service Integration**: 85%+ coverage
- **Context Integration**: 80%+ coverage

### **Test Scenarios**
```typescript
describe('Component Integration', () => {
  it('should handle complete user flow', () => {
    // Test multiple components working together
  });
  
  it('should handle data flow between services', () => {
    // Test service interactions
  });
});
```

### **Running Integration Tests**
```bash
npm run test:integration
```

### **Examples**
- `src/services/__tests__/analysisEngine.integration.test.ts` ✅
- `src/components/__tests__/RecipeConverter.integration.test.tsx`
- `src/contexts/__tests__/ContextIntegration.test.tsx`

---

## **Behavior Testing** 🎭

### **Purpose**
Test complete user journeys and critical business flows.

### **Coverage Requirements**
- **Critical User Paths**: 100% coverage
- **Error Scenarios**: 90%+ coverage
- **Accessibility**: 100% coverage

### **Test Scenarios**
```typescript
describe('User Journey: Recipe Conversion', () => {
  it('should guide user through complete flow', () => {
    // Test entire user journey
  });
  
  it('should handle errors gracefully', () => {
    // Test error handling
  });
});
```

### **Running Behavior Tests**
```bash
npm run test:e2e
```

### **Examples**
- `src/components/__tests__/RecipeConverter.behavior.test.tsx` ✅
- `src/pages/__tests__/UserJourney.test.tsx`
- `src/__tests__/Accessibility.test.tsx`

---

## **Test Categories by File**

### **Services** (Business Logic)
```typescript
// analysisEngine.ts
✅ analyzeRecipe() - happy path
✅ analyzeRecipe() - edge cases
✅ extractIngredients() - various formats
✅ identifyGlutenIngredients() - detection logic
✅ findSubstitutions() - matching algorithm
✅ calculateDifficulty() - difficulty assessment
✅ calculateTimeAdjustment() - time calculations
✅ calculateConfidence() - confidence scoring

// ingredientDatabase.ts
✅ findSubstitution() - lookup logic
✅ searchIngredients() - search functionality
✅ getAllCategories() - category listing
✅ getIngredientsByCategory() - filtering
```

### **Components** (UI Logic)
```typescript
// RecipeInput.tsx
✅ renders correctly
✅ handles user input
✅ validates input length
✅ shows loading state
✅ displays error messages
✅ form submission

// AnalysisResults.tsx
✅ displays analysis results
✅ shows substitution cards
✅ handles action buttons
✅ export functionality
✅ copy to clipboard
✅ save recipe

// UI Components
✅ Button - all variants and states
✅ Input - validation and formatting
✅ TextArea - character counting
✅ LoadingSpinner - animation states
```

### **Contexts** (State Management)
```typescript
// RecipeContext.tsx
✅ initial state
✅ analyzeRecipe() - success/error
✅ saveRecipe() - persistence
✅ deleteRecipe() - removal
✅ exportRecipe() - different formats
✅ copyRecipe() - clipboard

// IngredientContext.tsx
✅ searchIngredients() - query handling
✅ getSubstitution() - lookup logic
✅ getAllCategories() - category listing
✅ getIngredientsByCategory() - filtering
```

---

## **Testing Best Practices**

### **Test Naming**
```typescript
// Good
describe('RecipeAnalysisEngine', () => {
  describe('analyzeRecipe', () => {
    it('should identify gluten ingredients correctly', () => {});
    it('should return empty results for gluten-free recipes', () => {});
    it('should handle malformed input gracefully', () => {});
  });
});

// Bad
describe('Test', () => {
  it('works', () => {});
});
```

### **Test Structure (AAA Pattern)
```typescript
it('should calculate difficulty correctly', () => {
  // Arrange
  const engine = new RecipeAnalysisEngine();
  const recipe = '2 cups flour, 1 cup sugar';
  
  // Act
  const result = engine.analyzeRecipe(recipe);
  
  // Assert
  expect(result.difficulty).toBe('medium');
});
```

### **Mocking Strategy**
```typescript
// Mock external dependencies
jest.mock('../services/analysisEngine');
jest.mock('../contexts/RecipeContext');

// Mock functions
const mockAnalyzeRecipe = jest.fn();
const mockSaveRecipe = jest.fn();

// Mock return values
mockAnalyzeRecipe.mockResolvedValue(mockAnalysis);
mockSaveRecipe.mockResolvedValue(undefined);
```

### **Async Testing**
```typescript
it('should handle async operations', async () => {
  const promise = someAsyncFunction();
  
  await expect(promise).resolves.toBe(expectedValue);
  
  // Or with waitFor
  await waitFor(() => {
    expect(mockFunction).toHaveBeenCalled();
  });
});
```

---

## **Coverage Goals**

### **Current Status**
- **Overall**: 0.66% (basic setup)
- **Target**: 80%+ across all metrics

### **Progressive Coverage**
1. **Phase 1**: Utils (95%+) ✅
2. **Phase 2**: Services (90%+)
3. **Phase 3**: Components (80%+)
4. **Phase 4**: Contexts (85%+)
5. **Phase 5**: Integration (80%+)
6. **Phase 6**: Behavior (100% critical paths)

---

## **Running Tests**

### **Development Workflow**
```bash
# Watch mode during development
npm run test:watch

# Run specific test file
npm test -- --testPathPattern="idGenerator"

# Run tests with coverage
npm run test:unit -- --coverage

# Run all tests
npm run test:all
```

### **Pre-Commit Validation**
```bash
# Automatic pre-commit checks
git commit -m "feat: add new feature"
# Runs: lint → format → type-check → test:unit → build

# Manual pre-push checks
git push
# Runs: test:all → audit → build → analyze
```

---

## **Test Data Management**

### **Mock Data**
```typescript
// src/__mocks__/ingredients.json
{
  "glutenIngredients": [...],
  "categories": {...}
}

// Test-specific mocks
const mockRecipe = {
  id: 'test-1',
  title: 'Test Recipe',
  // ... complete recipe object
};
```

### **Test Utilities**
```typescript
// src/utils/testUtils.tsx
export const renderWithProviders = (component) => {
  return render(
    <RecipeProvider>
      <IngredientProvider>
        <UIProvider>
          {component}
        </UIProvider>
      </IngredientProvider>
    </RecipeProvider>
  );
};
```

---

## **Quality Gates**

### **Must Pass Before Commit**
- ✅ **0 ESLint errors/warnings**
- ✅ **0 TypeScript errors**
- ✅ **All unit tests passing**
- ✅ **80%+ test coverage**
- ✅ **Clean production build**

### **Must Pass Before Push**
- ✅ **All integration tests passing**
- ✅ **E2E tests for critical paths**
- ✅ **Performance benchmarks met**
- ✅ **Accessibility compliance**
- ✅ **Bundle size within limits**

---

**Remember**: Quality code is tested code. Every feature should have comprehensive test coverage before it's considered complete! 🚀
