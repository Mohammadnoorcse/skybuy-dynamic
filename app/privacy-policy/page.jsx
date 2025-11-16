"use client";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-5 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 ">

        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-6">
          This Privacy Policy explains how we collect, use, and protect your
          personal information when you visit or use our website. By accessing
          our site, you agree to the terms described in this policy.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          1. Information We Collect
        </h2>
        <p className="text-gray-600 mb-4">
          We collect personal and non-personal information to provide and
          improve our services.
        </p>
        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li>Full name, email address, phone number.</li>
          <li>Payment information (processed securely by third-party providers).</li>
          <li>Usage data such as IP address, browser type, pages visited.</li>
          <li>Cookies and tracking technologies to improve user experience.</li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li>To process orders and provide customer support.</li>
          <li>To improve our website functionality and user experience.</li>
          <li>To send notifications, updates, or promotional messages.</li>
          <li>To detect fraud and ensure website security.</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          3. Cookies & Tracking Technologies
        </h2>
        <p className="text-gray-600 mb-4">
          We use cookies to personalize your experience, analyze website
          performance, and manage login sessions. You can disable cookies from
          your browser settings, but some features may not work properly.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          4. How We Protect Your Data
        </h2>
        <p className="text-gray-600 mb-4">
          We use industry-standard security measures to protect your
          information from unauthorized access, alteration, or disclosure.
          However, no internet transmission is 100% secure.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          5. Sharing Your Information
        </h2>
        <p className="text-gray-600 mb-4">
          We do not sell or rent your information. However, we may share data
          with:
        </p>
        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li>Payment processors (e.g., SSL-secured gateways).</li>
          <li>Delivery partners to complete orders.</li>
          <li>Law enforcement if required by law.</li>
        </ul>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          6. Your Rights
        </h2>
        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li>Request access to your personal data.</li>
          <li>Request correction or deletion of information.</li>
          <li>Opt out of marketing communications.</li>
        </ul>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          7. Third-Party Services
        </h2>
        <p className="text-gray-600 mb-4">
          Our site may contain links to third-party websites. We are not
          responsible for their content or privacy policies.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          8. Updates to This Policy
        </h2>
        <p className="text-gray-600 mb-4">
          We may update this Privacy Policy from time to time. Any changes
          will be posted on this page with a revised date.
        </p>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          9. Contact Us
        </h2>
        <p className="text-gray-600">
          If you have any questions regarding this Privacy Policy, feel free
          to contact us at:
        </p>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg border">
          <p className="text-gray-700"><strong>Email:</strong> support@example.com</p>
          <p className="text-gray-700"><strong>Phone:</strong> +880 1234-567890</p>
          <p className="text-gray-700"><strong>Address:</strong> Dhaka, Bangladesh</p>
        </div>

        <p className="text-gray-500 text-sm mt-10">
          Last updated: {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
