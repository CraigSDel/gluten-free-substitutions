# GlutenFree Substitutions - Business Requirements Specification

## 1. Executive Summary

**Project Name:** GlutenFree Substitutions  
**Business Objective:** Create a free, privacy-focused web tool that helps users convert regular recipes to gluten-free versions  
**Target Audience:** People with celiac disease, gluten intolerance, or those following a gluten-free diet  
**Market Size:** 3.1 million Americans with celiac disease + 18 million with gluten sensitivity  
**Hosting:** GitHub Pages (free)

**Key Value Proposition:**

- Instant recipe conversion without user registration
- Privacy-first approach with no data collection
- Comprehensive ingredient substitution database
- Mobile-optimized for on-the-go cooking
- Free to use with no hidden costs

## 2. Business Requirements

### 2.1 Business Objectives

- **Primary:** Provide immediate value to gluten-free community
- **Secondary:** Establish expertise and authority in gluten-free cooking
- **Tertiary:** Generate organic traffic through useful content

### 2.2 Success Criteria

- **User Adoption:** 1,000+ recipe conversions in first 3 months
- **User Retention:** 40%+ return users (measured via local storage)
- **Performance:** < 2 second recipe analysis time
- **Accuracy:** 95%+ user satisfaction with substitution recommendations

### 2.3 Business Constraints

- **Budget:** $0 (using free tools: GitHub Pages, free hosting)
- **Timeline:** 4-6 weeks for MVP
- **Resources:** Solo developer
- **Legal:** No user data collection (privacy-first approach)

### 2.4 Success Metrics (Measurable)

- **Month 1:** 100+ recipe conversions
- **Month 2:** 500+ recipe conversions, 20% return rate
- **Month 3:** 1,000+ recipe conversions, 40% return rate
- **Performance:** < 2 second analysis time for 95% of recipes
- **User Satisfaction:** 4.5+ star average rating (if feedback collected)

## 3. Website Concept

A user-friendly platform where people can submit any recipe (with gluten-containing ingredients) and receive specific substitution recommendations to make it gluten-free. The website will analyze ingredients, identify gluten-containing items, and provide tested alternatives with proper ratios and cooking tips. This solves the common problem of people wanting to enjoy their favorite recipes while maintaining a gluten-free lifestyle.

## 4. Stakeholder Analysis

### 4.1 User Personas

**Primary Persona: "Sarah the Celiac"**

- **Demographics:** Age 25-45, tech-savvy, health-conscious
- **Pain Points:** Frustrated with limited gluten-free recipe options, wants to convert family recipes
- **Goals:** Convert traditional recipes to gluten-free, maintain family food traditions
- **Tech Comfort:** High - uses mobile apps, comfortable with web tools

**Secondary Persona: "Mike the Health-Conscious"**

- **Demographics:** Age 30-50, following gluten-free diet for health reasons
- **Pain Points:** Wants to maintain favorite recipes, values privacy and simplicity
- **Goals:** Convert recipes without complexity, avoid data collection
- **Tech Comfort:** Medium - prefers simple, straightforward tools

**Tertiary Persona: "Lisa the Caregiver"**

- **Demographics:** Age 35-55, cooking for family member with celiac disease
- **Pain Points:** Needs to learn gluten-free cooking, wants reliable substitutions
- **Goals:** Provide safe, delicious meals for family member
- **Tech Comfort:** Medium - needs clear guidance and explanations

## 5. Functional Requirements

### 5.1 Core Features

**Primary Features:**

- [ ] Recipe Input Form: Users can paste or type in any recipe with ingredients and instructions
- [ ] Ingredient Analysis: Automatically identifies gluten-containing ingredients in the recipe
- [ ] Substitution Engine: Provides specific gluten-free alternatives with proper ratios
- [ ] Converted Recipe Output: Displays the modified recipe with substitutions highlighted
- [ ] Cooking Tips: Additional guidance for gluten-free baking/cooking techniques

**Secondary Features:**

- [ ] Recipe History: Save and access previously converted recipes (local storage only)
- [ ] Ingredient Database: Searchable database of gluten-free alternatives
- [ ] Difficulty Rating: Indicates how challenging the conversion might be
- [ ] Nutritional Notes: Information about nutritional differences in substitutions
- [ ] Recipe Export: Download converted recipes as text/PDF
- [ ] Ingredient Substitution Calculator: Calculate exact amounts needed
- [ ] Recipe Scaling: Adjust serving sizes with proper ingredient ratios

### 5.2 User Stories (Detailed)

**Epic 1: Recipe Conversion**

- **US-001:** As a user, I want to paste a recipe so that I can convert it to gluten-free
  - **Acceptance Criteria:**
    - User can paste text into a large text area
    - System validates that text contains recipe-like content
    - System provides feedback if no recipe detected
    - Maximum 10,000 characters supported

- **US-002:** As a user, I want to see which ingredients contain gluten so that I know what needs to be substituted
  - **Acceptance Criteria:**
    - System highlights gluten-containing ingredients in red
    - System provides tooltip explaining why ingredient contains gluten
    - System shows confidence level for each identification

- **US-003:** As a user, I want to see specific substitution recommendations so that I can make informed choices
  - **Acceptance Criteria:**
    - System provides 1-3 substitution options per gluten ingredient
    - Each substitution includes exact ratio/amount
    - System explains any cooking technique changes needed
    - System indicates difficulty level of substitution

**Epic 2: Recipe Management**

- **US-004:** As a user, I want to save converted recipes locally so that I can access them later
  - **Acceptance Criteria:**
    - Recipes saved in browser local storage
    - User can view list of saved recipes
    - User can delete saved recipes
    - Maximum 50 recipes stored locally

- **US-005:** As a user, I want to export my converted recipe so that I can share it or print it
  - **Acceptance Criteria:**
    - User can copy recipe to clipboard
    - User can download as text file
    - User can print recipe with proper formatting
    - User can share via email (mailto link)

### 5.3 Business Rules

- **BR-001:** No user authentication required
- **BR-002:** All data stored locally in browser
- **BR-003:** No personal information collected
- **BR-004:** Substitution recommendations must be tested and reliable
- **BR-005:** System must work offline after initial load
- **BR-006:** All substitutions must be medically safe for celiac disease
- **BR-007:** System must provide clear disclaimers about medical advice
- **BR-008:** Recipe analysis must be accurate to prevent gluten exposure
- **BR-009:** All content must be accessible (WCAG 2.1 AA)
- **BR-010:** System must work on mobile devices (responsive design)

## 6. User Experience (UX)

### 6.1 User Journey

1. **Landing/Homepage**
   - Clear value proposition: "Convert any recipe to gluten-free"
   - Large, prominent "Convert Recipe" button
   - Example of before/after recipe conversion
   - Brief explanation of how it works

2. **Navigation Flow**
   - Homepage → Recipe Input → Analysis → Results → (Optional: Save/Share/Export)
   - Simple 3-step process: Input → Analyze → Convert
   - Easy access to ingredient database and cooking tips
   - No login required - all data stored locally

3. **Call-to-Actions**
   - Primary: "Convert My Recipe" (main CTA)
   - Secondary: "Browse Substitutions", "Learn More", "View Examples"
   - Export: "Download Recipe", "Print Recipe", "Share Recipe"

### 6.2 Design & Visual Identity

**Branding:**

