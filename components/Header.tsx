"use client";

import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const { getTotalItems } = useCart();

  useEffect(() => {
    const query = searchParams.get("search") || "";
    setSearchQuery(query);
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (searchQuery) {
      params.set("search", searchQuery);
    } else {
      params.delete("search");
    }
    router.push(`/?${params.toString()}`);
  };

  return (
    <header className="bg-[#0A3D7A] text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Logo
        </Link>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
        </form>

        {/* Cart */}
        <Link href="/cart" className="flex items-center gap-2 bg-[#0A3D7A] hover:bg-[#0A3D7A]/80 px-4 py-2 rounded-lg border border-white/20 relative">
          <ShoppingCart className="w-5 h-5" />
          <span className="font-medium">Cart</span>
          {getTotalItems() > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {getTotalItems()}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
