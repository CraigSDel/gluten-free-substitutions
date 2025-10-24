# 🧪 **Pre-Commit Testing & Quality Checklist**

## **MANDATORY PRE-COMMIT VALIDATION**

### **1. Code Quality & Standards** ✅
```bash
# ESLint - Zero tolerance for errors
npm run lint
# Must pass: 0 errors, 0 warnings

# Prettier - Consistent formatting
npm run format
# Must pass: All files formatted

# TypeScript - Strict type checking
npm run type-check
# Must pass: 0 compilation errors
```

### **2. Unit Testing** 🧪
```bash
# Run all unit tests with coverage
npm test -- --coverage --watchAll=false

# Coverage Requirements:
# - Statements: 80%+
# - Branches: 80%+
# - Functions: 80%+
# - Lines: 80%+

# Test Categories:
# ✅ Service layer tests (business logic)
# ✅ Utility function tests
# ✅ Component unit tests
# ✅ Context/state management tests
```

### **3. Integration Testing** 🔗
```bash
# Integration test requirements:
# ✅ Component integration tests
# ✅ Context provider integration
# ✅ Service integration tests
# ✅ API integration tests (if applicable)

# Run integration tests
npm run test:integration
# Must pass: All integration scenarios
```

### **4. Behavior Testing** 🎭
```bash
# End-to-end behavior tests
npm run test:e2e
# Must pass: Critical user journeys

# User story validation:
# ✅ Recipe input → Analysis → Results flow
# ✅ Error handling and edge cases
# ✅ User interactions and feedback
# ✅ Accessibility compliance
```

### **5. Build & Performance** 🚀
```bash
# Production build
npm run build
# Must pass: Clean build, no errors

# Bundle analysis
npm run analyze
# Must meet: < 200KB main bundle

# Performance checks
npm run lighthouse
# Must meet: Performance > 90, Accessibility > 95
```

### **6. Security & Dependencies** 🔒
```bash
# Security audit
npm audit
# Must pass: 0 high/critical vulnerabilities

# Dependency check
npm outdated
# Review: Update outdated dependencies

# License compliance
npm run license-check
# Must pass: All dependencies compliant
```

---

## **SOFTWARE DEVELOPMENT BEST PRACTICES**

### **Code Architecture** 🏗️
- ✅ **Single Responsibility**: Each function/component has one purpose
- ✅ **DRY Principle**: No code duplication
- ✅ **SOLID Principles**: Proper abstraction and dependency injection
- ✅ **Clean Code**: Meaningful names, small functions, clear structure
- ✅ **Error Handling**: Comprehensive error boundaries and validation

### **React Best Practices** ⚛️
- ✅ **Component Design**: Atomic design principles
- ✅ **State Management**: Proper use of Context/Redux patterns
- ✅ **Hooks Usage**: Correct dependency arrays, no infinite loops
- ✅ **Performance**: Memoization where appropriate, lazy loading
- ✅ **Accessibility**: ARIA labels, keyboard navigation, screen reader support

### **TypeScript Best Practices** 📝
- ✅ **Type Safety**: Strict mode enabled, no `any` types
- ✅ **Interface Design**: Clear, reusable type definitions
- ✅ **Generic Usage**: Proper generic constraints and usage
- ✅ **Enum Usage**: Type-safe constants and options
- ✅ **Documentation**: JSDoc comments for complex functions

### **Testing Best Practices** 🧪
- ✅ **Test Pyramid**: More unit tests, fewer integration tests, minimal E2E
- ✅ **Test Coverage**: Critical paths at 100%, overall 80%+
- ✅ **Test Quality**: Meaningful assertions, clear test names
- ✅ **Mock Strategy**: Proper mocking of external dependencies
- ✅ **Test Isolation**: Tests don't depend on each other

