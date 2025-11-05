"use client";

import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

const Page = () => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [discounts, setDiscounts] = useState([]);

  useEffect(() => {
    const fetchOrder = async () => {
      const email = localStorage.getItem("email");
      if (!email) return setLoading(false);

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/orders/latest/name?email=${email}`,
          { cache: "no-store" }
        );

        if (!res.ok) throw new Error("Failed to fetch order");

        const data = await res.json();
        setOrder(data.order);

        // fetch discounts
        const discountRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/discounts`);
        setDiscounts(await discountRes.json());
      } catch (error) {
        console.error("Error fetching order:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, []);

  // Calculate item price after discount
  const calculateItemPrice = (item) => {
    if (!discounts || !item.product.discount_id) return item.price * item.quantity;

    const discountItem = discounts.find(
      (d) => d.id === parseInt(item.product.discount_id)
    );

    if (
      discountItem &&
      discountItem.status === 1 &&
      new Date(discountItem.startDate) <= new Date() &&
      new Date(discountItem.endDate) >= new Date()
    ) {
      if (discountItem.discountType === "percentage") {
        return item.quantity * (item.price * (1 - discountItem.discountPrice / 100));
      } else {
        return item.quantity * (item.price - discountItem.discountPrice);
      }
    }

    return item.price * item.quantity;
  };

  // Total discount for the order
  const totalDiscount = order?.items?.reduce((acc, item) => {
    const original = item.price * item.quantity;
    const discounted = calculateItemPrice(item);
    return acc + (original - discounted);
  }, 0);

  // Total price after discount
  const totalPrice = order?.items?.reduce((acc, item) => acc + calculateItemPrice(item), 0);

  if (loading)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );

  if (!order)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p>No recent order found.</p>
      </div>
    );

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center p-2">
      <div className="w-[3.5rem] h-[3.5rem] bg-[#167389] text-white flex items-center justify-center rounded-full">
        <FaCheck className="text-2xl" />
      </div>
      <h1 className="text-2xl font-semibold mt-3">Thank you for your purchase</h1>
      <p className="text-center">
        We've received your order. It will ship in 5–6 business days.
      </p>
      <p className="mt-1">
        Your order number is <span className="font-bold">#{order.id}</span>
      </p>

      <div className="w-full max-w-2xl border mt-8 bg-[#167389] p-4 rounded-md text-white">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-white/30">
              <th className="py-2">Item</th>
              <th className="py-2 text-right">Qty</th>
              <th className="py-2 text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item, index) => (
              <tr key={index} className="border-b border-white/20">
                <td className="py-2 flex items-center gap-2">
                  <img
                    src={
                      item.product?.images?.[0]
                        ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${item.product.images[0]}`
                        : "/placeholder.jpg"
                    }
                    alt={item.product_name}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <span>{item.product_name}</span>
                </td>
                <td className="py-2 text-right">{item.quantity}</td>
                <td className="py-2 text-right">
                  ৳{calculateItemPrice(item).toFixed(2)}
                </td>
              </tr>
            ))}
            <tr className="font-semibold border-t border-white/50">
              <td className="py-2">Total Discount</td>
              <td></td>
              <td className="py-2 text-right">৳{totalDiscount.toFixed(2)}</td>
            </tr>
            <tr className="font-semibold">
              <td className="py-2">Total Price</td>
              <td></td>
              <td className="py-2 text-right">৳{totalPrice.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Link
        href="/"
        className="mt-6 inline-block bg-[#167389] text-white px-6 py-2 rounded-md hover:bg-[#125d70] transition"
      >
        Back to Shop
      </Link>
    </div>
  );
};

export default Page;
