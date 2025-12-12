"use client";

import { Product } from "@/lib/data";
import { Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" style={{ clipPath: "inset(0 50% 0 0)" }} />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <Link href={`/product/${product.id}`}>
        <div className="relative h-48 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-400 text-center">
            <div className="text-4xl mb-2">📦</div>
            <div className="text-sm">{product.title}</div>
          </div>
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-800 mb-2 hover:text-blue-600">
            {product.title}
          </h3>
        </Link>
        <div className="flex items-center gap-1 mb-2">
          {renderStars(product.rating)}
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-gray-900">${product.price}</p>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-[#1976D2] hover:bg-[#1565C0] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
