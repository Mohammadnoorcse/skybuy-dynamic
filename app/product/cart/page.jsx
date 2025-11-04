'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";
import Link from "next/link";
import { useCartWishlist } from "@/app/components/global/CartWishlistContext";

const Page = () => {
  const { cartItems, removeFromCart, updateCartQuantity } = useCartWishlist();
  const [editingItem, setEditingItem] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleIncrease = () => {
    setEditingItem((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };

  const handleDecrease = () => {
    setEditingItem((prev) => ({ ...prev, quantity: prev.quantity > 1 ? prev.quantity - 1 : 1 }));
  };

  const handleSave = () => {
    updateCartQuantity(editingItem.id, editingItem.quantity);
    setEditingItem(null);
  };

  const total = cartItems.reduce((sum, i) => sum + i.quantity * i.price, 0);

  if (!mounted) return null; // Render nothing until client

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
        {/* Left section */}
        <div className="sm:w-5/7 w-full flex flex-col gap-[1rem]">
          {cartItems.map((item) => (
            <div key={item.id} className="w-full flex flex-col gap-4 shadow p-4 bg-white rounded relative">
              {/* Top section */}
              <div className="flex gap-4 items-center justify-between border-b border-gray-200 pb-[1rem]">
                <div className="flex gap-4">
                  <Image src={item.image} alt={item.name} width={70} height={70} className="rounded-md" />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Order ID: {item.orderId || "#NEW"}</span>
                    <span className="text-sm">{item.name}</span>
                  </div>
                </div>
                <RiDeleteBinLine onClick={() => removeFromCart(item.id)} className="text-red-700 text-4xl cursor-pointer hover:text-red-800 transition" />
              </div>

              {/* Product details */}
              <div className="w-full flex items-center justify-between relative">
                <div className="flex gap-1">
                  <Image src={item.image} alt={item.name} width={40} height={40} className="rounded-md" />
                  <div className="flex flex-col">
                    <span className="text-[12px]">Color: {item.color}</span>
                    <span className="text-[12px]">Size: {item.size}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[12px]">{item.quantity} x ৳{item.price}</span>
                </div>

                <div className="flex gap-2 items-center">
                  <span className="text-sm font-semibold">৳{item.quantity * item.price}</span>
                  <span onClick={() => setEditingItem(item)} className="text-[12px] p-1 rounded-md bg-[#167389] text-white cursor-pointer hover:bg-[#0f5566]">Edit</span>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-200 flex justify-between items-center">
                <span className="font-medium">Items</span>
                <span className="text-sm">{item.quantity} items</span>
                <span>৳{item.quantity * item.price}</span>
              </div>

              {/* Inline edit modal */}
              {editingItem && editingItem.id === item.id && (
                <div className="absolute top-[60%] right-[2%] z-50 p-3 bg-white shadow-md rounded-md border border-gray-200 w-[180px]">
                  <div className="w-full h-[2rem] border border-[#156C80] rounded-full flex justify-between items-center mb-2">
                    <span onClick={handleDecrease} className="w-[2rem] h-full bg-[#156C80] rounded-full text-center text-white cursor-pointer flex justify-center items-center">−</span>
                    <span>{editingItem.quantity}</span>
                    <span onClick={handleIncrease} className="w-[2rem] h-full bg-[#156C80] rounded-full text-center text-white cursor-pointer flex justify-center items-center">+</span>
                  </div>
                  <button onClick={handleSave} className="w-full bg-[#167389] text-white py-1 rounded text-sm hover:bg-[#0f5566]">Save</button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Summary */}
        <div className="sm:w-2/7 w-full flex flex-col">
          <div className="w-full shadow rounded bg-white p-2 flex flex-col gap-3">
            <h3 className="text-base font-medium text-center border-b border-gray-200 pb-2">Cart Summary</h3>
            <div className="flex justify-between items-center">
              <span>Product Price</span>
              <span>৳{total}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Pay Now (70%)</span>
              <span>৳{Math.round(total * 0.7)}</span>
            </div>
            <div className="bg-[#E9EFF0] rounded-md p-2 flex justify-center items-center flex-col gap-2">
              <span className="font-bold">Pay after delivery</span>
              <p className="text-sm">৳ {Math.round(total * 0.3)} + Shipping & Courier Charges</p>
            </div>
          </div>
          <Link href="/product/checkout" className="w-full p-2 bg-[#167389] mt-3 rounded-md text-center text-white hover:bg-[#0f5566]">Go To Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
