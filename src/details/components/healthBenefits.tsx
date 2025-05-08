import { Badge } from "@/components/ui/badge";
import type { RecipeInformation } from "../types";
import { HEALTH_BENEFITS_MAP } from "../constants";

interface HealthBenefitsProps {
  recipe: RecipeInformation;
}

export function HealthBenefits({ recipe }: HealthBenefitsProps) {
  return (
    <div className="flex justify-center space-x-2">
      {listHealthBenefits(recipe).map((benefit) => (
        <Badge>{benefit}</Badge>
      ))}
    </div>
  );
}

function listHealthBenefits(recipe: RecipeInformation) {
  const benefits = [];

  for (const benefit of Object.keys(
    HEALTH_BENEFITS_MAP
  ) as (keyof typeof HEALTH_BENEFITS_MAP)[]) {
    if (recipe[benefit]) {
      benefits.push(HEALTH_BENEFITS_MAP[benefit]);
    }
  }

  return benefits;
}
