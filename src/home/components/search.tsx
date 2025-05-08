import { Combobox } from "@/components/ui/combobox";
import { CUISINES } from "../constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchProps {
  setCuisine: (cuisine: string) => void;
  onSearch: (data: FormData) => Promise<void>;
}

export function Search({ setCuisine, onSearch }: SearchProps) {
  return (
    <div className="flex gap-2 max-w-3xl mx-auto py-8">
      <Combobox
        placeholder="Filter by cuisine"
        emptyLabel="No cuisine found"
        onSelect={(cuisineOption) => setCuisine(cuisineOption)}
        options={CUISINES.map((cuisine) => ({
          value: cuisine,
          label: cuisine,
        }))}
      />
      <form className="flex gap-2 w-full" action={onSearch}>
        <Input
          placeholder="Search for recipes..."
          type="search"
          name="searchQuery"
        />
        <Button className="hidden sm:inline" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
