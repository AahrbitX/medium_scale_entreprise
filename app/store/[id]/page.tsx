import React from "react";
import { notFound } from "next/navigation";

import { products } from "@/static/product";
import ProductSizeButton from "../components/product-size-button";
import ProductColorSelect from "../components/product-color-select";
import { getProductColorsFromImages } from "@/lib/getProductColorsFromImages";
import ProductImage from "../components/product-image";

interface ProductIdPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: ProductIdPageProps) {
  const { id } = await params;
  const product = products.find((product) => product.id === id);
  return {
    title: product?.name + " | MSE" || "Product not found",
  };
}

async function ProductIdPage({ params, searchParams }: ProductIdPageProps) {
  const { id } = await params;
  const searchParamsObj = await searchParams;

  // getting the size from the search Params
  const size = Array.isArray(searchParamsObj.size)
    ? searchParamsObj.size[0]
    : searchParamsObj.size;

  const product = products.find((product) => product.id === id);

  if (!product) {
    notFound();
  }

  const selectedSize = product.productSizes?.find((productSize) => {
    return productSize.size === size;
  });

  const defaultSize = product.productSizes?.[0]?.size;
  const finalSize = selectedSize ? selectedSize.size : defaultSize;

  if (!finalSize) {
    notFound();
  }

  return (
    <div className="mt-24 test-section flex items-center justify-evenly gap-12">
      <div>
        <ProductImage props={product.images} />
      </div>
      <div className=" flex flex-col items-center justify-around gap-12">
        <div>
          <h2 className="text-3xl text-primary font-semibold">
            {product.name}
          </h2>
          <p className="text-muted-foreground mt-4">
            Product size : {finalSize}
          </p>
        </div>

        <div className="flex w-full items-center justify-center gap-6">
          {product.productSizes?.map((productSize) => (
            <ProductSizeButton
              size={productSize.size}
              key={productSize.id}
              selected={finalSize === productSize.size}
            />
          ))}
        </div>
        {product.images.length > 1 && (
          <div>
            <ProductColorSelect
              productColors={getProductColorsFromImages(product.images)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductIdPage;