- **Color Scheme:** Warm, food-friendly colors (wheat gold, sage green, cream white)
- **Typography:** Clean, readable fonts (Inter or Open Sans for body, Playfair Display for headings)
- **Logo/Brand:** Simple wheat grain or mixing bowl icon with "GlutenFree Substitutions"
- **Tone:** Friendly, helpful, and encouraging - making gluten-free cooking accessible

**Layout:**

- **Homepage Layout:** Hero section with conversion tool, featured examples, how-it-works section
- **Page Structure:** Clean header with logo, main conversion area, sidebar with tips/resources
- **Responsive Design:** Mobile-first approach with collapsible sections, touch-friendly buttons

**Accessibility Design:**

- **Color Contrast:** WCAG 2.1 AA compliant color ratios
- **Font Sizes:** Minimum 16px for body text, scalable fonts
- **Touch Targets:** Minimum 44px touch targets for mobile
- **Focus Indicators:** Clear focus states for keyboard navigation
- **Screen Reader Support:** Semantic HTML and ARIA labels

## 7. Technical Requirements

### 7.1 Technology Stack

- **Frontend:** React with TypeScript
- **Styling:** Tailwind CSS for utility-first styling
- **Build Tools:** Vite for fast development and building
- **State Management:** React Context API or Zustand for simple state
- **Deployment:** GitHub Pages with GitHub Actions for CI/CD

### 7.2 Code Quality & Standards

**Coding Standards:**

- **TypeScript:** Strict mode enabled, no `any` types allowed
- **ESLint:** Airbnb configuration with React hooks rules
- **Prettier:** Consistent code formatting
- **Husky:** Pre-commit hooks for linting and formatting
- **Conventional Commits:** Standardized commit messages

**Pre-Commit Quality Gates:**

- **Code Quality:** ESLint, Prettier, TypeScript validation (0 errors/warnings)
- **Unit Testing:** 80%+ coverage with comprehensive test cases
- **Integration Testing:** Component interactions, data flow validation
- **Behavior Testing:** Complete user journey validation
- **Build & Performance:** Production build, bundle analysis
- **Security:** Dependency audit, vulnerability scanning

**Testing Strategy (3-Tier Approach):**

- **Unit Tests (70%):** Fast, isolated, focused testing
- **Integration Tests (20%):** Component interactions, data flow
- **Behavior Tests (10%):** User journeys, critical paths

**Coverage Requirements:**

- **Services:** 90%+ coverage (business logic)
- **Utils:** 95%+ coverage (utility functions)
- **Components:** 80%+ coverage (UI components)
- **Contexts:** 85%+ coverage (state management)

**Code Organization:**

- **Component Structure:** Atomic design principles (atoms, molecules, organisms)
- **File Naming:** PascalCase for components, camelCase for utilities
- **Folder Structure:** Feature-based organization
- **Import Order:** External libraries → internal components → utilities
- **Barrel Exports:** Index files for clean imports

**Performance Standards:**

- **Bundle Size:** < 500KB initial bundle
- **Code Splitting:** Route-based and component-based splitting
- **Lazy Loading:** Dynamic imports for non-critical components
- **Memoization:** React.memo, useMemo, useCallback for optimization
- **Tree Shaking:** Dead code elimination

### 7.3 Development Practices

**Version Control:**

- **Git Flow:** Feature branches, pull requests, code reviews
- **Branch Naming:** `feature/`, `bugfix/`, `hotfix/` prefixes
- **Commit Messages:** Conventional commits format
- **Pull Requests:** Required for all changes, minimum 1 reviewer
- **Code Reviews:** Automated checks + human review

**Testing Strategy:**

- **Unit Tests:** Jest + React Testing Library, 80%+ coverage
- **Integration Tests:** User journey testing
- **E2E Tests:** Playwright for critical user flows
- **Visual Regression:** Chromatic for component testing
- **Performance Tests:** Lighthouse CI integration

**Pre-Commit Testing Requirements:**

- **Must Pass Before Commit:**
  - 0 ESLint errors/warnings
  - 0 TypeScript errors
  - All unit tests passing
  - 80%+ test coverage
  - Clean production build
- **Must Pass Before Push:**
  - All integration tests passing
  - E2E tests for critical paths
  - Performance benchmarks met
  - Accessibility compliance
  - Bundle size within limits

**Automated Quality Gates:**

- **Husky Pre-commit Hooks:** Automated linting, formatting, type-checking, unit tests, build
- **Husky Pre-push Hooks:** Comprehensive test suite, security audit, performance checks
- **Lint-staged:** Staged file validation with ESLint, Prettier, TypeScript
- **Coverage Thresholds:** Enforced minimum coverage levels per file type

**Security Practices:**

- **Dependency Scanning:** Automated vulnerability checks
- **Content Security Policy:** Strict CSP headers
- **Input Validation:** Client-side and server-side validation
- **XSS Prevention:** Sanitization of user inputs
- **HTTPS Only:** Enforced secure connections

### 7.4 Non-Functional Requirements

**Performance Requirements:**

- **NFR-001:** Initial page load < 3 seconds on 3G connection
- **NFR-002:** Recipe analysis < 2 seconds for recipes up to 20 ingredients
- **NFR-003:** System supports 100 concurrent users
- **NFR-004:** 99.9% uptime (GitHub Pages SLA)

**Security Requirements:**

- **NFR-005:** No user data transmitted to servers
- **NFR-006:** All data processing happens client-side
- **NFR-007:** HTTPS only (GitHub Pages default)
- **NFR-008:** No third-party tracking beyond anonymous analytics

**Usability Requirements:**

- **NFR-009:** Mobile-first responsive design
- **NFR-010:** WCAG 2.1 AA accessibility compliance
- **NFR-011:** Works on all modern browsers (Chrome, Firefox, Safari, Edge)
- **NFR-012:** Touch-friendly interface for mobile devices

**Reliability Requirements:**

- **NFR-013:** System works offline after initial load
- **NFR-014:** Graceful degradation if JavaScript disabled
- **NFR-015:** Error handling for invalid recipe input
- **NFR-016:** Fallback for unsupported browsers

### 7.5 Browser Support

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### 7.6 Architecture & Design Patterns

**Component Architecture:**

- **Container/Presentational:** Separation of logic and presentation
- **Custom Hooks:** Reusable logic extraction
- **Compound Components:** Flexible component composition
- **Render Props:** Dynamic component behavior
- **Higher-Order Components:** Cross-cutting concerns

**State Management:**

- **Local State:** useState for component-specific state
- **Global State:** Context API for app-wide state
- **Server State:** React Query for data fetching
- **Form State:** React Hook Form for form management
- **URL State:** React Router for navigation state

**Data Flow:**

- **Unidirectional:** Props down, events up
- **Immutable Updates:** No direct state mutation
- **Predictable State:** Reducer pattern for complex state
- **Side Effects:** useEffect for lifecycle management
- **Error Boundaries:** Graceful error handling

### 7.7 Code Documentation

**Inline Documentation:**

- **JSDoc Comments:** All public functions and components
- **Type Definitions:** Comprehensive TypeScript interfaces
- **README Files:** Setup and development instructions
- **API Documentation:** OpenAPI/Swagger for endpoints
- **Component Stories:** Storybook for component documentation

**Code Comments:**

