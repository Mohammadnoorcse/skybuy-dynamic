"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product, discount = [] }) => {
  // ✅ Find matching discount
  const discountItem = product?.discount_id
    ? discount.find((d) => d.id === parseInt(product.discount_id))
    : null;

  // ✅ Check if discount is currently active
  const isDiscountActive = discountItem && discountItem.status == 1 && new Date(discountItem.startDate) <= new Date() &&
    new Date(discountItem.endDate) >= new Date();


  return (
    <Link
      href={`product/${product?.id}`}
      className="w-full flex flex-col gap-3 relative"
    >
      <Image
        src={
          product.images?.[0]
            ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${product.images[0]}`
            : "/assets/bag/bag-1.jpg"
        }
        alt={product.name || "Product"}
        width={700}
        height={500}
        className="rounded-md"
      />

      {/* ✅ Discount Tag (Active Only) */}
      {isDiscountActive && (
        <div className="absolute top-0 left-0 bg-[#167389] text-white text-xs font-semibold px-2 py-1 rounded-tl-md rounded-br-md">
          {discountItem.discountPrice}
          {discountItem.discountType === "percentage" ? "%" : "৳"} OFF
        </div>
      )}

      <span className="text-sm font-medium truncate">
        {product.name || "Product Name"}
      </span>

      <div className="w-full flex justify-between items-center">
        <span className="text-sm font-bold text-red-600">
          {product.sale_price ? `৳ ${product.sale_price}` : "৳ 0"}
        </span>
        <span className="text-[11px] font-medium text-[#5f5f5f]">
          SOLD: {product.sold || 0}
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
