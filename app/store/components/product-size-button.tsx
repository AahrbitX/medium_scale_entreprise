"use client";

import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

type ProductSizeButtonProps = {
  size: string;
  className?: string;
  selected: boolean;
  unit?: "kg" | "g" | "l" | "ml" | string;
};

function ProductSizeButton({
  size,
  className,
  selected,
  unit = "kg",
}: ProductSizeButtonProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  return (
    <button
      onClick={() => router.push(`?${createQueryString("size", size)}`)}
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
