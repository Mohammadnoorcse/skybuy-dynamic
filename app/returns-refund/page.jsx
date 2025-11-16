"use client";
import React from "react";

export default function ReturnsRefund() {
  return (
    <div className="min-h-screen bg-gray-50 py-5 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl  leading-relaxed">

        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Returns & Refund Policy
        </h1>

        <p className="text-gray-600 mb-6">
          We value your satisfaction. If you are not completely satisfied with your purchase,
          please read our returns and refund policy below.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          1. Returns
        </h2>
        <p className="text-gray-600 mb-4">
          You may return most items within <strong>30 days of delivery</strong> for a full refund or exchange.
          Items must be in their original condition, unused, and in the original packaging.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          2. Non-Returnable Items
        </h2>
        <p className="text-gray-600 mb-4">
          Certain products cannot be returned due to hygiene or safety reasons, including:
        </p>
        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li>Personal care items</li>
          <li>Customized or personalized products</li>
          <li>Gift cards or downloadable products</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          3. Refunds
        </h2>
        <p className="text-gray-600 mb-4">
          Once your return is received and inspected, we will notify you of the approval status of your refund.
          Approved refunds will be processed to your original payment method within <strong>7-10 business days</strong>.
        </p>

        <p className="text-gray-600 mb-4">
          Shipping costs are non-refundable unless the return is due to our error (e.g., defective product, wrong item).
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          4. Exchanges
        </h2>
        <p className="text-gray-600 mb-4">
          If you need to exchange an item for the same item, please contact us within 30 days of delivery.
          Exchanges are subject to product availability.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          5. Damaged or Defective Products
        </h2>
        <p className="text-gray-600 mb-4">
          If you receive a damaged or defective item, please contact us immediately.
          We will arrange for a replacement or refund at no additional cost.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          6. Contact Us
        </h2>
        <p className="text-gray-600 mb-4">
          For any questions regarding returns, refunds, or exchanges, contact us at:
        </p>
        <div className="mt-4 p-4 bg-gray-100 rounded-lg border">
          <p className="text-gray-700"><strong>Email:</strong> support@example.com</p>
          <p className="text-gray-700"><strong>Phone:</strong> +880 1234-567890</p>
          <p className="text-gray-700"><strong>Address:</strong> Banani, Dhaka, Bangladesh</p>
        </div>

        <p className="text-gray-500 text-sm mt-10">
          Last updated: {new Date().getFullYear()}
        </p>

      </div>
    </div>
  );
}
