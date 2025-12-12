"use client";

import { categories } from "@/lib/data";

interface FilterSidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: number[];
  onPriceChange: (range: number[]) => void;
}

export default function FilterSidebar({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange,
}: FilterSidebarProps) {
  return (
    <div className="bg-[#1976D2] text-white rounded-lg p-6">
      <h2 className="text-xl font-bold mb-6">Filters</h2>

      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="font-semibold mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="w-4 h-4 accent-white"
              />
              <span className="text-sm">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h3 className="font-semibold mb-3">Price</h3>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => onPriceChange([0, parseInt(e.target.value)])}
            className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
          />
          <div className="flex justify-between text-sm">
            <span>{priceRange[0]}</span>
            <span>{priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Additional Filters Section */}
      <div className="mt-8">
        <h3 className="font-semibold mb-3">Category</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="cacyroyCategory"
              checked={selectedCategory === "All"}
              onChange={() => onCategoryChange("All")}
              className="w-4 h-4 accent-white"
            />
            <span className="text-sm">All</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="cacyroyCategory"
              checked={selectedCategory === "Electronics"}
              onChange={() => onCategoryChange("Electronics")}
              className="w-4 h-4 accent-white"
            />
            <span className="text-sm">Electronics</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="cacyroyCategory"
              checked={selectedCategory === "Clothing"}
              onChange={() => onCategoryChange("Clothing")}
              className="w-4 h-4 accent-white"
            />
            <span className="text-sm">Clothing</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="cacyroyCategory"
              checked={selectedCategory === "Home"}
              onChange={() => onCategoryChange("Home")}
              className="w-4 h-4 accent-white"
            />
            <span className="text-sm">Home</span>
          </label>
        </div>
      </div>

      {/* Price Section */}
      <div className="mt-8">
        <h3 className="font-semibold mb-3">Price</h3>
        <div className="relative">
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) => onPriceChange([0, parseInt(e.target.value) || 0])}
            className="w-full bg-white/10 border border-white/30 rounded px-3 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
            placeholder="5000"
          />
        </div>
      </div>
    </div>
  );
}
