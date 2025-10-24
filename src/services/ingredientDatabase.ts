import { GlutenFreeIngredient, Substitution } from "../types";

// Import the JSON data directly
const ingredientsData = {
  "glutenIngredients": [
    {
      "name": "wheat flour",
      "category": "flour",
      "aliases": ["all-purpose flour", "plain flour", "white flour", "bread flour", "cake flour", "self-rising flour", "whole wheat flour"],
      "substitutions": [
        {
          "ingredient": "almond flour",
          "ratio": 1.0,
          "notes": "Use 1:1 ratio, may need more binding agent",
          "difficulty": "easy"
        },
        {
          "ingredient": "coconut flour",
          "ratio": 0.25,
          "notes": "Use 1/4 the amount, very absorbent",
          "difficulty": "medium"
        },
        {
          "ingredient": "gluten-free flour blend",
          "ratio": 1.0,
          "notes": "Use 1:1 ratio, add xanthan gum for binding",
          "difficulty": "easy"
        },
        {
          "ingredient": "rice flour",
          "ratio": 1.0,
          "notes": "Use 1:1 ratio, may need binding agent",
          "difficulty": "easy"
        }
      ]
    },
    {
      "name": "all-purpose flour",
      "category": "flour",
      "aliases": ["plain flour", "white flour"],
      "substitutions": [
        {
          "ingredient": "gluten-free flour blend",
          "ratio": 1.0,
          "notes": "Use 1:1 ratio, add xanthan gum for binding",
          "difficulty": "easy"
        },
        {
          "ingredient": "almond flour",
          "ratio": 1.0,
          "notes": "Use 1:1 ratio, may need more binding agent",
          "difficulty": "easy"
        }
      ]
    },
    {
      "name": "bread flour",
      "category": "flour",
      "aliases": ["strong flour", "high-gluten flour"],
      "substitutions": [
        {
          "ingredient": "gluten-free bread flour",
          "ratio": 1.0,
          "notes": "Use 1:1 ratio, add vital wheat gluten substitute",
          "difficulty": "medium"
        }
      ]
    },
    {
      "name": "wheat",
      "category": "grain",
      "aliases": ["wheat berries", "wheat kernels"],
      "substitutions": [
        {
          "ingredient": "quinoa",
          "ratio": 1.0,
          "notes": "Use 1:1 ratio, cook similarly",
          "difficulty": "easy"
        },
        {
          "ingredient": "buckwheat",
          "ratio": 1.0,
          "notes": "Use 1:1 ratio, naturally gluten-free",
          "difficulty": "easy"
        }
      ]
    },
    {
      "name": "barley",
      "category": "grain",
      "aliases": ["pearl barley", "hulled barley"],
      "substitutions": [
        {
          "ingredient": "brown rice",
          "ratio": 1.0,
          "notes": "Use 1:1 ratio, similar texture",
          "difficulty": "easy"
        },
        {
          "ingredient": "quinoa",
          "ratio": 1.0,
          "notes": "Use 1:1 ratio, higher protein",
          "difficulty": "easy"
        }
      ]
    },
    {
      "name": "rye",
      "category": "grain",
      "aliases": ["rye flour", "rye berries"],
      "substitutions": [
        {
          "ingredient": "buckwheat flour",
          "ratio": 1.0,
          "notes": "Use 1:1 ratio, similar earthy flavor",
          "difficulty": "medium"
        }
      ]
    },
    {
      "name": "soy sauce",
      "category": "sauce",
      "aliases": ["shoyu", "tamari (if not gluten-free)"],
      "substitutions": [
        {
          "ingredient": "tamari (gluten-free)",
          "ratio": 1.0,
          "notes": "Use 1:1 ratio, naturally gluten-free",
          "difficulty": "easy"
        },
        {
          "ingredient": "coconut aminos",
          "ratio": 1.0,
          "notes": "Use 1:1 ratio, slightly sweeter",
          "difficulty": "easy"
        }
      ]
    },
    {
      "name": "breadcrumbs",
      "category": "breading",
      "aliases": ["panko", "dried bread crumbs"],
      "substitutions": [
        {
          "ingredient": "almond meal",
          "ratio": 1.0,
          "notes": "Use 1:1 ratio, adds nutty flavor",
          "difficulty": "easy"
        },
        {
          "ingredient": "gluten-free breadcrumbs",
          "ratio": 1.0,
          "notes": "Use 1:1 ratio, store-bought or homemade",
          "difficulty": "easy"
        }
      ]
    },
    {
      "name": "pasta",
      "category": "grain",
      "aliases": ["spaghetti", "penne", "fettuccine", "macaroni"],
      "substitutions": [
        {
          "ingredient": "gluten-free pasta",
          "ratio": 1.0,
          "notes": "Use 1:1 ratio, cook according to package directions",
          "difficulty": "easy"
        },
        {
          "ingredient": "zucchini noodles",
          "ratio": 1.0,
          "notes": "Use 1:1 ratio, spiralize fresh zucchini",
          "difficulty": "medium"
        }
      ]
    },
    {
      "name": "beer",
      "category": "beverage",
      "aliases": ["ale", "lager", "stout"],
      "substitutions": [
        {
          "ingredient": "gluten-free beer",
          "ratio": 1.0,
          "notes": "Use 1:1 ratio, check labels carefully",
          "difficulty": "easy"
        },
        {
          "ingredient": "chicken broth",
          "ratio": 1.0,
          "notes": "Use 1:1 ratio, for cooking applications",
          "difficulty": "easy"
        }
      ]
    }
  ],
  "categories": {
    "flour": ["wheat flour", "all-purpose flour", "bread flour", "cake flour", "self-rising flour"],
    "grains": ["wheat", "barley", "rye", "triticale", "bulgur", "couscous"],
    "pasta": ["spaghetti", "penne", "fettuccine", "macaroni", "lasagna noodles"],
    "breadcrumbs": ["breadcrumbs", "panko", "dried bread crumbs"],
    "sauces": ["soy sauce", "worcestershire sauce", "teriyaki sauce"],
    "beverages": ["beer", "ale", "lager", "stout"],
    "breading": ["breadcrumbs", "panko", "dried bread crumbs"]
  }
};

