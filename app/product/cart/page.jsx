'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";
import Link from "next/link";
import { useCartWishlist } from "@/app/components/global/CartWishlistContext";
import { getAllProductsAndSections } from "@/app/lib/api";

const Page = () => {
  const { cartItems, removeFromCart, updateCartQuantity } = useCartWishlist();
  const [editingItem, setEditingItem] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [discount, setDiscount] = useState([]);

  // Load discounts
  useEffect(() => {
    setMounted(true);
    const loadData = async () => {
      const { allDiscount } = await getAllProductsAndSections();
      setDiscount(allDiscount || []);
    };
    loadData();
  }, []);

  // Quantity handlers
  const handleIncrease = () =>
    setEditingItem((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  const handleDecrease = () =>
    setEditingItem((prev) => ({
      ...prev,
      quantity: prev.quantity > 1 ? prev.quantity - 1 : 1,
    }));
  const handleSave = () => {
    updateCartQuantity(editingItem.id, editingItem.quantity);
    setEditingItem(null);
  };

  // Calculate discount for an item
  const calculateItemDiscount = (item) => {
    if (!discount || !item.discount_id) return 0;

    const discountItem = discount.find(
      (d) => d.id === parseInt(item.discount_id)
    );

    if (
      discountItem &&
      discountItem.status === 1 &&
      new Date(discountItem.startDate) <= new Date() &&
      new Date(discountItem.endDate) >= new Date()
    ) {
      if (discountItem.discountType === "percentage") {
        return item.quantity * (item.sale_price * (discountItem.discountPrice / 100));
      } else {
        return item.quantity * discountItem.discountPrice;
      }
    }
    return 0;
  };

  // Totals
  const totalDiscount = cartItems.reduce(
    (sum, item) => sum + calculateItemDiscount(item),
    0
  );
  const total = cartItems.reduce(
    (sum, i) => sum + i.quantity * i.sale_price,
    0
  );
  const finalTotal = total - totalDiscount;

  // Save final total to localStorage dynamically
  useEffect(() => {
    localStorage.setItem("finalAmount", finalTotal);
  }, [finalTotal]);

  if (!mounted) return null;

  return (
    <div className="w-full flex flex-col">
      {/* Header */}
      <div className="w-full shadow bg-white p-4 rounded flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div className="w-[2rem] h-[2rem] rounded-full bg-[#167389] text-white flex justify-center items-center">
            1
          </div>
          <span className="text-base uppercase font-medium">Cart</span>
        </div>
        <span className="text-base">
          {new Date().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>

      {/* Main Layout */}
      <div className="mt-4 flex sm:flex-row flex-col gap-4 relative">
        {/* Left section: Cart items */}
        <div className="sm:w-5/7 w-full flex flex-col gap-4">
          {cartItems.map((item) => {
            const itemDiscount = calculateItemDiscount(item);
            const itemTotal = item.quantity * item.sale_price - itemDiscount;

            return (
              <div
                key={item.id}
                className="w-full flex flex-col gap-4 shadow p-4 bg-white rounded relative"
              >
                {/* Top section */}
                <div className="flex gap-4 items-center justify-between border-b border-gray-200 pb-[1rem]">
                  <div className="flex gap-4">
                    <Image
                      src={
                        item.images?.[0]
                          ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${item.images[0]}`
                          : "/assets/bag/bag-1.jpg"
                      }
                      alt={item.name}
                      width={70}
                      height={70}
                      className="rounded-md"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">
                        SKU ID: {item.sku || "#NEW"}
                      </span>
                      <span className="text-sm">{item.name}</span>
                    </div>
                  </div>
                  <RiDeleteBinLine
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-700 text-4xl cursor-pointer hover:text-red-800 transition"
                  />
                </div>

                {/* Product details */}
                <div className="w-full flex items-center justify-between relative">
                  <div className="flex gap-1">
                    <Image
                      src={
                        item.images?.[0]
                          ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${item.images[0]}`
                          : "/assets/bag/bag-1.jpg"
                      }
                      alt={item.name}
                      width={40}
                      height={40}
                      className="rounded-md"
                    />
                    <div className="flex flex-col text-[12px]">
                      <span>Color: {item.selectedColor}</span>
                      <span>Size: {item.selectedSize}</span>
                    </div>
                  </div>

                  <div>
                    <span>{item.quantity} x ৳{item.sale_price}</span>
                  </div>

                  <div className="flex gap-2 items-center">
                    <span className="text-sm font-semibold">৳{itemTotal}</span>
                    <span
                      onClick={() => setEditingItem(item)}
                      className="text-[12px] p-1 rounded-md bg-[#167389] text-white cursor-pointer hover:bg-[#0f5566]"
                    >
                      Edit
                    </span>
                  </div>
                </div>

                {/* Inline edit modal */}
                {editingItem && editingItem.id === item.id && (
                  <div className="absolute top-[60%] right-[2%] z-50 p-3 bg-white shadow-md rounded-md border border-gray-200 w-[180px]">
                    <div className="w-full h-[2rem] border border-[#156C80] rounded-full flex justify-between items-center mb-2">
                      <span
                        onClick={handleDecrease}
                        className="w-[2rem] h-full bg-[#156C80] rounded-full text-center text-white cursor-pointer flex justify-center items-center"
                      >
                        −
                      </span>
                      <span>{editingItem.quantity}</span>
                      <span
                        onClick={handleIncrease}
                        className="w-[2rem] h-full bg-[#156C80] rounded-full text-center text-white cursor-pointer flex justify-center items-center"
                      >
                        +
                      </span>
                    </div>
                    <button
                      onClick={handleSave}
                      className="w-full bg-[#167389] text-white py-1 rounded text-sm hover:bg-[#0f5566]"
                    >
                      Save
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right section: Cart summary */}
        <div className="sm:w-2/7 w-full flex flex-col">
          <div className="w-full shadow rounded bg-white p-4 flex flex-col gap-3">
            <h3 className="text-base font-medium text-center border-b border-gray-200 pb-2">
              Cart Summary
            </h3>
            <div className="flex justify-between items-center">
              <span>Total Price</span>
              <span>৳{total}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Total Discount</span>
              <span>৳{totalDiscount}</span>
            </div>
            <div className="flex justify-between items-center font-semibold">
              <span>Final Total</span>
              <span>৳{finalTotal}</span>
            </div>
            <div className="bg-[#E9EFF0] rounded-md p-2 flex justify-center items-center flex-col gap-2">
              <span className="font-bold">Pay after delivery</span>
              <p className="text-sm">
                ৳ {Math.round(finalTotal * 0.3)} + Shipping & Courier Charges
              </p>
            </div>
          </div>
          <Link
            href="/product/checkout"
            className="w-full p-2 bg-[#167389] mt-3 rounded-md text-center text-white hover:bg-[#0f5566]"
          >
            Go To Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
