import { API_URL } from "./constants";
import type { FetchRecipesResponse, RecipeInformation } from "./types";

async function get<T>(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return response.json() as T;
  } catch (error) {
    console.error(error);
  }
}

interface FetchRecipesParams {
  query: string;
  cuisine?: string;
}

export async function fetchRecipes({ query, cuisine }: FetchRecipesParams) {
  let url = `${API_URL}/recipes/complexSearch?apiKey=${
    import.meta.env.VITE_API_KEY
  }&query=${query}`;

  if (cuisine) {
    url += `&cuisine=${cuisine}`;
  }

  return get<FetchRecipesResponse>(url);
}

export async function fetchRecipeInformation(id?: string) {
  const url = `${API_URL}/recipes/${id}/information?apiKey=${
    import.meta.env.VITE_API_KEY
  }`;
  return get<RecipeInformation>(url);
}
