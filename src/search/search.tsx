import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import { API } from "./constants";
import { useEffect, useState } from "react";

export function SearchPage() {
  const [recipes, setRecipes] = useState<any>(null);

  async function onSearch(data: FormData) {
    let url = `${API.SEARCH_RECIPES}?apiKey=${import.meta.env.VITE_API_KEY}`;

    const searchQuery = data.get("searchQuery");
    if (searchQuery) {
      url += `&query=${searchQuery}`;
    }

    console.log("url:", url);

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
      setRecipes(null);
    }
  }

  useEffect(() => {
    console.log("recipes:", recipes);
  }, [recipes]);

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-center ">Recipe Explorer</h1>

      <div className="flex justify-between py-8">
        <form className="flex space-x-2 w-full sm:max-w-md" action={onSearch}>
          <Input
            placeholder="Search for recipes"
            type="search"
            name="searchQuery"
          />
          <Button type="submit">Search</Button>
        </form>
        <div>
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

      {recipes && (
        <div className="py-8">
          <ul>
            {recipes.map((recipe: any) => (
              <li key={recipe.title}>{recipe.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
