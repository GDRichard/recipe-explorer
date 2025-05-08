import { useState } from "react";
import { fetchRecipes } from "@/api";
import { PaginationButtons, RecipesList, Search } from "./components";
import type { Page } from "./types";
import type { Recipe } from "@/api/types";

export function HomePage() {
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

    if (!response) {
      console.error(
        `Error: Could not find recipes matching query ${searchQuery}`
      );
      return;
    }
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
      <Search onSearch={onSearch} setCuisine={setCuisine} />
      {pages.length > 1 && (
        <PaginationButtons
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageCount={pages.length}
        />
      )}
      {pages.length > 0 && <RecipesList recipes={pages[currentPage]} />}
    </>
  );
}
