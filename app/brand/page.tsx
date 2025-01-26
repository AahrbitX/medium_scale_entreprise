import React from "react";
import BrandHeroSection from "./components/Hero";
import BrandAboutSection from "./components/About";
import BrandProductsSection from "./components/products";
import BrandReviewsSection from "./components/Reviews";

function BrandPage() {
  return (
    <div className="mt-24 min-h-screen">
      <BrandHeroSection />
      <BrandAboutSection />
      <BrandProductsSection />
      <BrandReviewsSection />
    </div>
  );
}

export default BrandPage;
