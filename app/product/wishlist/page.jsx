"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useCartWishlist } from "@/app/components/global/CartWishlistContext";

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist, addToCart } = useCartWishlist();
  const [mounted, setMounted] = useState(false);

  // Ensure rendering happens only on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Fixed Add to Cart handler
  const handleAddToCart = (item) => {
    addToCart({ ...item, quantity: item.quantity || 1 });
    removeFromWishlist(item.id || item._id);
  };

  if (!mounted) return null;

  if (!wishlistItems || wishlistItems.length === 0) {
    return (
      <div className="w-full flex justify-center items-center p-10">
        <p className="text-gray-500 text-lg">Your wishlist is empty.</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Header */}
      <div className="w-full shadow bg-white p-4 rounded flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#167389] text-white flex justify-center items-center">
            1
          </div>
          <span className="text-base uppercase font-medium">Wishlist</span>
        </div>
        <span className="text-base">
          {new Date().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>

      {/* Wishlist Items */}
      <div className="w-full shadow bg-white p-4 rounded flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Items</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlistItems.map((item) => (
            <div
              key={item?.id || item?._id}
              className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition"
            >
              {/* Image */}
              <div className="w-full h-[150px] relative mb-3">
                <Image
                  src={
                    item?.images?.[0]
                      ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${item.images[0]}`
                      : "/placeholder.png"
                  }
                  alt={item.name || "Product Image"}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded"
                />
              </div>

              {/* Product Info */}
              <div className="flex justify-between items-center mb-2 font-medium">
                {item?.name?.length > 50
                  ? item.name.slice(0, 50) + "..."
                  : item?.name || "Unnamed Product"}
              </div>

              <div className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Price:</span> {item?.sale_price || "-"}
              </div>

              <div className="text-sm text-gray-600 mb-3">
                <span className="font-medium">Quantity:</span> {item?.quantity || 1}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => removeFromWishlist(item.id || item._id)}
                  className="text-sm text-red-600 hover:underline cursor-pointer"
                >
                  Remove
                </button>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="text-sm text-[#167389] hover:underline cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
