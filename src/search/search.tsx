import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import { API } from "./constants";
import { useState } from "react";
import { RecipeCard } from "./recipeCard";

interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

export function SearchPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  async function onSearch(data: FormData) {
    const searchQuery = data.get("searchQuery");
    if (!searchQuery) {
      return;
    }

    const url = `${API.SEARCH_RECIPES}?apiKey=${
      import.meta.env.VITE_API_KEY
    }&query=${searchQuery}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log("json:", json);
      setRecipes(json.results);
    } catch (error) {
      console.error(error);
      setRecipes([]);
    }
  }

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-center ">Recipe Finder</h1>

      <div className="flex justify-between py-8">
        <form className="flex space-x-2 w-full sm:max-w-md" action={onSearch}>
          <Input
            placeholder="Search for recipes"
            type="search"
            name="searchQuery"
          />
          <Button type="submit">Search</Button>
        </form>
        <div className="w-1/3">
          <Combobox
            placeholder="Filter by cuisine"
            emptyLabel="No cuisine found"
            options={[
              { value: "italian", label: "Italian" },
              { value: "greek", label: "Greek" },
              { value: "french", label: "French" },
            ]}
          />
        </div>
      </div>

      {recipes.length > 0 ? (
        <div className="mx-auto max-w-3xl py-8 space-y-4">
          {recipes.map((recipe) => (
            <RecipeCard title={recipe.title} image={recipe.image} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
