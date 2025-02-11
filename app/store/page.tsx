import React from "react";
import { products as rawProducts } from "@/static/product";
import StoreHeroSection from "./components/Hero";
import StoreProductsSection from "./components/products";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export async function generateStaticParams() {
  const uniqueCategories = Array.from(
    new Set(rawProducts.map((product) => product.category.toLowerCase()))
  );

  return uniqueCategories.map((category) => ({
    category,
  }));
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;

  const category =
    typeof sp.category === "string"
      ? sp.category
      : Array.isArray(sp.category)
      ? sp.category[0]
      : null;

  const formattedCategory = category
    ? category.charAt(0).toUpperCase() + category.slice(1) + " Products"
    : "Products";

  return {
    title: `${formattedCategory}`,
  };
}

async function StorePage({ searchParams }: { searchParams: SearchParams }) {
  const sp = await searchParams;
  let products = rawProducts;

  if (sp.category) {
    products = products.filter((p) => p.category.toLowerCase() === sp.category);
  }

  return (
    <div className="mt-20 min-h-screen">
      <StoreHeroSection />
      <StoreProductsSection products={products} />
    </div>
  );
}

export default StorePage;
