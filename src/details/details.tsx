import { useLoaderData } from "react-router";
import type { RecipeInformation } from "./types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function listHealthBenefits(recipe: RecipeInformation) {
  const healthBenefits = [];
  if (recipe.dairyFree) {
    healthBenefits.push("Dairy-Free");
  }
  if (recipe.glutenFree) {
    healthBenefits.push("Gluten-Free");
  }
  if (recipe.ketogenic) {
    healthBenefits.push("Keto");
  }
  if (recipe.lowFodmap) {
    healthBenefits.push("Low Fodmap");
  }
  if (recipe.vegan) {
    healthBenefits.push("Vegan");
  }
  if (recipe.vegetarian) {
    healthBenefits.push("Vegetarian");
  }
  if (recipe.veryHealthy) {
    healthBenefits.push("Very Healthy");
  }
  if (recipe.whole30) {
    healthBenefits.push("Whole30");
  }
  return healthBenefits;
}

interface Data {
  recipe: RecipeInformation;
}

export function DetailsPage() {
  const { recipe } = useLoaderData<Data>();

  return (
    <div className="flex flex-col items-center w-full space-y-8">
      <h1 className="text-3xl font-bold text-center">{recipe.title}</h1>
      <img
        className="w-4/5 lg:w-1/2 object-cover rounded-lg"
        src={recipe.image}
        alt={recipe.title}
      />
      <div className="flex justify-center space-x-2">
        {listHealthBenefits(recipe).map((benefit) => (
          <Badge>{benefit}</Badge>
        ))}
      </div>

      <Card className="w-1/2">
        <CardHeader>
          <CardTitle>
            <h2 className="text-2xl font-semibold">Ingredients</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="w-full">
            {recipe.extendedIngredients.map((ingredient) => (
              <li>
                {`- ${ingredient.measures.us.amount} ${ingredient.measures.us.unitLong} ${ingredient.name}`}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="w-1/2">
        <CardHeader>
          <CardTitle>
            <h2 className="text-2xl font-semibold">Instructions</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{recipe.instructions}</p>
        </CardContent>
      </Card>
    </div>
  );
}
