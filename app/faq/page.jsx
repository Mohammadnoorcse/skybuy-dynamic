"use client";
import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaHeadset } from "react-icons/fa";
import { MdLocalShipping, MdPayment, MdReplay } from "react-icons/md";

const faqs = [
  {
    category: "Orders & Shipping",
    icon: <MdLocalShipping className="text-indigo-600 text-2xl" />,
    qa: [
      {
        question: "How can I track my order?",
        answer:
          "Once your order is shipped, you will receive a tracking ID via email or SMS. Use that ID on the courier’s website to track your shipment in real-time.",
      },
      {
        question: "How long does delivery take?",
        answer:
          "Standard delivery takes 2-5 business days depending on your location. Remote areas may take longer.",
      },
      {
        question: "Do you offer international shipping?",
        answer:
          "Currently, we deliver only within Bangladesh. International delivery will be available soon.",
      },
    ],
  },

  {
    category: "Payments",
    icon: <MdPayment className="text-green-600 text-2xl" />,
    qa: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept Visa, Mastercard, bKash, Nagad, Rocket, and Cash on Delivery at selected locations.",
      },
      {
        question: "Is my payment information secure?",
        answer:
          "Yes, all transactions are processed through SSL-secured gateways. We never store your card details.",
      },
    ],
  },

  {
    category: "Returns & Refunds",
    icon: <MdReplay className="text-red-600 text-2xl" />,
    qa: [
      {
        question: "How can I return a product?",
        answer:
          "You can request a return within 30 days of purchase. Make sure the product is unused and in original packaging.",
      },
      {
        question: "How long does a refund take?",
        answer:
          "Refunds are processed within 3–7 business days after the returned item is inspected and approved.",
      },
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-5 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 ">

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 text-center mb-10">
          Find answers to the most common questions below.
        </p>

        {/* FAQ Categories */}
        {faqs.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-12">
            
            {/* Category Title */}
            <div className="flex items-center gap-3 mb-5">
              {section.icon}
              <h2 className="text-2xl font-semibold text-gray-800">
                {section.category}
              </h2>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {section.qa.map((item, index) => {
                const globalIndex = `${sectionIndex}-${index}`;
                return (
                  <div key={globalIndex} className="border rounded-lg shadow-sm bg-white">
                    <button
                      onClick={() => toggleFAQ(globalIndex)}
                      className="w-full flex justify-between items-center p-5 text-left"
                    >
                      <span className="text-lg font-medium text-gray-800">
                        {item.question}
                      </span>

                      {openIndex === globalIndex ? (
                        <FiMinus className="text-2xl text-gray-500" />
                      ) : (
                        <FiPlus className="text-2xl text-gray-500" />
                      )}
                    </button>

                    {openIndex === globalIndex && (
                      <div className="px-5 pb-5 text-gray-600 border-t animate-fadeIn">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Support Box */}
        <div className="mt-10 text-center">
          <div className="flex justify-center">
            <FaHeadset className="text-5xl text-indigo-600 mb-3" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Still need help?
          </h2>
          <p className="text-gray-600 mb-4">
            Our support team is available 24/7 to assist you with anything.
          </p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 duration-200"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
