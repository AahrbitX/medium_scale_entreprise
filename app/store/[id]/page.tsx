import React from "react";

import { products } from "@/static/product";
import ProductSizeButton from "../components/product-size-button";
import { notFound, redirect } from "next/navigation";

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
  const { size } = await searchParams;

  const product = products.find((product) => product.id === id);

  if (!product) {
    notFound();
  }

  const selectedSize = product.productSizes?.find((productSize) => {
    return productSize.size === size;
  });

  if (!selectedSize) {
    redirect(`/store/${id}`);
  }

  const createProductSizeSearchParam = (size: string) => {
    return `?size=${size}`;
  };

  return (
    <div className="mt-24 test-section flex flex-col items-center justify-around">
      <div>
        <h2 className="text-3xl text-primary font-semibold">{product.name}</h2>
        {!!selectedSize && (
          <>
            <p className="text-muted-foreground">
              Product size : {selectedSize.size}
            </p>
          </>
        )}
      </div>

      <div className="flex w-full items-center justify-center gap-6">
        {product.productSizes?.map((productSize) => (
          <ProductSizeButton
            size={productSize.size}
            key={productSize.id}
            selected={selectedSize.size === productSize.size}
            href={createProductSizeSearchParam(productSize.size)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductIdPage;
