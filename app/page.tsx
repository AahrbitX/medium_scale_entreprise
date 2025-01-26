import React from "react";

import HeroSection from "./components/Hero";
import AboutSection from "./components/About";
import BrandSection from "./components/Brand";
import ProductsSection from "./components/products";
import TestimonialsSection from "./components/Testimonials";
import ContactsSection from "./components/Contact";

function IndexPage() {
  return (
    <div className="mt-24 min-h-screen">
      <HeroSection />
      <AboutSection />
      <BrandSection />
      <ProductsSection />
      <TestimonialsSection />
      <ContactsSection />
    </div>
  );
}

export default IndexPage;
