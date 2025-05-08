export interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

export interface FetchRecipesResponse {
  results: Recipe[];
  offset: number;
  number: number;
  totalResults: number;
}

export interface RecipeInformation {
  id: number;
  title: string;
  image: string;
  imageType: string;
  servings: number;
  readyInMinutes: number;
  cookingMinutes: number;
  preparationMinutes: number;
  license: string;
  sourceName: string;
  sourceUrl: string;
  spoonacularSourceUrl: string;
  healthScore: number;
  spoonacularScore: number;
  pricePerServing: number;
  cheap: boolean;
  creditsText: string;
  cuisines: string[];
  dairyFree: false;
  diets: string[];
  gaps: string;
  glutenFree: boolean;
  instructions: string;
  ketogenic: boolean;
  lowFodmap: boolean;
  occasions: string[];
  sustainable: boolean;
  vegan: boolean;
  vegetarian: boolean;
  veryHealthy: boolean;
  veryPopular: boolean;
  whole30: boolean;
  weightWatcherSmartPoints: number;
  dishTypes: string[];
  extendedIngredients: ExtendedIngredient[];
  analyzedInstructions: AnalyzedInstructions[];
  summary: string;
}

interface ExtendedIngredient {
  aisle: string;
  amount: number;
  consistency: string;
  id: number;
  image: string;
  measures: {
    metric: {
      amount: number;
      unitLong: string;
      unitShort: string;
    };
    us: {
      amount: number;
      unitLong: string;
      unitShort: string;
    };
  };
  meta: string[];
  name: string;
  original: string;
  originalName: string;
  unit: string;
}

interface AnalyzedInstructions {
  name: string;
  steps: InstructionStep[];
}

interface InstructionStep {
  number: number;
  step: string;
  ingredients: InstructionItem[];
  equipment: [];
}

interface InstructionItem {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}
