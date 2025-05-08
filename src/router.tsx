import { createBrowserRouter, redirect } from "react-router";
import { Layout } from "./layout";
import { SearchPage } from "./search";
import { DetailsPage } from "./details";
import { fetchRecipeInformation } from "./api";

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { index: true, Component: SearchPage },
      {
        path: "/recipes/:id/information",
        Component: DetailsPage,
        loader: async ({ params }) => {
          const { id } = params;
          if (!id) {
            return redirect("/");
          }
          const recipe = await fetchRecipeInformation(id);
          return { recipe };
        },
      },
    ],
  },
]);
