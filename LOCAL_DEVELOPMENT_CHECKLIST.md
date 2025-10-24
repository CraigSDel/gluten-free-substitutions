# 🧪 **Local Development Checklist**

## **Pre-Push Checklist (MANDATORY)**

### **1. Code Quality Checks**
```bash
# Run ESLint to catch code quality issues
npm run lint

# Run Prettier to ensure consistent formatting
npm run format

# Run TypeScript type checking
npm run type-check
```

### **2. Testing & Coverage**
```bash
# Run all tests with coverage
npm test -- --coverage

# Run tests in watch mode during development
npm test -- --watch

# Check test coverage meets minimum threshold (80%)
# Coverage should show:
# - Statements: 80%+
# - Branches: 80%+
# - Functions: 80%+
# - Lines: 80%+
```

### **3. Build Verification**
```bash
# Ensure production build works
npm run build

# Test the built application locally
npm run preview

# Verify all assets are generated correctly
ls -la dist/assets/
```

### **4. Dependencies & Security**
```bash
# Check for security vulnerabilities
npm audit

# Fix vulnerabilities if possible
npm audit fix

# Ensure package-lock.json is in sync
npm ci
```

### **5. Git Quality**
```bash
# Check git status for uncommitted changes
git status

# Review staged changes
git diff --cached

# Ensure meaningful commit messages
# Format: "type(scope): description"
# Examples:
# - feat(component): add new recipe input validation
# - fix(test): resolve TypeScript errors in test files
# - docs(readme): update deployment instructions
```

## **Development Workflow**

### **Before Starting Work**
1. Pull latest changes: `git pull origin main`
2. Install dependencies: `npm ci`
3. Run full test suite: `npm test`
4. Start development server: `npm run dev`

### **During Development**
1. Write tests for new features
2. Run tests frequently: `npm test -- --watch`
3. Check linting: `npm run lint`
4. Format code: `npm run format`

### **Before Committing**
1. ✅ Run all tests: `npm test`
2. ✅ Check coverage: `npm test -- --coverage`
3. ✅ Lint code: `npm run lint`
4. ✅ Format code: `npm run format`
5. ✅ Type check: `npm run type-check`
6. ✅ Build project: `npm run build`
7. ✅ Security audit: `npm audit`

### **Before Pushing**
1. ✅ All checklist items completed
2. ✅ Tests passing with good coverage
3. ✅ No linting errors
4. ✅ Build successful
5. ✅ Meaningful commit message
6. ✅ Push to remote: `git push origin main`

## **Coverage Targets**

### **Minimum Coverage Requirements**
- **Statements**: 80%+
- **Branches**: 80%+
- **Functions**: 80%+
- **Lines**: 80%+

### **Coverage by Component**
- **Services**: 90%+ (core business logic)
- **Components**: 80%+ (UI components)
- **Contexts**: 85%+ (state management)
- **Utils**: 95%+ (utility functions)

## **Quality Gates**

### **Code Quality**
- ✅ 0 ESLint errors
- ✅ 0 TypeScript errors
- ✅ All tests passing
- ✅ Coverage targets met

### **Performance**
- ✅ Build time < 2 seconds
- ✅ Bundle size < 200KB
- ✅ No memory leaks in tests

### **Security**
- ✅ No high/critical vulnerabilities
- ✅ Dependencies up to date
- ✅ No sensitive data in code

## **Automated Checks**

### **Pre-commit Hooks (Husky)**
The project uses Husky for pre-commit hooks that run:
- ESLint checks
- Prettier formatting
- TypeScript compilation
- Test execution

### **CI/CD Pipeline**
GitHub Actions runs:
- `npm ci` (dependency installation)
- `npm run build` (production build)
- `npm test` (test execution)
- Lighthouse CI (performance checks)

## **Troubleshooting**

### **Common Issues**
1. **Tests failing**: Check test files for syntax errors
2. **Build failing**: Run `npm run type-check` to see TypeScript errors
3. **Coverage low**: Add more test cases for uncovered code
4. **Lint errors**: Run `npm run lint -- --fix` to auto-fix

### **Quick Fixes**
```bash
# Fix linting issues
npm run lint -- --fix

# Fix formatting issues
npm run format

# Regenerate package-lock.json
rm package-lock.json && npm install

# Clear test cache
npm test -- --clearCache
```

## **Best Practices**

### **Test Writing**
- Write tests before implementing features (TDD)
- Test both happy path and edge cases
- Mock external dependencies
- Use descriptive test names

### **Code Quality**
- Follow TypeScript strict mode
- Use meaningful variable names
- Add JSDoc comments for complex functions
- Keep functions small and focused

### **Git Workflow**
- Use feature branches for new features
- Write clear commit messages
- Squash commits before merging
- Review code before pushing

---

**Remember**: Always run the full checklist locally before pushing to catch issues early and maintain high code quality! 🚀
