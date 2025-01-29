import { products } from "@/static/product";
import React from "react";

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
    return <div className="mt-24 test-section">Product not found</div>;
  }

  return <div className="mt-24 test-section">{product.name}</div>;
}

export default ProductIdPage;
