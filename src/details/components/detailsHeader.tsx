import { Link } from "react-router";

interface DetailsHeaderProps {
  title: string;
}

export function DetailsHeader({ title }: DetailsHeaderProps) {
  return (
    <div className="w-full grid grid-cols-4">
      <Link
        className="text-blue-600  hover:text-blue-600/80 font-semibold"
        to="/recipefinder"
      >
        Return to Search Page
      </Link>
      <h1 className="text-3xl font-bold text-center col-span-2">{title}</h1>
    </div>
  );
}
