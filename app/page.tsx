"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar";
import { Product } from "@/lib/data";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  // Initialize filters from URL
  useEffect(() => {
    const category = searchParams.get("category") || "All";
    const minPrice = parseInt(searchParams.get("minPrice") || "0");
    const maxPrice = parseInt(searchParams.get("maxPrice") || "1000");
    
    setSelectedCategory(category);
    setPriceRange([minPrice, maxPrice]);
  }, [searchParams]);

  // Update URL when filters change
  const updateURL = (category: string, price: number[]) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (category !== "All") {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    
    if (price[0] !== 0 || price[1] !== 1000) {
      params.set("minPrice", price[0].toString());
      params.set("maxPrice", price[1].toString());
    } else {
      params.delete("minPrice");
      params.delete("maxPrice");
    }
    
    router.push(`/?${params.toString()}`, { scroll: false });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    updateURL(category, priceRange);
  };

  const handlePriceChange = (price: number[]) => {
    setPriceRange(price);
    updateURL(selectedCategory, price);
  };

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
    alert(`${product.title} added to cart!`);
  };

  // Filter products based on category, price, and search
  const filteredProducts = useMemo(() => {
    const searchQuery = searchParams.get("search")?.toLowerCase() || "";
    
    return products.filter((product) => {
      const categoryMatch =
        selectedCategory === "All" || product.category === selectedCategory;
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      const searchMatch = 
        !searchQuery || 
        product.title.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery) ||
        product.category.toLowerCase().includes(searchQuery);
      
      return categoryMatch && priceMatch && searchMatch;
    });
  }, [selectedCategory, priceRange, searchParams]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-64 shrink-0">
          <FilterSidebar
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            priceRange={priceRange}
            onPriceChange={handlePriceChange}
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
                  router.push("/");
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