- **Why, not What:** Explain reasoning, not implementation
- **Complex Logic:** Document non-obvious algorithms
- **Business Rules:** Explain domain-specific logic
- **TODOs:** Track technical debt and improvements
- **FIXMEs:** Mark known issues with context

### 7.8 Data Structures & Types

**Core TypeScript Interfaces:**

```typescript
interface Recipe {
  id: string;
  title: string;
  ingredients: Ingredient[];
  instructions: string[];
  servings: number;
  prepTime: number;
  cookTime: number;
  difficulty: "easy" | "medium" | "hard";
  originalText: string;
  convertedText: string;
  substitutions: Substitution[];
  createdAt: Date;
}

interface Ingredient {
  id: string;
  name: string;
  amount: number;
  unit: string;
  isGlutenFree: boolean;
  confidence: number;
  substitutions: Substitution[];
  notes?: string;
}

interface Substitution {
  id: string;
  originalIngredient: string;
  substituteIngredient: string;
  ratio: number;
  unit: string;
  difficulty: "easy" | "medium" | "hard";
  cookingNotes: string;
  nutritionalImpact: string;
  confidence: number;
}

interface GlutenFreeIngredient {
  name: string;
  category: string;
  substitutions: string[];
  ratio: number;
  notes: string;
  difficulty: "easy" | "medium" | "hard";
}

interface RecipeAnalysis {
  hasGluten: boolean;
  glutenIngredients: Ingredient[];
  difficulty: "easy" | "medium" | "hard";
  substitutions: Substitution[];
  cookingTimeAdjustment: number;
  confidence: number;
}
```

### 7.9 Component Architecture

**Component Hierarchy:**

```
App/
├── Layout/
│   ├── Header/
│   │   ├── Logo
│   │   ├── Navigation
│   │   └── ThemeToggle
│   ├── Main/
│   │   ├── HomePage/
│   │   │   ├── Hero
│   │   │   ├── Converter
│   │   │   ├── Examples
│   │   │   └── HowItWorks
│   │   ├── RecipeConverter/
│   │   │   ├── RecipeInput
│   │   │   ├── AnalysisResults
│   │   │   ├── ConvertedRecipe
│   │   │   └── ActionButtons
│   │   ├── IngredientDatabase/
│   │   │   ├── SearchBar
│   │   │   ├── IngredientList
│   │   │   └── IngredientDetail
│   │   └── CookingTips/
│   │       ├── TipCard
│   │       └── TipList
│   └── Footer/
│       ├── Links
│       ├── Legal
│       └── Social
├── Components/
│   ├── UI/
│   │   ├── Button
│   │   ├── Input
│   │   ├── TextArea
│   │   ├── Modal
│   │   ├── Tooltip
│   │   └── LoadingSpinner
│   ├── Recipe/
│   │   ├── RecipeCard
│   │   ├── IngredientList
│   │   ├── SubstitutionCard
│   │   └── DifficultyBadge
│   └── Layout/
│       ├── Container
│       ├── Grid
│       └── Section
└── Hooks/
    ├── useRecipeAnalysis
    ├── useLocalStorage
    ├── useRecipeExport
    └── useIngredientSearch
```

### 7.10 State Management Structure

**Context Providers:**

```typescript
// RecipeContext
interface RecipeContextType {
  currentRecipe: Recipe | null;
  recipeHistory: Recipe[];
  isLoading: boolean;
  error: string | null;
  analyzeRecipe: (text: string) => Promise<void>;
  saveRecipe: (recipe: Recipe) => void;
  deleteRecipe: (id: string) => void;
  exportRecipe: (recipe: Recipe, format: "text" | "pdf") => void;
}

// IngredientContext
interface IngredientContextType {
  ingredients: GlutenFreeIngredient[];
  searchResults: GlutenFreeIngredient[];
  searchQuery: string;
  searchIngredients: (query: string) => void;
  getSubstitution: (ingredient: string) => Substitution[];
}

// UIContext
interface UIContextType {
  theme: "light" | "dark";
  sidebarOpen: boolean;
  currentPage: string;
  setTheme: (theme: "light" | "dark") => void;
  toggleSidebar: () => void;
  setCurrentPage: (page: string) => void;
}
```

### 7.11 API Specifications

**Ingredient Analysis Engine:**

```typescript
// Core analysis functions
interface AnalysisEngine {
  analyzeRecipe(text: string): Promise<RecipeAnalysis>;
  identifyGlutenIngredients(ingredients: string[]): Ingredient[];
  findSubstitutions(ingredient: string): Substitution[];
  calculateDifficulty(
    substitutions: Substitution[],
  ): "easy" | "medium" | "hard";
  adjustCookingTime(
    originalTime: number,
    substitutions: Substitution[],
  ): number;
}

// Ingredient database structure
interface IngredientDatabase {
  glutenIngredients: string[];
  substitutions: Record<string, Substitution[]>;
  categories: Record<string, string[]>;
  search: (query: string) => GlutenFreeIngredient[];
}
```

### 7.12 File Structure

**Project Directory Structure:**

```
gluten-free-substitutions/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
│   └── images/
│       ├── logo.svg
│       ├── hero-image.jpg
│       └── icons/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   ├── recipe/
│   │   ├── layout/
│   │   └── common/
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── RecipeConverter.tsx
│   │   ├── IngredientDatabase.tsx
│   │   ├── CookingTips.tsx
│   │   └── About.tsx
│   ├── hooks/
│   │   ├── useRecipeAnalysis.ts
│   │   ├── useLocalStorage.ts
│   │   └── useIngredientSearch.ts
│   ├── contexts/
│   │   ├── RecipeContext.tsx
│   │   ├── IngredientContext.tsx
│   │   └── UIContext.tsx
│   ├── services/
│   │   ├── analysisEngine.ts
│   │   ├── ingredientDatabase.ts
│   │   └── exportService.ts
│   ├── data/
│   │   ├── ingredients.json
│   │   ├── substitutions.json
│   │   └── cookingTips.json
│   ├── types/
│   │   ├── recipe.ts
│   │   ├── ingredient.ts
│   │   └── index.ts
│   ├── utils/
│   │   ├── textProcessing.ts
│   │   ├── validation.ts
│   │   └── formatting.ts
│   ├── styles/
│   │   ├── globals.css
│   │   ├── components.css
│   │   └── utilities.css
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── tests/
│   ├── components/
│   ├── hooks/
│   ├── services/
│   └── utils/
├── docs/
│   ├── README.md
│   ├── CONTRIBUTING.md
│   └── DEPLOYMENT.md
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── .env.example
```

## 8. Content Requirements

### 8.1 Pages/Sections

1. **Homepage**
   - Hero section with conversion tool
   - Example recipe conversions
   - How it works (3-step process)
   - Featured gluten-free tips

2. **Recipe Converter**
   - Large text area for recipe input
   - Analysis results with highlighted substitutions
   - Converted recipe output with formatting
   - Save/share options

3. **Ingredient Database**
   - Searchable list of gluten-containing ingredients
   - Corresponding gluten-free alternatives
   - Conversion ratios and tips

4. **Cooking Tips**
   - Gluten-free baking techniques
   - Common mistakes to avoid
   - Ingredient storage and handling

5. **FAQ/Help**
   - How to use the converter
   - Common substitution questions
   - Troubleshooting guide

6. **About/Contact**
   - Information about the service
   - Contact form for feedback
   - Privacy policy (no data collection)

### 8.2 Content Management

