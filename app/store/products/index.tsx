import React from "react";
import ProductCard from "@/components/custom/product-card";
import { products } from "@/static/product";

function StoreProductsSection() {
  return (
    <div className="test-section">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
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

export default StoreProductsSection;
