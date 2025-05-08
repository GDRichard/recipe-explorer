import { RecipeCard } from "./recipeCard";
import type { Recipe } from "../types";

interface RecipesListProps {
  recipes: Recipe[];
}

export function RecipesList({ recipes }: RecipesListProps) {
  return (
    <div className="mx-auto max-w-3xl py-8 space-y-4">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipeId={recipe.id}
          title={recipe.title}
          image={recipe.image}
        />
      ))}
    </div>
  );
}
