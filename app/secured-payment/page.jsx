"use client";
import React from "react";
import { FaLock, FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

export default function SecuredPayment() {
  return (
    <div className="min-h-screen bg-gray-50 py-5 px-6">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-2xl text-center">

        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Secured Payment
        </h1>
        <p className="text-gray-600 mb-8">
          We prioritize your security and privacy. All payments on our website are
          100% safe and encrypted.
        </p>

        {/* Security Feature */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-12">
          <div className="flex flex-col items-center">
            <FaLock className="text-6xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">SSL Encryption</h3>
            <p className="text-gray-600 mt-2 max-w-xs">
              All your sensitive information is transmitted securely with SSL encryption.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaLock className="text-6xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Safe Transactions</h3>
            <p className="text-gray-600 mt-2 max-w-xs">
              Our payment gateways follow the latest industry standards for secure transactions.
            </p>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            We Accept
          </h2>
          <div className="flex justify-center items-center gap-10 text-5xl text-gray-700">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcPaypal />
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10 text-left">
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">1. Choose Payment</h3>
            <p className="text-gray-600">
              Select your preferred payment method during checkout.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">2. Secure Checkout</h3>
            <p className="text-gray-600">
              Enter your payment details in our secure and encrypted payment gateway.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">3. Confirmation</h3>
            <p className="text-gray-600">
              Once payment is successful, you will receive an order confirmation instantly.
            </p>
          </div>
        </div>

        {/* Contact for Payment Issues */}
        <div className="mt-12 p-6 bg-indigo-50 rounded-xl border-l-4 border-indigo-600 text-left">
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">Need Help?</h3>
          <p className="text-gray-700">
            If you face any issues during payment, contact our support team:
          </p>
          <p className="text-gray-700 mt-2"><strong>Email:</strong> support@example.com</p>
          <p className="text-gray-700"><strong>Phone:</strong> +880 1234-567890</p>
        </div>

        <p className="text-gray-500 text-sm mt-10 text-center">
          © {new Date().getFullYear()} YourCompanyName. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
