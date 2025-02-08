"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { productPriceType, productType } from "@/static/types/product";
import { useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

type ProductSizeButtonProps = {
  productSizeObj: Omit<productPriceType, "price">;
  selected: boolean;
  className?: string;
};

export default function ProductSizeButtons({
  product,
}: {
  product: productType;
}) {
  const searchParams = useSearchParams();

  return (
    <div className="space-x-6">
      {product.price.map((productSize) => (
        <ProductSizeButton
          key={productSize.id}
          productSizeObj={productSize}
          selected={productSize.id.toString() === searchParams.get("size")}
        />
      ))}
    </div>
  );
}

export function ProductSizeButton({
  productSizeObj,
  className,
  selected,
}: ProductSizeButtonProps) {
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleClick = () => {
    // Update the URL without triggering a new request
    const newQueryString = createQueryString(
      "size",
      productSizeObj.id.toString()
    );
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${newQueryString}`
    );
  };

  return (
    <Button
      variant={selected ? "default" : "outline"}
      onClick={handleClick}
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
