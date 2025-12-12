"use client";

import { useState, useMemo } from "react";
import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar";
import { Product } from "@/lib/data";

export default function Home() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
    alert(`${product.title} added to cart!`);
  };

  // Filter products based on category and price
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        selectedCategory === "All" || product.category === selectedCategory;
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      return categoryMatch && priceMatch;
    });
  }, [selectedCategory, priceRange]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-64 shrink-0">
          <FilterSidebar
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
          />
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Product Listing</h1>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg">No products found matching your filters.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setPriceRange([0, 1000]);
                }}
                className="mt-4 text-blue-600 hover:text-blue-700 underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
