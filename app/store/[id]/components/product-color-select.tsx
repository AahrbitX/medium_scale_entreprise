"use client";

import React, { useCallback } from "react";
import { useSearchParams } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ProductColorSelectProps = {
  productColors: {
    color: string;
    slug: string;
  }[];
};

function ProductColorSelect({ productColors }: ProductColorSelectProps) {
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleValueChange = (slug: string) => {
    const selectedColor = productColors.find(
      (productColor) => productColor.slug === slug
    );
    if (selectedColor) {
      // Update the URL without triggering a new request
      const newQueryString = createQueryString("color", selectedColor.color);
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${newQueryString}`
      );
    }
  };

  const defaultColorValue = productColors.find((color) => {
    return color.slug === searchParams.get("color");
  });

  return (
    <Select
      onValueChange={handleValueChange}
      defaultValue={
        defaultColorValue ? defaultColorValue.slug : productColors[0].slug
      }
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Colour" />
      </SelectTrigger>
      <SelectContent>
        {productColors.map((productColor) => (
          <SelectItem
            value={productColor.slug}
            key={`color-${productColor.color}`}
          >
            {productColor.color}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default ProductColorSelect;
