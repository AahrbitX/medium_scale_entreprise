import React from "react";
import ProductCard from "@/components/custom/product-card";
import ProductControls from "./controls";
import { productType } from "@/static/types/product";

function StoreProductsSection({ products }: { products: productType[] }) {
  return (
    <>
      <ProductControls />
      <div className="container max-w-[72rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isOwnProduct={product.isOwnProduct}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default StoreProductsSection;
