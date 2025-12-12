"use client";

import { useState } from "react";
import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/lib/data";

export default function Home() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar - will be implemented in next step */}
        <aside className="lg:w-64 shrink-0">
          <div className="bg-[#1976D2] text-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-6">Filters</h2>
            {/* Placeholder for filters */}
            <p className="text-sm text-white/80">Filters coming soon...</p>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Product Listing</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
