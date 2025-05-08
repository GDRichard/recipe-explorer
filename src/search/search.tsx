import { ChevronRight, ChevronLeft } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import { CUISINES } from "./constants";
import { useState } from "react";
import { RecipeCard } from "./recipeCard";
import { fetchRecipes } from "@/api";

interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

type Page = Recipe[];

export function SearchPage() {
  const [pages, setPages] = useState<Page[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [cuisine, setCuisine] = useState<string>("");

  async function onSearch(data: FormData) {
    const searchQuery = data.get("searchQuery");
    if (!searchQuery || typeof searchQuery !== "string") {
      return;
    }

    const response = await fetchRecipes({
      query: searchQuery,
      cuisine: cuisine.length > 0 ? cuisine : undefined,
    });

    splitRecipesByPage(response.results);
  }

  function splitRecipesByPage(recipes: Recipe[]) {
    const pages: Page[] = [];
    const recipesToSplit = [...recipes];
    const pageCount = Math.floor(recipes.length / 5);

    // Split the recipes into lists of 5 per page
    for (let i = 0; i < pageCount; i++) {
      const page = recipesToSplit.slice(0, 5);
      pages.push(page);
      recipesToSplit.splice(0, 5);
    }

    // Push the remaining recipes onto the last page
    if (recipesToSplit.length > 0) {
      pages.push(recipesToSplit);
    }

    setPages(pages);
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-center ">Recipe Finder</h1>

      <div className="flex gap-2 max-w-3xl mx-auto py-8">
        <Combobox
          placeholder="Filter by cuisine"
          emptyLabel="No cuisine found"
          onSelect={(cuisineOption) => setCuisine(cuisineOption)}
          options={CUISINES.map((cuisine) => ({
            value: cuisine,
            label: cuisine,
          }))}
        />
        <form className="flex gap-2 w-full" action={onSearch}>
          <Input
            placeholder="Search for recipes..."
            type="search"
            name="searchQuery"
          />
          <Button type="submit">Search</Button>
        </form>
      </div>

      {pages.length > 0 ? (
        <>
          <div className="flex justify-center gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                if (currentPage > 0) {
                  setCurrentPage(currentPage - 1);
                }
              }}
            >
              <ChevronLeft />
            </Button>
            {pages.map((_, index) => (
              <Button
                key={uuidv4()}
                size="icon"
                variant={index === currentPage ? "default" : "outline"}
                onClick={() => setCurrentPage(index)}
              >
                {index}
              </Button>
            ))}
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                if (currentPage < pages.length - 1) {
                  setCurrentPage(currentPage + 1);
                }
              }}
            >
              <ChevronRight />
            </Button>
          </div>
          <div className="mx-auto max-w-3xl py-8 space-y-4">
            {pages[currentPage].map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipeId={recipe.id}
                title={recipe.title}
                image={recipe.image}
              />
            ))}
          </div>
        </>
      ) : null}
    </>
  );
}
