import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { JSX } from "react";

interface InformationCardProps {
  title: string;
  content: JSX.Element;
}

export function InformationCard({ title, content }: InformationCardProps) {
  return (
    <Card className="w-4/5 lg:w-1/2">
      <CardHeader>
        <CardTitle>
          <h2 className="text-2xl font-semibold">{title}</h2>
        </CardTitle>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
}
