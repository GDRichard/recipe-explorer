import { createBrowserRouter, redirect } from "react-router";
import { Layout } from "./layout";
import { HomePage } from "./home";
import { DetailsPage } from "./details";
import { fetchRecipeInformation } from "./api";

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "/recipefinder",
        children: [
          { index: true, Component: HomePage },
          {
            path: "recipes/:id/information",
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
    ],
  },
]);
