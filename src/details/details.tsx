import { Link, useLoaderData } from "react-router";

import type { RecipeInformation } from "./types";
import { HealthBenefits, InformationCard } from "./components";

interface Data {
  recipe: RecipeInformation;
}

export function DetailsPage() {
  const { recipe } = useLoaderData<Data>();

  return (
    <div className="flex flex-col items-center w-full space-y-8">
      <div className="w-full grid grid-cols-4">
        <Link
          className="text-blue-600  hover:text-blue-600/80 font-semibold"
          to="/recipefinder"
        >
          Return to Search Page
        </Link>
        <h1 className="text-3xl font-bold text-center col-span-2">
          {recipe.title}
        </h1>
      </div>
      <img
        className="w-4/5 lg:w-1/2 object-cover rounded-lg"
        src={recipe.image}
        alt={recipe.title}
      />
      <HealthBenefits recipe={recipe} />
      <InformationCard
        title="Ingredients"
        content={
          <ul className="w-full list-disc mx-5">
            {recipe.extendedIngredients.map((ingredient) => (
              <li className="" key={ingredient.id}>
                {`${ingredient.measures.us.amount} ${ingredient.measures.us.unitLong} ${ingredient.name}`}
              </li>
            ))}
          </ul>
        }
      />
      <InformationCard
        title="Instructions"
        content={
          <ul>
            {recipe.analyzedInstructions[0].steps.map((instruction) => (
              <li key={instruction.number}>
                <span className="font-semibold">{`${instruction.number}. `}</span>
                {`${instruction.step}`}
              </li>
            ))}
          </ul>
        }
      />
    </div>
  );
}