- Static content managed through markdown files
- Ingredient database stored in JSON format
- Easy to update substitution rules and tips
- No user-generated content or data storage
- All content curated and maintained by site owner

### 8.3 Content Requirements (Detailed)

**Homepage Content:**

- Hero headline: "Convert Any Recipe to Gluten-Free in Seconds"
- Subheading: "No registration required. Your privacy is protected."
- Example recipe conversion (before/after)
- 3-step process explanation
- Trust indicators (privacy-focused, free, no data collection)

**Recipe Converter Content:**

- Input placeholder: "Paste your recipe here..."
- Analysis progress indicators
- Substitution explanations with confidence levels
- Cooking technique adjustments
- Difficulty ratings for each substitution

**Ingredient Database Content:**

- 200+ gluten-containing ingredients
- 300+ gluten-free alternatives
- Conversion ratios and measurements
- Cooking tips for each substitution
- Nutritional information where relevant

**Help/FAQ Content:**

- How to use the converter
- Common substitution questions
- Troubleshooting guide
- Medical disclaimers
- Privacy policy explanation

### 8.4 Ingredient Database Specification

**Core Gluten-Containing Ingredients:**

```json
{
  "glutenIngredients": [
    {
      "name": "wheat flour",
      "category": "flour",
      "substitutions": [
        {
          "ingredient": "almond flour",
          "ratio": 1.0,
          "notes": "Use 1:1 ratio, may need more binding agent"
        },
        {
          "ingredient": "coconut flour",
          "ratio": 0.25,
          "notes": "Use 1/4 the amount, very absorbent"
        }
      ]
    },
    {
      "name": "all-purpose flour",
      "category": "flour",
      "substitutions": [
        {
          "ingredient": "gluten-free flour blend",
          "ratio": 1.0,
          "notes": "Use 1:1 ratio, add xanthan gum for binding"
        }
      ]
    }
  ]
}
```

**Substitution Categories:**

- **Flours:** 15+ gluten-free flour options
- **Grains:** Rice, quinoa, buckwheat alternatives
- **Pasta:** Gluten-free pasta options
- **Breadcrumbs:** Almond meal, coconut flakes
- **Soy Sauce:** Tamari, coconut aminos
- **Beer:** Gluten-free beer alternatives
- **Oats:** Certified gluten-free oats only

### 8.5 Analysis Algorithm Specification

**Recipe Text Processing:**

```typescript
interface TextProcessor {
  extractIngredients(text: string): string[];
  parseAmounts(ingredient: string): {
    amount: number;
    unit: string;
    name: string;
  };
  normalizeIngredientName(name: string): string;
  identifyRecipeStructure(text: string): {
    hasIngredients: boolean;
    hasInstructions: boolean;
  };
}

interface GlutenDetector {
  containsGluten(ingredient: string): boolean;
  getConfidenceLevel(ingredient: string): number;
  getGlutenSource(ingredient: string): string[];
}

interface SubstitutionEngine {
  findBestSubstitution(ingredient: string, context: string): Substitution;
  calculateRatio(original: string, substitute: string): number;
  adjustForRecipeType(
    substitution: Substitution,
    recipeType: string,
  ): Substitution;
}
```

**Analysis Steps:**

1. **Text Parsing:** Extract ingredients and instructions
2. **Gluten Detection:** Identify gluten-containing ingredients
3. **Substitution Matching:** Find best alternatives
4. **Ratio Calculation:** Determine proper amounts
5. **Difficulty Assessment:** Rate conversion complexity
6. **Cooking Adjustments:** Suggest technique changes

### 8.6 Component Specifications

**HomePage Component:**

```typescript
interface HomePageProps {
  onConvertRecipe: (text: string) => void;
  exampleRecipes: Recipe[];
  stats: { conversions: number; users: number };
}

// Required props for each component
interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick: () => void;
}

interface RecipeInputProps {
  placeholder: string;
  maxLength: number;
  onAnalyze: (text: string) => void;
  isLoading: boolean;
}

interface AnalysisResultsProps {
  analysis: RecipeAnalysis;
  onSave: (recipe: Recipe) => void;
  onExport: (recipe: Recipe, format: string) => void;
}
```

**Recipe Converter Component:**

```typescript
interface RecipeConverterProps {
  initialText?: string;
  onAnalysisComplete: (analysis: RecipeAnalysis) => void;
  onSave: (recipe: Recipe) => void;
  onExport: (recipe: Recipe, format: "text" | "pdf") => void;
}

interface ConvertedRecipeProps {
  originalRecipe: Recipe;
  convertedRecipe: Recipe;
  substitutions: Substitution[];
  difficulty: "easy" | "medium" | "hard";
  cookingTimeAdjustment: number;
}
```

### 8.7 Styling & Theme Specification

