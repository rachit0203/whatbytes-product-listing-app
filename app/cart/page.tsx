"use client";

import { useCart } from "@/context/CartContext";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const router = useRouter();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <ShoppingBag className="w-24 h-24 mx-auto text-gray-300 mb-6" />
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">
            Add some products to your cart to see them here.
          </p>
          <Link
            href="/"
            className="inline-block bg-[#1976D2] hover:bg-[#1565C0] text-white py-3 px-8 rounded-lg font-semibold transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm p-6 flex flex-col sm:flex-row gap-4"
            >
              {/* Product Image */}
              <div className="w-full sm:w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                <div className="text-gray-400 text-center">
                  <div className="text-4xl mb-1">📦</div>
                </div>
              </div>

              {/* Product Details */}
              <div className="flex-1">
                <Link href={`/product/${item.id}`}>
                  <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 mb-2">
                    {item.title}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm mb-2">{item.category}</p>
                <p className="text-xl font-bold text-gray-900">${item.price}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 rounded border border-gray-300 hover:bg-gray-100 flex items-center justify-center"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded border border-gray-300 hover:bg-gray-100 flex items-center justify-center"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-700 p-2"
                  title="Remove item"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={clearCart}
            className="text-red-600 hover:text-red-700 text-sm underline"
          >
            Clear entire cart
          </button>
        </div>

        {/* Price Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-semibold">${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="font-semibold">Free</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span className="font-semibold">${(getTotalPrice() * 0.1).toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between text-lg font-bold text-gray-900">
                  <span>Total</span>
                  <span>${(getTotalPrice() * 1.1).toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-[#1976D2] hover:bg-[#1565C0] text-white py-3 px-6 rounded-lg font-semibold transition-colors mb-3">
              Proceed to Checkout
            </button>

            <Link href="/">
              <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-6 rounded-lg font-semibold transition-colors">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
