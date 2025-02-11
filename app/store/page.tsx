import React from "react";
import StoreHeroSection from "./Hero";
import StoreProductsSection from "./products";

function StorePage() {
  return (
    <div className="mt-20 min-h-screen">
      <StoreHeroSection />
      <StoreProductsSection />
    </div>
  );
}

export default StorePage;
