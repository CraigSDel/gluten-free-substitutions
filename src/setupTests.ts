import '@testing-library/jest-dom';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
} as unknown as typeof IntersectionObserver;

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock ingredients data
jest.mock('./data/ingredients.json', () => ({
  glutenIngredients: [
    {
      name: "all-purpose flour",
      aliases: ["flour", "wheat flour", "plain flour"],
      substitutions: [
        {
          name: "almond flour",
          ratio: 1,
          unit: "cup",
          difficulty: "easy",
          cookingNotes: "May need additional binding agent",
          nutritionalImpact: "Higher protein, lower carbs",
          confidence: 0.9
        }
      ]
    },
    {
      name: "bread flour",
      aliases: ["strong flour", "high-protein flour"],
      substitutions: [
        {
          name: "gluten-free bread flour",
          ratio: 1,
          unit: "cup",
          difficulty: "medium",
          cookingNotes: "May need xanthan gum for structure",
          nutritionalImpact: "Similar nutrition profile",
          confidence: 0.85
        }
      ]
    }
  ],
  categories: {
    flour: ["all-purpose flour", "bread flour", "cake flour"],
    grains: ["wheat", "barley", "rye"],
    pasta: ["spaghetti", "penne", "fettuccine"],
    breadcrumbs: ["panko", "bread crumbs"],
    sauces: ["soy sauce", "teriyaki sauce"],
    beverages: ["beer", "malt beverages"],
    oats: ["oats", "oat flour"]
  }
}));