### **Git & Version Control** 📚
- ✅ **Commit Messages**: Conventional commit format
- ✅ **Branch Strategy**: Feature branches, proper PR reviews
- ✅ **Code Review**: Peer review for all changes
- ✅ **History**: Clean, meaningful commit history
- ✅ **Documentation**: README, API docs, inline comments

---

## **DETAILED TESTING REQUIREMENTS**

### **Unit Test Coverage by Component**

#### **Services (90%+ coverage required)**
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
```

#### **Components (80%+ coverage required)**
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

#### **Contexts (85%+ coverage required)**
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

### **Integration Test Scenarios**

#### **User Journey Tests**
```typescript
// Complete Recipe Conversion Flow
✅ User enters recipe text
✅ System analyzes ingredients
✅ System identifies gluten sources
✅ System provides substitutions
✅ User reviews results
✅ User saves/exports recipe

// Error Handling Flow
✅ Invalid input handling
✅ Network error recovery
✅ Service failure graceful degradation
✅ User feedback for all states
```

#### **Component Integration**
```typescript
// RecipeConverter Page
✅ RecipeInput → AnalysisResults integration
✅ Loading states coordination
✅ Error state propagation
✅ Context state synchronization

// Navigation Integration
✅ Route changes
✅ State persistence across routes
✅ Back/forward navigation
✅ Deep linking support
```

### **Behavior Test Scenarios**

#### **Critical User Paths**
```typescript
// Primary Use Case
Given: User has a gluten-containing recipe
When: User submits recipe for analysis
Then: System provides gluten-free substitutions
And: User can save/export the converted recipe

// Edge Cases
Given: User submits empty recipe
When: System validates input
Then: User sees appropriate error message

Given: Recipe has no gluten ingredients
When: System analyzes recipe
Then: User sees confirmation of gluten-free status
```

#### **Accessibility Testing**
```typescript
// Screen Reader Support
✅ All interactive elements have labels
✅ Form validation messages are announced
✅ Navigation is logical and consistent
✅ Color contrast meets WCAG AA standards

// Keyboard Navigation
✅ Tab order is logical
✅ All functions accessible via keyboard
✅ Focus indicators are visible
✅ No keyboard traps
```

---

## **AUTOMATED PRE-COMMIT HOOKS**

### **Husky Configuration**
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged && npm run test:unit",
      "pre-push": "npm run test:integration && npm run build"
    }
  }
}
```

### **Lint-Staged Configuration**
```json
{
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write",
      "npm run type-check"
    ],
    "*.{json,md}": [
      "prettier --write"
    ]
  }
}
```

---

## **QUALITY GATES SUMMARY**

### **Must Pass Before Commit**
- ✅ **0 ESLint errors/warnings**
- ✅ **0 TypeScript errors**
- ✅ **All unit tests passing**
- ✅ **80%+ test coverage**
- ✅ **Clean production build**
- ✅ **0 security vulnerabilities**

### **Must Pass Before Push**
- ✅ **All integration tests passing**
- ✅ **E2E tests for critical paths**
- ✅ **Performance benchmarks met**
- ✅ **Accessibility compliance**
- ✅ **Bundle size within limits**

### **Code Review Requirements**
- ✅ **Peer review for all changes**
- ✅ **Architecture review for major changes**
- ✅ **Security review for sensitive code**
- ✅ **Performance review for optimization changes**

---

## **QUICK COMMAND REFERENCE**

```bash
# Full pre-commit validation
npm run pre-commit

# Individual checks
npm run lint          # Code quality
npm run format        # Code formatting
npm run type-check    # TypeScript validation
npm run test:unit     # Unit tests
npm run test:integration # Integration tests
npm run test:e2e      # End-to-end tests
npm run build         # Production build
npm run analyze       # Bundle analysis
npm run lighthouse  # Performance testing
npm audit            # Security audit
```

---

**Remember**: This checklist ensures that every commit maintains high code quality, comprehensive test coverage, and follows industry best practices. No shortcuts - quality first! 🚀
