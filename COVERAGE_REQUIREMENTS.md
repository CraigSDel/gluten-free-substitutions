# Test Coverage Requirements

## 🎯 100% Coverage Policy

This project enforces **100% test coverage** for all source code. This ensures that:

- ✅ No broken code can be deployed
- ✅ All functionality is tested and verified
- ✅ Code quality is maintained at the highest level
- ✅ The site will work reliably in production

## 📊 Coverage Requirements

### Global Requirements
- **Statements**: 100%
- **Branches**: 100%
- **Functions**: 100%
- **Lines**: 100%

### Per-File Requirements
- **All files in `src/`**: 100% coverage required
- **No exceptions**: Every line of code must be tested

## 🚫 What Happens If Coverage Is Not 100%

### Local Development
```bash
npm run test:coverage
# ❌ FAILS if coverage < 100%
# ✅ PASSES only if coverage = 100%
```

### GitHub Actions
- **Deploy workflow**: ❌ **BLOCKS** deployment if coverage < 100%
- **CI workflow**: ❌ **FAILS** if coverage < 100%
- **Pull requests**: ❌ **CANNOT** be merged if coverage < 100%

## 🛠️ How to Achieve 100% Coverage

### 1. Run Coverage Analysis
```bash
# Check current coverage
npm run test:coverage

# View detailed HTML report
open coverage/lcov-report/index.html
```

### 2. Identify Uncovered Code
The coverage report will show:
- 🔴 **Red lines**: Not covered by tests
- 🟡 **Yellow lines**: Partially covered
- 🟢 **Green lines**: Fully covered

### 3. Add Missing Tests
For each uncovered line, add tests that:
- Test the happy path
- Test error conditions
- Test edge cases
- Test all branches and conditions

### 4. Verify Coverage
```bash
# Run the coverage check
npm run test:coverage:check
# Should show: ✅ All coverage requirements met!
```

## 📁 Files That Must Have 100% Coverage

### Components (`src/components/`)
- All React components
- All UI components
- All layout components
- All recipe components

### Services (`src/services/`)
- All business logic
- All API calls
- All data processing
- All utility functions

### Contexts (`src/contexts/`)
- All React contexts
- All state management
- All provider components

### Pages (`src/pages/`)
- All page components
- All routing logic
- All user interactions

### Utils (`src/utils/`)
- All utility functions
- All helper functions
- All data transformations

## 🚀 Deployment Process

### Before Deployment
1. ✅ All tests must pass
2. ✅ Coverage must be 100%
3. ✅ No linting errors
4. ✅ Type checking passes
5. ✅ Build succeeds

### Automatic Checks
The GitHub Actions workflow automatically:
1. Runs all tests with coverage
2. Fails if coverage < 100%
3. Blocks deployment if requirements not met
4. Only deploys if all checks pass

## 🔧 Tools and Scripts

### Coverage Scripts
```bash
# Run tests with coverage
npm run test:coverage

# Check coverage requirements
npm run test:coverage:check

# Full build test (includes coverage)
npm run test:build
```

### Coverage Reports
- **Text report**: Console output
- **HTML report**: `coverage/lcov-report/index.html`
- **LCOV report**: `coverage/lcov.info`

## 📈 Coverage Best Practices

### 1. Test Everything
- Test all functions and methods
- Test all conditional branches
- Test all error conditions
- Test all edge cases

### 2. Mock External Dependencies
- Mock API calls
- Mock localStorage
- Mock browser APIs
- Mock external libraries

### 3. Test User Interactions
- Test button clicks
- Test form submissions
- Test navigation
- Test state changes

### 4. Test Error Handling
- Test error boundaries
- Test error states
- Test fallback behavior
- Test error recovery

## 🚨 Common Coverage Issues

### Missing Tests for:
- Error handling code
- Edge cases
- Conditional branches
- Utility functions
- Context providers
- Event handlers

### Solutions:
- Add comprehensive test suites
- Mock all dependencies
- Test all code paths
- Use proper test utilities

## ✅ Success Criteria

Your code is ready for deployment when:
- 🎯 **100% statement coverage**
- 🎯 **100% branch coverage**
- 🎯 **100% function coverage**
- 🎯 **100% line coverage**
- ✅ All tests pass
- ✅ No linting errors
- ✅ Build succeeds

Remember: **No exceptions, no compromises, 100% coverage required!**
