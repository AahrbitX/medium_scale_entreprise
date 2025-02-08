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
  const sizeId = Array.isArray(searchParamsObj.size)
    ? searchParamsObj.size[0]
    : searchParamsObj.size;

  const product = products.find((product) => product.id === id);

  if (!product) {
    notFound();
  }

  const currProductPriceObj = product.price.find(
    (price) => price.id.toString() === sizeId
  );

  return (
    <>
      <div className="mt-12 h-max grid md:grid-cols-[340px_1fr] md:grid-rows-1 grid-rows-2 gap-x-6 gap-y-4 pt-12 container px-2">
        <div className="bg-[#f2f2f2] flex items-center justify-center py-8 px-3 rounded-2xl">
          <ProductImage props={product.images} />
        </div>
        <div className=" flex flex-col items-startjustify-around gap-12 bg-muted rounded-2xl py-8 px-4">
          <div>
            <h2 className="text-3xl text-primary font-semibold">
              {product.name}
            </h2>
            <p className="text-muted-foreground mt-4">
              Product size :{" "}
              {`${currProductPriceObj?.size} ${currProductPriceObj?.unit}`}
            </p>
          </div>

          <div className="space-x-6">
            {product.price.map((productSize) => (
              <ProductSizeButton
                key={productSize.id}
                productSizeObj={productSize}
                selected={productSize.id.toString() === sizeId}
              />
            ))}
          </div>

          {product.images.length > 1 && (
            <div className="flex items-center gap-4">
              <h3 className="text-lg text-primary font-semibold">
                Select Color
              </h3>
              <ProductColorSelect
                productColors={getProductColorsFromImages(product.images)}
              />
            </div>
          )}
        </div>
      </div>
      <article className="test-section my-6">Review and Comments</article>
    </>
  );
}

export default ProductIdPage;
