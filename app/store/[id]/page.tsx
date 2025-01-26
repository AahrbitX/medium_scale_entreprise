import { products } from "@/static/product";
import React from "react";

function ProductIdPage({ params }: { params: { id: string } }) {
  const product = products.find((product) => product.id === params.id);
  return <div className="mt-24 test-section">{product?.name}</div>;
}

export default ProductIdPage;
