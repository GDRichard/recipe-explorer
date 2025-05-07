import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/comboBox";
import { Input } from "@/components/ui/input";

export function SearchPage() {
  function onSearch(data: FormData) {
    console.log("data:", data);
  }

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-center ">Recipe Explorer</h1>

      <div className="flex justify-between pt-8">
        <form className="flex space-x-2 w-full sm:max-w-md" action={onSearch}>
          <Input placeholder="Search recipes" type="search" />
          <Button type="submit">Search</Button>
        </form>
        <div>
          <Combobox
            placeholder="Select cuisine"
            emptyLabel="No cuisine found"
            options={[
              { value: "italian", label: "Italian" },
              { value: "greek", label: "Greek" },
              { value: "french", label: "French" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
