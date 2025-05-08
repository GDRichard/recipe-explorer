import { ChevronLeft, ChevronRight } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

import { Button } from "@/components/ui/button";

interface PaginationButtonsProps {
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  pageCount: number;
}

export function PaginationButtons({
  currentPage,
  setCurrentPage,
  pageCount,
}: PaginationButtonsProps) {
  return (
    <div className="flex justify-center gap-2">
      <Button
        size="icon"
        variant="outline"
        onClick={() => {
          if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
          }
        }}
      >
        <ChevronLeft />
      </Button>
      {Array.from({ length: pageCount }, (_, index) => (
        <Button
          key={uuidv4()}
          size="icon"
          variant={index === currentPage ? "default" : "outline"}
          onClick={() => setCurrentPage(index)}
        >
          {index}
        </Button>
      ))}
      <Button
        size="icon"
        variant="outline"
        onClick={() => {
          if (currentPage < pageCount - 1) {
            setCurrentPage(currentPage + 1);
          }
        }}
      >
        <ChevronRight />
      </Button>
    </div>
  );
}
