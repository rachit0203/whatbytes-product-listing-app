"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { products } from "@/lib/data";
import { useCart } from "@/context/CartContext";
import { Star, ArrowLeft } from "lucide-react";

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === parseInt(params.id as string));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <button
          onClick={() => router.push("/")}
          className="text-blue-600 hover:text-blue-700 underline"
        >
          Return to home
        </button>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star
          key="half"
          className="w-5 h-5 fill-yellow-400 text-yellow-400"
          style={{ clipPath: "inset(0 50% 0 0)" }}
        />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />);
    }

    return stars;
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    alert(`${quantity} x ${product.title} added to cart!`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Image Section */}
          <div className="bg-gray-100 rounded-lg flex items-center justify-center p-12">
            <div className="text-gray-400 text-center">
              <div className="text-8xl mb-4">📦</div>
              <div className="text-lg font-medium">{product.title}</div>
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product.title}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              {renderStars(product.rating)}
              <span className="text-sm text-gray-600">({product.rating})</span>
            </div>

            <p className="text-4xl font-bold text-gray-900 mb-4">
              ${product.price}
            </p>

            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-semibold">Category:</span> {product.category}
              </p>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg border border-gray-300 hover:bg-gray-100 flex items-center justify-center font-semibold cursor-pointer"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-20 h-10 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg border border-gray-300 hover:bg-gray-100 flex items-center justify-center font-semibold cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-[#1976D2] hover:bg-[#1565C0] text-white py-3 px-8 rounded-lg text-lg font-semibold transition-colors cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Optional Reviews Section */}
        <div className="border-t border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Reviews</h2>
          <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
        </div>
      </div>
    </div>
  );
}
