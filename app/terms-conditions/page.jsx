"use client";
import React from "react";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-5 px-6">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-2xl leading-relaxed">

        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 mb-6">
          Welcome to our website. By accessing or using our website, you agree to comply with
          and be bound by the following terms and conditions. Please read them carefully.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">1. Acceptance of Terms</h2>
        <p className="text-gray-600 mb-4">
          By using this website, you agree to these Terms & Conditions and our Privacy Policy.
          If you do not agree, please do not use our website.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">2. Use of Website</h2>
        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li>You may use the website for lawful purposes only.</li>
          <li>You may not use the website to post or transmit harmful, illegal, or unauthorized content.</li>
          <li>Unauthorized access to our systems or data is strictly prohibited.</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">3. Intellectual Property</h2>
        <p className="text-gray-600 mb-4">
          All content, graphics, logos, images, and text on this website are the property of our company
          or our content providers. You may not use, copy, or reproduce any materials without our written consent.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">4. Product or Service Information</h2>
        <p className="text-gray-600 mb-4">
          We make every effort to ensure that product descriptions and pricing are accurate. However,
          we do not guarantee that the website content is free from errors, and we reserve the right
          to correct any inaccuracies or update information without prior notice.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">5. User Accounts</h2>
        <p className="text-gray-600 mb-4">
          If you create an account, you are responsible for maintaining the confidentiality of your login credentials.
          You are responsible for all activities that occur under your account.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">6. Limitation of Liability</h2>
        <p className="text-gray-600 mb-4">
          We are not liable for any damages, losses, or expenses arising from the use or inability
          to use the website, including indirect, incidental, or consequential damages.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">7. Changes to Terms</h2>
        <p className="text-gray-600 mb-4">
          We reserve the right to modify these Terms & Conditions at any time. Any changes will
          be effective immediately upon posting on the website. Your continued use constitutes acceptance of the new terms.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">8. Governing Law</h2>
        <p className="text-gray-600 mb-4">
          These Terms & Conditions are governed by the laws of Bangladesh. Any disputes arising
          from these terms shall be resolved in the courts of Bangladesh.
        </p>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">9. Contact Information</h2>
        <p className="text-gray-600 mb-4">
          If you have any questions or concerns regarding these Terms & Conditions, please contact us:
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