export class IngredientDatabase {
  private data: typeof ingredientsData;

  constructor() {
    this.data = ingredientsData;
  }

  findSubstitution(ingredient: string): Substitution[] {
    const normalized = this.normalizeIngredient(ingredient);
    const glutenIngredient = this.data.glutenIngredients.find(
      (item) =>
        item.name.toLowerCase() === normalized ||
        item.name.toLowerCase().includes(normalized) ||
        item.aliases?.some((alias) => 
          alias.toLowerCase() === normalized || 
          alias.toLowerCase().includes(normalized)
        ),
    );

    if (!glutenIngredient) return [];

    return glutenIngredient.substitutions.map((sub) => ({
      id: `${glutenIngredient.name}-${sub.ingredient}`,
      originalIngredient: glutenIngredient.name,
      substituteIngredient: sub.ingredient,
      ratio: sub.ratio,
      unit: "cup",
      difficulty: sub.difficulty as "easy" | "medium" | "hard",
      cookingNotes: sub.notes,
      nutritionalImpact: "Varies by substitution",
      confidence: 0.9,
    }));
  }

  searchIngredients(query: string): GlutenFreeIngredient[] {
    const normalizedQuery = query.toLowerCase();
    const results: GlutenFreeIngredient[] = [];

    // Search in gluten ingredients for substitutions
    this.data.glutenIngredients.forEach((item) => {
      if (item.name.toLowerCase().includes(normalizedQuery)) {
        item.substitutions.forEach((sub) => {
          results.push({
            name: sub.ingredient,
            category: item.category,
            substitutions: [item.name],
            ratio: sub.ratio,
            notes: sub.notes,
            difficulty: sub.difficulty as "easy" | "medium" | "hard",
          });
        });
      }
    });

    return results;
  }

  getAllCategories(): string[] {
    return Object.keys(this.data.categories);
  }

  getIngredientsByCategory(category: string): string[] {
    return (this.data.categories as Record<string, string[]>)[category] || [];
  }

  private normalizeIngredient(name: string): string {
    return name
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Keep hyphens
      .replace(/\s+/g, " ")
      .trim();
  }
}
