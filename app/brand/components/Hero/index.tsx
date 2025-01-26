import React from "react";

function BrandHeroSection() {
  return (
    <div className="w-full test-section py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Brand Story
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our unique brand identity and products. We take pride in
            creating high-quality items that reflect our commitment to
            excellence and innovation. Each product is carefully crafted to meet
            the highest standards while staying true to our brand values.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity">
            Explore Our Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default BrandHeroSection;
