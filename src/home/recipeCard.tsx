import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router";

interface RecipeCardProps {
  image: string;
  title: string;
  recipeId: number;
}

export function RecipeCard({ image, title, recipeId }: RecipeCardProps) {
  return (
    <Card className="w-full py-0 max-h-36 overflow-hidden">
      <Link to={`/recipefinder/recipes/${recipeId}/information`}>
        <div className="flex">
          <div className="max-h-36">
            <img src={image} alt={title} className="object-cover" />
          </div>
          <CardContent className="flex flex-col justify-center w-full max-h-36">
            <h2 className="text-lg font-semibold italic">{title}</h2>
          </CardContent>
        </div>
      </Link>
    </Card>
  );
}
