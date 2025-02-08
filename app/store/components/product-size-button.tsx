"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { productPriceType } from "@/static/types/product";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

type ProductSizeButtonProps = {
  productSizeObj: Omit<productPriceType, "price">;
  selected: boolean;
  className?: string;
};

function ProductSizeButton({
  productSizeObj,
  className,
  selected,
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
    <Button
      variant={selected ? "default" : "outline"}
      onClick={() =>
        router.push(
          `?${createQueryString("size", productSizeObj.id.toString())}`
        )
      }
      className={cn(
        "transition-colors duration-200",
        selected && "",
        className
      )}
    >
      {productSizeObj.size} <span>{productSizeObj.unit}</span>
    </Button>
  );
}

export default ProductSizeButton;
