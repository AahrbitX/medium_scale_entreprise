import React from "react";
import StoreHeroSection from "./Hero";
import StoreProductsSection from "./products";

function StorePage() {
  return (
    <div className="mt-24 min-h-screen">
      <StoreHeroSection />
      <StoreProductsSection />
    </div>
  );
}

export default StorePage;