**Tailwind Configuration:**

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fefce8",
          100: "#fef3c7",
          500: "#eab308", // wheat gold
          600: "#ca8a04",
          700: "#a16207",
        },
        secondary: {
          50: "#f0fdf4",
          100: "#dcfce7",
          500: "#22c55e", // sage green
          600: "#16a34a",
          700: "#15803d",
        },
        neutral: {
          50: "#fafaf9",
          100: "#f5f5f4",
          500: "#78716c",
          900: "#1c1917",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
};
```

**Component Styling Classes:**

```css
/* Global styles */
.hero-gradient {
  background: linear-gradient(135deg, #fef3c7 0%, #dcfce7 100%);
}

.recipe-card {
  @apply bg-white rounded-lg shadow-md p-6 border border-gray-200;
}

.substitution-highlight {
  @apply bg-yellow-100 border-l-4 border-yellow-500 pl-4 py-2;
}

.difficulty-easy {
  @apply bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm;
}

.difficulty-medium {
  @apply bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm;
}

.difficulty-hard {
  @apply bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm;
}
```

### 8.8 Package Dependencies

**Required Dependencies:**

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.0",
    "react-hook-form": "^7.43.0",
    "framer-motion": "^10.0.0",
    "lucide-react": "^0.263.0",
    "clsx": "^1.2.0",
    "tailwind-merge": "^1.10.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.0.0",
    "typescript": "^5.0.0",
    "vite": "^4.4.0",
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/jest-dom": "^5.16.0",
    "jest": "^29.6.0",
    "jest-environment-jsdom": "^29.6.0",
    "eslint": "^8.45.0",
    "prettier": "^3.0.0",
    "husky": "^8.0.0",
    "lint-staged": "^13.2.0"
  }
}
```

### 8.9 Environment Configuration

**Environment Variables:**

```bash
# .env.example
VITE_APP_NAME=GlutenFree Substitutions
VITE_APP_VERSION=1.0.0
VITE_APP_DESCRIPTION=Convert any recipe to gluten-free
VITE_ANALYTICS_ID=your-analytics-id
VITE_SENTRY_DSN=your-sentry-dsn
```

**Vite Configuration:**

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          ui: ["framer-motion", "lucide-react"],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
```

## 9. Functionality Requirements

### 9.1 Interactive Elements

- [ ] Recipe input form with validation
- [ ] Real-time ingredient analysis
- [ ] Recipe conversion engine
- [ ] Ingredient database search
- [ ] Recipe sharing (copy to clipboard)
- [ ] Local storage for recipe history (no server storage)
- [ ] Recipe export (text, PDF download)
- [ ] Recipe scaling (serving size adjustment)
- [ ] Ingredient substitution calculator
- [ ] Analytics tracking (anonymous)
- [ ] Recipe difficulty assessment
- [ ] Substitution confidence indicators
- [ ] Cooking time adjustments
- [ ] Nutritional impact warnings
- [ ] Allergy cross-contamination warnings

### 9.2 Third-party Integrations

- [ ] Google Analytics for usage tracking (anonymous)
- [ ] Social sharing buttons (Twitter, Facebook)
- [ ] Print recipe functionality
- [ ] Email sharing (mailto links)
- [ ] PDF generation for recipe export
- [ ] No user authentication or data collection

## 10. Success Metrics & KPIs

### 10.1 Business Goals

- Help users successfully convert recipes to gluten-free versions
- Provide accurate and helpful substitution recommendations
- Build a community of gluten-free cooking enthusiasts

### 10.2 Key Performance Indicators (KPIs)

- [ ] Number of recipes converted per day
- [ ] User return rate (local storage usage)
- [ ] Time spent on recipe analysis
- [ ] Social shares of converted recipes
- [ ] Recipe export/download rates
- [ ] Ingredient database search frequency
- [ ] User feedback on substitution accuracy (anonymous)

### 10.3 Success Criteria

- **User Adoption:** 1,000+ recipe conversions in first 3 months
- **User Retention:** 40%+ return users (measured via local storage)
- **Performance:** < 2 second recipe analysis time
- **Accuracy:** 95%+ user satisfaction with substitution recommendations

### 10.4 Measurement Methods

- **Google Analytics:** Anonymous page views, session duration, bounce rate
- **Local Storage:** Recipe save/load frequency, return visits
- **Performance Monitoring:** Lighthouse CI, Core Web Vitals
- **User Feedback:** Optional feedback form (anonymous)
- **A/B Testing:** Different UI approaches for conversion rates

## 11. Risk Assessment

### 11.1 Technical Risks

| Risk                         | Impact | Probability | Mitigation                            |
| ---------------------------- | ------ | ----------- | ------------------------------------- |
| Ingredient analysis accuracy | High   | Medium      | Extensive testing, user feedback loop |
| Performance on slow devices  | Medium | Low         | Progressive loading, optimization     |
| Browser compatibility        | Medium | Low         | Polyfills, fallbacks                  |
| Local storage limits         | Low    | Medium      | Clear storage management              |
| Bundle size too large        | Medium | Low         | Code splitting, tree shaking          |
| Memory leaks                 | Medium | Low         | React DevTools profiling              |

### 11.2 Business Risks

| Risk                                 | Impact | Probability | Mitigation                               |
| ------------------------------------ | ------ | ----------- | ---------------------------------------- |
| Low user adoption                    | High   | Medium      | SEO optimization, content marketing      |
| Competition from established players | Medium | High        | Focus on privacy, simplicity             |
| Legal issues with substitutions      | High   | Low         | Medical disclaimers, expert review       |
| Maintenance overhead                 | Medium | High        | Automated testing, documentation         |
| Medical liability                    | High   | Low         | Clear disclaimers, expert review         |
| Data privacy concerns                | Medium | Low         | Privacy-first design, no data collection |

### 11.3 Risk Monitoring

- **Weekly:** Performance metrics, user feedback
- **Monthly:** Security scans, dependency updates
- **Quarterly:** Competitive analysis, feature assessment
- **Annually:** Legal review, medical disclaimer updates

## 12. Project Timeline

### Phase 1: Foundation (Week 1-2)

- [ ] Complete specification
- [ ] Set up development environment
- [ ] Create GitHub repository
- [ ] Basic React application structure
- [ ] Ingredient database development
- [ ] Core conversion algorithm

### Phase 2: Core Features (Week 3-4)

- [ ] Build core functionality
- [ ] Implement design
- [ ] Recipe input and analysis
- [ ] Substitution engine
- [ ] Recipe output and formatting
- [ ] Local storage implementation

### Phase 3: Enhancement (Week 5-6)

- [ ] Add content
- [ ] Test across browsers
- [ ] Performance optimization
- [ ] UI/UX polish
- [ ] Testing and bug fixes
- [ ] Deploy to GitHub Pages

## 13. Future Enhancements

### 13.1 Version 2.0 Features

- [ ] Advanced dietary filters (dairy-free, vegan, etc.)
- [ ] Recipe scaling (serving size adjustments)
- [ ] Shopping list generation from converted recipes
- [ ] Mobile app version
- [ ] Offline functionality
- [ ] Recipe categories and tags
- [ ] Advanced substitution options
- [ ] Recipe nutrition analysis

### 13.2 Scalability Considerations

- Ingredient database can be expanded with curated content
- Recipe analysis can be enhanced with machine learning
- Static site generation for fast loading
- CDN for global content delivery
- API development for third-party integrations
- No user data storage requirements

## 14. Dependencies & Constraints

### 14.1 External Dependencies

- **GitHub Pages** for hosting
- **React ecosystem** for development
- **Tailwind CSS** for styling
- **Vite** for build process

### 14.2 Internal Constraints

- **Budget:** $0 (free tools only)
- **Timeline:** 4-6 weeks for MVP
- **Resources:** Solo developer
- **Expertise:** Need to research gluten-free substitutions

### 14.3 Legal & Compliance

- **Privacy:** GDPR compliance (no data collection)
- **Medical:** Disclaimers about celiac disease
- **Accessibility:** WCAG 2.1 AA compliance
- **Terms:** Clear terms of service

### 14.4 Required Legal Content

- **Medical Disclaimer:** "This tool is for informational purposes only. Consult healthcare providers for medical advice."
- **Privacy Policy:** "No personal data is collected, stored, or transmitted."
- **Terms of Service:** "Use at your own risk. Substitutions are suggestions only."
- **Cookie Policy:** "Only essential cookies used. No tracking cookies."
- **Accessibility Statement:** "We strive for WCAG 2.1 AA compliance."

## 15. Acceptance Criteria

### 15.1 Definition of Done

- [ ] All user stories implemented and tested
- [ ] Performance requirements met
- [ ] Accessibility requirements met
- [ ] Cross-browser testing completed
- [ ] Mobile responsiveness verified
- [ ] Security requirements verified
- [ ] Documentation completed

### 15.2 Testing Requirements

**Unit Testing:**

- **Coverage:** 80%+ code coverage
- **Framework:** Jest + React Testing Library
- **Mocking:** MSW for API mocking
- **Snapshots:** Component snapshot testing
- **Utilities:** Custom testing utilities for common patterns

**Integration Testing:**

- **User Journeys:** Critical path testing
- **API Integration:** Mock service testing
- **State Management:** Context and reducer testing
- **Form Validation:** Input and submission testing
- **Navigation:** Route and link testing

**End-to-End Testing:**

- **Framework:** Playwright
- **Scenarios:** Complete user workflows
- **Cross-Browser:** Chrome, Firefox, Safari, Edge
- **Mobile Testing:** Responsive design validation
- **Performance:** Lighthouse CI integration

**Accessibility Testing:**

- **Automated:** axe-core integration
- **Manual:** Keyboard navigation testing
- **Screen Readers:** NVDA, JAWS, VoiceOver testing
- **Color Contrast:** WCAG 2.1 AA compliance
- **Focus Management:** Tab order and focus indicators

**Performance Testing:**

- **Lighthouse:** Core Web Vitals monitoring
- **Bundle Analysis:** Webpack Bundle Analyzer
- **Memory Leaks:** React DevTools Profiler
- **Load Testing:** Concurrent user simulation
- **Network Conditions:** 3G, 4G, WiFi testing

**Pre-Commit Testing Checklist:**

- **Code Quality Checks:**
  - ESLint: 0 errors, 0 warnings
  - Prettier: All files formatted
  - TypeScript: 0 compilation errors
- **Testing & Coverage:**
  - Unit tests: 80%+ coverage
  - Integration tests: Component interactions
  - Behavior tests: User journey validation
- **Build & Performance:**
  - Production build: Clean, no errors
  - Bundle analysis: < 200KB main bundle
  - Performance: > 90 Lighthouse score
- **Security & Dependencies:**
  - Security audit: 0 high/critical vulnerabilities
  - Dependency check: Review outdated packages
  - License compliance: All dependencies compliant

**Software Development Best Practices:**

- **Code Architecture:** Single Responsibility, DRY, SOLID principles
- **React Best Practices:** Atomic design, proper hooks usage, performance optimization
- **TypeScript Best Practices:** Strict mode, comprehensive typing, no `any` types
- **Testing Best Practices:** Test pyramid, meaningful assertions, proper mocking
- **Git & Version Control:** Conventional commits, feature branches, code reviews

## 16. Development Workflow

### 16.1 Development Environment

**Setup Requirements:**

- **Node.js:** Version 18+ (LTS recommended)
- **Package Manager:** npm or yarn
- **IDE:** VS Code with recommended extensions
- **Git:** Version control with proper configuration
- **Browser DevTools:** React DevTools, Redux DevTools

**Development Tools:**

- **Hot Reload:** Vite HMR for instant feedback
- **Type Checking:** TypeScript compiler in watch mode
- **Linting:** ESLint with auto-fix on save
- **Formatting:** Prettier with format on save
- **Testing:** Jest in watch mode for TDD

### 16.2 Code Review Process

**Pull Request Requirements:**

- **Description:** Clear description of changes
- **Testing:** Evidence of testing (screenshots, test results)
- **Documentation:** Updated documentation if needed
- **Breaking Changes:** Clearly marked and documented
- **Performance:** Performance impact assessment

**Review Checklist:**

- [ ] Code follows established patterns
- [ ] Tests are comprehensive and passing
- [ ] Performance impact is acceptable
- [ ] Security considerations addressed
- [ ] Accessibility requirements met
- [ ] Documentation updated
- [ ] No console.log or debug code

### 16.3 Deployment Pipeline

**CI/CD Pipeline:**

1. **Code Quality:** ESLint, Prettier, TypeScript checks
2. **Testing:** Unit, integration, and E2E tests
3. **Security:** Dependency vulnerability scanning
4. **Performance:** Lighthouse CI checks
5. **Build:** Production build optimization
6. **Deploy:** Automated deployment to GitHub Pages

**Environment Management:**

- **Development:** Local development with hot reload
- **Staging:** Preview deployments for testing
- **Production:** GitHub Pages with CDN
- **Rollback:** Quick rollback capability for issues

**Pre-Commit Workflow:**

- **Local Development Checklist:** Comprehensive validation before pushing
- **Quality Gates:** Automated enforcement of code standards
- **Testing Strategy:** 3-tier approach (Unit 70%, Integration 20%, Behavior 10%)
- **Coverage Enforcement:** Minimum thresholds per file type
- **Performance Monitoring:** Bundle size and performance benchmarks
- **Security Scanning:** Automated vulnerability detection

## 17. Implementation Checklist

### 17.1 Pre-Development

- [ ] Set up development environment
- [ ] Create GitHub repository
- [ ] Configure CI/CD pipeline
- [ ] Set up testing framework
- [ ] Create project documentation

### 17.2 Development Phase

- [ ] Build core components
- [ ] Implement ingredient database
- [ ] Create conversion algorithm
- [ ] Add user interface
- [ ] Implement local storage
- [ ] Add export functionality

### 17.3 Testing Phase

- [ ] Unit tests (80% coverage)
- [ ] Integration tests
- [ ] E2E tests
- [ ] Accessibility tests
- [ ] Performance tests
- [ ] Cross-browser tests

**Pre-Commit Testing Implementation:**

- [ ] Set up Husky pre-commit hooks
- [ ] Configure lint-staged for staged files
- [ ] Implement comprehensive test coverage
- [ ] Set up automated quality gates
- [ ] Configure coverage thresholds
- [ ] Test pre-commit workflow
- [ ] Validate pre-push checks

### 17.4 Deployment Phase

- [ ] Production build
- [ ] Security scan
- [ ] Performance audit
- [ ] Deploy to GitHub Pages
- [ ] Monitor and maintain

## 18. Implementation Details

### 18.1 Core Algorithm Implementation

**Recipe Analysis Engine:**

```typescript
class RecipeAnalysisEngine {
  private glutenIngredients: Set<string>;
  private substitutionMap: Map<string, Substitution[]>;

  async analyzeRecipe(text: string): Promise<RecipeAnalysis> {
    const ingredients = this.extractIngredients(text);
    const glutenIngredients = this.identifyGlutenIngredients(ingredients);
    const substitutions = this.findSubstitutions(glutenIngredients);
    const difficulty = this.calculateDifficulty(substitutions);

    return {
      hasGluten: glutenIngredients.length > 0,
      glutenIngredients,
      difficulty,
      substitutions,
      cookingTimeAdjustment: this.calculateTimeAdjustment(substitutions),
      confidence: this.calculateConfidence(glutenIngredients, substitutions),
    };
  }

  private extractIngredients(text: string): string[] {
    // Regex patterns for common ingredient formats
    const patterns = [
      /(\d+(?:\.\d+)?)\s*([a-zA-Z]+)\s+([a-zA-Z\s]+)/g,
      /([a-zA-Z\s]+)\s*(\d+(?:\.\d+)?)\s*([a-zA-Z]+)/g,
    ];

    return patterns.flatMap((pattern) =>
      Array.from(text.matchAll(pattern), (match) => match[0]),
    );
  }

  private identifyGlutenIngredients(ingredients: string[]): Ingredient[] {
    return ingredients
      .map((ingredient) => this.parseIngredient(ingredient))
      .filter((ingredient) => this.containsGluten(ingredient.name))
      .map((ingredient) => ({
        ...ingredient,
        isGlutenFree: false,
        confidence: this.getGlutenConfidence(ingredient.name),
      }));
  }
}
```

**Ingredient Database Implementation:**

```typescript
class IngredientDatabase {
  private data: IngstitutionDatabase;

  constructor() {
    this.data = this.loadDatabase();
  }

  findSubstitution(ingredient: string): Substitution[] {
    const normalized = this.normalizeIngredient(ingredient);
    return this.data.substitutions[normalized] || [];
  }

  searchIngredients(query: string): GlutenFreeIngredient[] {
    const normalizedQuery = query.toLowerCase();
    return Object.values(this.data.categories)
      .flat()
      .filter((ingredient) =>
        ingredient.name.toLowerCase().includes(normalizedQuery),
      );
  }

  private normalizeIngredient(name: string): string {
    return name
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }
}
```

### 18.2 Component Implementation Examples

**RecipeInput Component:**

```typescript
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
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        className="w-full h-64 p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        disabled={isLoading}
      />
      {error && (
        <p className="text-red-600 text-sm">{error}</p>
      )}
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          {text.length}/{maxLength} characters
        </span>
        <button
          type="submit"
          disabled={isLoading || !text.trim()}
          className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Analyzing...' : 'Convert Recipe'}
        </button>
      </div>
    </form>
  );
};
```

**AnalysisResults Component:**

```typescript
interface AnalysisResultsProps {
  analysis: RecipeAnalysis;
  onSave: (recipe: Recipe) => void;
  onExport: (recipe: Recipe, format: 'text' | 'pdf') => void;
}

