import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SearchPage() {
  function onSearch(data: FormData) {
    console.log("data:", data);
  }

  return (
    <div className="mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center ">Recipe Explorer</h1>

      <div className="pt-8">
        <form className="flex space-x-2 max-w-md" action={onSearch}>
          <Input placeholder="Search recipes..." type="search" />
          <Button type="submit">Search</Button>
        </form>
      </div>
    </div>
  );
}
