import React from "react";
import { notFound } from "next/navigation";

import { products } from "@/static/product";
import ProductImage from "../components/product-image";
import ProductColorSelect from "../components/product-color-select";
import ProductSizeButtons from "../components/product-size-button";
import { getProductColorsFromImages } from "@/lib/getProductColorsFromImages";

interface ProductIdPageProps {
  params: Promise<{ id: string }>;
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

async function ProductIdPage({ params }: ProductIdPageProps) {
  const { id } = await params;

  const product = products.find((product) => product.id === id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <div className="mt-12 h-max grid md:grid-cols-[0.7fr_1fr] md:grid-rows-1 grid-rows-2 gap-x-6 gap-y-4 pt-12 container px-2">
        <div className="bg-[#f2f2f2] flex items-center justify-center py-8 px-3 rounded-2xl">
          <ProductImage props={product.images} />
        </div>
        <div className=" flex flex-col items-startjustify-around gap-12 bg-muted rounded-2xl py-8 px-4">
          <div>
            <h2 className="text-3xl text-primary font-semibold">
              {product.name}
            </h2>
          </div>

          <ProductSizeButtons product={product} />

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