export const AnalysisResults: React.FC<AnalysisResultsProps> = ({
  analysis,
  onSave,
  onExport
}) => {
  if (!analysis.hasGluten) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          🎉 Great News!
        </h3>
        <p className="text-green-700">
          This recipe appears to be already gluten-free!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">
          Gluten-Containing Ingredients Found
        </h3>
        <ul className="space-y-2">
          {analysis.glutenIngredients.map((ingredient, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="text-yellow-700">{ingredient.name}</span>
              <span className="text-sm text-yellow-600">
                ({Math.round(ingredient.confidence * 100)}% confidence)
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Substitution Recommendations</h3>
        {analysis.substitutions.map((substitution, index) => (
          <SubstitutionCard
            key={index}
            substitution={substitution}
            difficulty={analysis.difficulty}
          />
        ))}
      </div>

      <div className="flex space-x-4">
        <button
          onClick={() => onSave(analysis)}
          className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
        >
          Save Recipe
        </button>
        <button
          onClick={() => onExport(analysis, 'text')}
          className="px-4 py-2 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600"
        >
          Export as Text
        </button>
        <button
          onClick={() => onExport(analysis, 'pdf')}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          Export as PDF
        </button>
      </div>
    </div>
  );
};
```

### 18.3 Testing Implementation

**Unit Test Examples:**

```typescript
// RecipeAnalysisEngine.test.ts
import { RecipeAnalysisEngine } from "../services/analysisEngine";

describe("RecipeAnalysisEngine", () => {
  let engine: RecipeAnalysisEngine;

  beforeEach(() => {
    engine = new RecipeAnalysisEngine();
  });

  describe("analyzeRecipe", () => {
    it("should identify gluten-containing ingredients", async () => {
      const recipe = `
        Ingredients:
        2 cups all-purpose flour
        1 cup sugar
        3 eggs
      `;

      const result = await engine.analyzeRecipe(recipe);

      expect(result.hasGluten).toBe(true);
      expect(result.glutenIngredients).toHaveLength(1);
      expect(result.glutenIngredients[0].name).toBe("all-purpose flour");
    });

    it("should find appropriate substitutions", async () => {
      const recipe = "1 cup wheat flour";

      const result = await engine.analyzeRecipe(recipe);

      expect(result.substitutions).toHaveLength(2);
      expect(result.substitutions[0].substituteIngredient).toBe("almond flour");
      expect(result.substitutions[0].ratio).toBe(1.0);
    });
  });
});
```

**E2E Test Examples:**

```typescript
// recipe-conversion.e2e.ts
import { test, expect } from "@playwright/test";

test("complete recipe conversion flow", async ({ page }) => {
  await page.goto("/");

  // Enter recipe
  await page.fill(
    '[data-testid="recipe-input"]',
    `
    Chocolate Chip Cookies
    Ingredients:
    2 cups all-purpose flour
    1 cup sugar
    1/2 cup butter
    2 eggs
  `,
  );

  await page.click('[data-testid="analyze-button"]');

  // Wait for analysis
  await page.waitForSelector('[data-testid="analysis-results"]');

  // Verify gluten detection
  await expect(
    page.locator('[data-testid="gluten-ingredients"]'),
  ).toContainText("all-purpose flour");

  // Verify substitutions
  await expect(page.locator('[data-testid="substitutions"]')).toContainText(
    "almond flour",
  );

  // Save recipe
  await page.click('[data-testid="save-button"]');
  await expect(page.locator('[data-testid="save-success"]')).toBeVisible();
});
```

### 18.4 Deployment Configuration

**GitHub Actions Workflow:**

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"
          cache: "npm"

      - run: npm ci
      - run: npm run test
      - run: npm run test:e2e
      - run: npm run build

      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v9
        with:
          configPath: "./lighthouse.config.js"
          uploadArtifacts: true
          temporaryPublicStorage: true

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"
          cache: "npm"

      - run: npm ci
      - run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 18.5 Performance Optimization

**Code Splitting Implementation:**

```typescript
// Lazy load components
const RecipeConverter = lazy(() => import('./pages/RecipeConverter'));
const IngredientDatabase = lazy(() => import('./pages/IngredientDatabase'));
const CookingTips = lazy(() => import('./pages/CookingTips'));

// Route-based splitting
const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/converter" element={<RecipeConverter />} />
          <Route path="/ingredients" element={<IngredientDatabase />} />
          <Route path="/tips" element={<CookingTips />} />
        </Routes>
      </Suspense>
    </Router>
  );
};
```

**Bundle Optimization:**

```typescript
// vite.config.ts - Bundle optimization
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          ui: ["framer-motion", "lucide-react"],
          forms: ["react-hook-form"],
          utils: ["clsx", "tailwind-merge"],
        },
      },
    },
  },
});
```

## 19. Complete Implementation Guide

### 19.1 Project Setup Commands

```bash
# Initialize project
npm create vite@latest gluten-free-substitutions -- --template react-ts
cd gluten-free-substitutions

