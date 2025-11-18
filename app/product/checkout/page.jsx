"use client";
import React, { useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { useCartWishlist } from "@/app/components/global/CartWishlistContext";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  const { cartItems, clearCart } = useCartWishlist();
  const [finalAmount, setFinalAmount] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    emergency_phone: "",
    country: "",
    district: "",
    city: "",
    address: "",
    delivery_method: "",
    note: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Load final amount and email from localStorage
  useEffect(() => {
    const storedAmount = localStorage.getItem("finalAmount");
    const storedEmail = localStorage.getItem("email");
    if (storedAmount) setFinalAmount(parseFloat(storedAmount));
    if (storedEmail) setFormData((prev) => ({ ...prev, email: storedEmail }));
  }, []);

  // Update formData and email in localStorage on change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "email") {
      localStorage.setItem("email", value);
    }
  };

  // Submit order
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cartItems.length) {
      setMessage("Your cart is empty!");
      return;
    }

    const payload = {
      ...formData,
      total_amount: finalAmount,
      items: cartItems.map((item) => ({
        product_id: item.id,
        product_name: item.name,
        quantity: item.quantity,
        price: item.sale_price,
      })),
    };

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Order placed successfully!");
        localStorage.removeItem("finalAmount");
        clearCart();
        setFormData({
          name: "",
          phone: "",
          email: "",
          emergency_phone: "",
          country: "",
          district: "",
          city: "",
          address: "",
          delivery_method: "",
          note: "",
        });
        // Redirect to order confirmation page
        router.push("/product/successfully");
      } else {
        setMessage(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      setMessage("Network error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col">
      {/* Header */}
      <div className="w-full shadow bg-white p-4 rounded flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="text-base uppercase font-medium">Checkout</span>
        </div>
        <span className="text-base">
          {new Date().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>

      <div className="mt-4 flex sm:flex-row flex-col gap-4">
        {/* Form Section */}
        <div className="sm:w-5/7 w-full shadow bg-white p-4 rounded flex flex-col gap-4">
          <form className="w-full flex flex-col gap-2" onSubmit={handleSubmit}>
            {/* Name & Email */}
            <div className="w-full flex items-center gap-4">
              <div className="w-full flex flex-col">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 text-sm border border-gray-200 rounded-md outline-none"
                />
              </div>
              <div className="w-full flex flex-col">
                <span>Email *</span>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 text-sm border border-gray-200 rounded-md outline-none"
                />
              </div>
            </div>

            {/* Emergency Phone & Country */}
            <div className="w-full flex items-center gap-4">
              <div className="w-full flex flex-col">
                <span>Phone *</span>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 text-sm border border-gray-200 rounded-md outline-none"
                />
              </div>
              <div className="w-full flex flex-col">
                <span>Country *</span>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-2 text-sm border border-gray-200 rounded-md outline-none"
                />
              </div>
            </div>

            {/* District & City */}
            <div className="w-full flex items-center gap-4">
              <div className="w-full flex flex-col">
                <span>District *</span>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="w-full p-2 text-sm border border-gray-200 rounded-md outline-none"
                />
              </div>
              <div className="w-full flex flex-col">
                <span>City / Upazila *</span>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full p-2 text-sm border border-gray-200 rounded-md outline-none"
                />
              </div>
            </div>

            {/* Address & Delivery Method */}
            <div className="w-full flex items-center gap-4">
              <div className="w-full flex flex-col">
                <span>Address *</span>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-2 text-sm border border-gray-200 rounded-md outline-none"
                />
              </div>
              <div className="w-full flex flex-col">
              <span>Payment Method *</span>
              <select
                name="delivery_method"
                value={formData.delivery_method}
                onChange={handleChange}
                className="w-full p-2 text-sm border border-gray-200 rounded-md outline-none"
              >
                <option value="">Select Payment Method</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
                <option value="Online Payment">Online Payment</option>
                <option value="Other">Other</option>
              </select>
            </div>
            </div>

            {/* Note */}
            <div className="w-full flex flex-col">
              <span>Note</span>
              <textarea
                rows={5}
                name="note"
                value={formData.note}
                onChange={handleChange}
                className="w-full p-2 text-sm border border-gray-200 rounded-md outline-none"
              />
            </div>

            {/* Place Order Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full p-2 bg-[#167389] mt-3 rounded-md text-center text-white hover:bg-[#0f5566]"
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>

            {/* Message */}
            {message && (
              <span className="text-red-600 text-sm mt-2">{message}</span>
            )}
          </form>
        </div>

        {/* Checkout Summary */}
        <div className="sm:w-2/7 w-full flex flex-col">
          <div className="w-full shadow rounded bg-white p-2 flex flex-col gap-3">
            <h3 className="text-base font-medium text-center border-b border-gray-200 pb-2">
              Checkout Summary
            </h3>

            <div className="flex justify-between items-center">
              <span>Product Price</span>
              <span>৳{finalAmount}</span>
            </div>

            <div className="bg-[#E9EFF0] rounded-md p-2 flex justify-center items-center flex-col gap-2">
              <div className="w-full flex">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="w-full py-2 pl-2 bg-white rounded-l-full outline-none text-sm"
                />
                <button className="w-[3rem] bg-[#167389] text-center text-white flex justify-center items-center rounded-r-full cursor-pointer">
                  <IoMdSend />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
