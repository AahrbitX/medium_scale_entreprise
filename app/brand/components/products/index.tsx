import ProductCard from "@/components/custom/product-card";
import { products } from "@/static/product";
import React from "react";

function BrandProductsSection() {
  return (
    <div className="test-section">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products
          .filter((i) => i.isOwnProduct)
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isOwnProduct={product.isOwnProduct}
            />
          ))}
      </div>
    </div>
  );
}

export default BrandProductsSection;
