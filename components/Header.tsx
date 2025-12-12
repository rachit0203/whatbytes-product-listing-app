"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Suspense } from "react";
import SearchBar from "./SearchBar";

export default function Header() {
  const { getTotalItems } = useCart();

  return (
    <header className="bg-[#0A3D7A] text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Logo
        </Link>

        {/* Search Bar */}
        <Suspense fallback={<div className="flex-1 max-w-md mx-8" />}>
          <SearchBar />
        </Suspense>

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