# Install dependencies
npm install react-router-dom react-hook-form framer-motion lucide-react clsx tailwind-merge

# Install dev dependencies
npm install -D @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom eslint prettier husky lint-staged

# Initialize git
git init
git add .
git commit -m "Initial commit"

# Set up GitHub repository
gh repo create gluten-free-substitutions --public
git remote add origin https://github.com/username/gluten-free-substitutions.git
git push -u origin main
```

### 19.2 Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test
npm run test:e2e

# Lint and format
npm run lint
npm run format

# Type checking
npm run type-check
```

### 19.3 Data Files Structure

**ingredients.json:**

```json
{
  "glutenIngredients": [
    {
      "name": "wheat flour",
      "category": "flour",
      "aliases": ["all-purpose flour", "plain flour", "white flour"],
      "substitutions": [
        {
          "ingredient": "almond flour",
          "ratio": 1.0,
          "notes": "Use 1:1 ratio, may need more binding agent",
          "difficulty": "easy"
        }
      ]
    }
  ],
  "categories": {
    "flour": ["wheat flour", "all-purpose flour", "bread flour"],
    "grains": ["wheat", "barley", "rye", "triticale"],
    "pasta": ["spaghetti", "penne", "fettuccine"],
    "breadcrumbs": ["breadcrumbs", "panko"],
    "sauces": ["soy sauce", "worcestershire sauce"]
  }
}
```

### 19.4 Environment Setup

