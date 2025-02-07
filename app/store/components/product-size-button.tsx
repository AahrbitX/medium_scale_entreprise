"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";

type ProductSizeButtonProps = {
  size: string;
  className?: string;
  selected: boolean;
  href: string;
  unit?: "kg" | "g" | "l" | "ml" | string;
};

function ProductSizeButton({
  size,
  className,
  selected,
  href,
  unit = "kg",
}: ProductSizeButtonProps) {
  const router = useRouter();

  const handleNavigateToProductSearchParam = () => {
    router.push(href);
  };

  return (
    <button
      onClick={handleNavigateToProductSearchParam}
      className={cn(
        "px-4 py-3 rounded-2xl border border-sky-400 text-neutral-800 hover:bg-sky-300 hover:text-gray-700",
        selected && "bg-sky-400 text-white",
        className
      )}
    >
      {size} <span>{unit}</span>
    </button>
  );
}

export default ProductSizeButton;
