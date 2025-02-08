"use client";

import React from "react";
import { ProductImagesType } from "@/static/types/product";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

function ProductImage({ props }: { props: ProductImagesType }) {
  const searchParams = useSearchParams();
  const selectedColor = searchParams.get("color") || "default";

  const selectedImage = props.find((imgObj) => {
    return Object.keys(imgObj)[0] === selectedColor;
  });

  const imageUrl = selectedImage
    ? Object.values(selectedImage)[0]
    : props[0].default;

  return (
    <Image
      priority
      src={imageUrl}
      alt={`Product image`}
      width={200}
      height={200}
    />
  );
}

export default ProductImage;