**package.json scripts:**

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:e2e": "playwright test",
    "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "format": "prettier --write src/**/*.{ts,tsx,js,jsx}",
    "type-check": "tsc --noEmit",
    "prepare": "husky install"
  }
}
```

### 19.5 Deployment Checklist

- [ ] Set up GitHub repository
- [ ] Configure GitHub Pages
- [ ] Set up GitHub Actions workflow
- [ ] Configure environment variables
- [ ] Set up domain (optional)
- [ ] Configure analytics
- [ ] Test deployment pipeline
- [ ] Monitor performance

## 20. Comprehensive Pre-Commit Testing & Quality Requirements

### 20.1 Pre-Commit Quality Gates

**Mandatory Pre-Commit Validation:**

- **Code Quality & Standards:**
  - ESLint: 0 errors, 0 warnings (Airbnb configuration)
  - Prettier: All files formatted consistently
  - TypeScript: 0 compilation errors (strict mode)
  - Conventional Commits: Standardized commit messages

- **Unit Testing Requirements:**
  - Coverage: 80%+ overall, 90%+ services, 95%+ utils
  - Framework: Jest + React Testing Library
  - Test Categories: Services, components, contexts, utilities
  - Mocking: Proper mocking of external dependencies
  - Async Testing: Proper handling of async operations

- **Integration Testing Requirements:**
  - Component Integration: 80%+ coverage
  - Service Integration: 85%+ coverage
  - Context Integration: 80%+ coverage
  - Data Flow: State management and component interactions
  - API Integration: Mock service testing

- **Behavior Testing Requirements:**
  - Critical User Paths: 100% coverage
  - Error Scenarios: 90%+ coverage
  - Accessibility: 100% coverage
  - User Journey: Complete workflow validation
  - Edge Cases: Comprehensive error handling

### 20.2 Automated Quality Infrastructure

**Husky Pre-Commit Hooks:**

```bash
# Pre-commit validation
npx lint-staged
npm run test:unit
npm run type-check
npm run build
```

**Husky Pre-Push Hooks:**

```bash
# Comprehensive validation
npm run test:all
npm audit --audit-level=high
npm run build
npm run analyze
```

**Lint-Staged Configuration:**

- ESLint: Auto-fix and validation
- Prettier: Auto-formatting
- TypeScript: Type checking
- Tests: Related test execution

### 20.3 Testing Strategy Implementation

**3-Tier Testing Approach:**

- **Unit Tests (70%):** Fast, isolated, focused testing
- **Integration Tests (20%):** Component interactions, data flow
- **Behavior Tests (10%):** User journeys, critical paths

**Coverage Requirements by File Type:**

- **Services (Business Logic):** 90%+ coverage
- **Utils (Utility Functions):** 95%+ coverage
- **Components (UI Logic):** 80%+ coverage
- **Contexts (State Management):** 85%+ coverage

**Test Categories by Component:**

- **Services:** analyzeRecipe, findSubstitutions, calculateDifficulty
- **Components:** RecipeInput, AnalysisResults, SubstitutionCard
- **Contexts:** RecipeContext, IngredientContext, UIContext
- **Utils:** idGenerator, textProcessing, validation

### 20.4 Software Development Best Practices

**Code Architecture:**

- **SOLID Principles:** Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion
- **DRY Principle:** No code duplication
- **Clean Code:** Meaningful names, small functions, clear structure
- **Error Handling:** Comprehensive error boundaries and validation

**React Best Practices:**

- **Component Design:** Atomic design principles
- **State Management:** Proper use of Context/Redux patterns
- **Hooks Usage:** Correct dependency arrays, no infinite loops
- **Performance:** Memoization where appropriate, lazy loading
- **Accessibility:** ARIA labels, keyboard navigation, screen reader support

**TypeScript Best Practices:**

- **Type Safety:** Strict mode enabled, no `any` types
- **Interface Design:** Clear, reusable type definitions
- **Generic Usage:** Proper generic constraints and usage
- **Documentation:** JSDoc comments for complex functions

**Testing Best Practices:**

- **Test Pyramid:** More unit tests, fewer integration tests, minimal E2E
- **Test Coverage:** Critical paths at 100%, overall 80%+
- **Test Quality:** Meaningful assertions, clear test names
- **Mock Strategy:** Proper mocking of external dependencies
- **Test Isolation:** Tests don't depend on each other

### 20.5 Quality Monitoring & Enforcement

**Automated Quality Gates:**

- **Pre-Commit:** Lint, format, type-check, unit tests, build
- **Pre-Push:** All tests, security audit, performance checks
- **CI/CD:** Automated quality enforcement in pipeline
- **Coverage Tracking:** Real-time coverage monitoring

**Performance Monitoring:**

- **Bundle Size:** < 200KB main bundle limit
- **Lighthouse Score:** > 90 performance, accessibility, best practices
- **Core Web Vitals:** LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Memory Usage:** No memory leaks, efficient resource usage

**Security Monitoring:**

- **Dependency Scanning:** Automated vulnerability checks
- **License Compliance:** All dependencies compliant
- **Security Headers:** CSP, HTTPS enforcement
- **Input Validation:** XSS prevention, sanitization

### 20.6 Development Workflow Integration

**Local Development Checklist:**

1. **Code Quality Checks:** ESLint, Prettier, TypeScript
2. **Testing & Coverage:** Unit, integration, behavior tests
3. **Build Verification:** Production build validation
4. **Security Scan:** Dependency audit
5. **Performance Check:** Bundle analysis, Lighthouse

**Quality Assurance Process:**

- **Code Review:** Peer review for all changes
- **Automated Testing:** Pre-commit and pre-push validation
- **Performance Testing:** Bundle size and performance benchmarks
- **Security Testing:** Vulnerability scanning and dependency auditing
- **Accessibility Testing:** WCAG 2.1 AA compliance validation

## 21. Notes & Considerations

- **No User Data**: No signup, login, or personal data collection required
- **Local Storage Only**: Recipe history stored in browser, not on servers
- **Ingredient Database**: Need comprehensive list of gluten-containing ingredients and their alternatives
- **Conversion Accuracy**: Substitutions must be tested and reliable for best results
- **User Education**: Include educational content about gluten and gluten-free cooking
- **Accessibility**: Ensure the site is accessible to users with disabilities
- **Performance**: Fast analysis is crucial for good user experience
- **Mobile-First**: Most users will likely access on mobile devices
- **Privacy-First**: No tracking beyond basic analytics, no user accounts
- **Export Options**: Users should be able to save/export their converted recipes
- **Code Quality**: Maintain high standards for maintainability and scalability
- **Testing**: Comprehensive testing strategy for reliability
- **Documentation**: Clear documentation for future maintenance
- **Medical Safety**: All substitutions must be safe for celiac disease
- **Legal Compliance**: Clear disclaimers and terms of service
- **Implementation Ready**: All technical specifications provided for complete development

**Quality Assurance Requirements:**

- **Pre-Commit Testing**: Comprehensive validation before every commit
- **Code Coverage**: Enforced minimum thresholds (80%+ overall, 90%+ services, 95%+ utils)
- **Quality Gates**: Automated enforcement of coding standards
- **Testing Strategy**: 3-tier approach with unit, integration, and behavior tests
- **Performance Monitoring**: Bundle size limits and performance benchmarks
- **Security Scanning**: Automated vulnerability detection and dependency auditing
- **Best Practices**: SOLID principles, clean code, React best practices, TypeScript strict mode

---

**Document Version:** 2.1  
**Last Updated:** December 2024  
**Status:** Ready for Development  
**Next Review:** January 2025  
**Approved By:** [Stakeholder Name]  
**Document Owner:** [Developer Name]
