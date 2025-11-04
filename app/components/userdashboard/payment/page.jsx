'use client';

import React from "react";

const Page = () => {
  const payments = [
    { id: 1, customer: 'John Doe', status: 'Paid', total: '$120.00', date: '2025-10-10' },
    { id: 2, customer: 'Jane Smith', status: 'Pending', total: '$80.00', date: '2025-10-08' },
    { id: 3, customer: 'Mike Johnson', status: 'Failed', total: '$45.00', date: '2025-10-05' },
    { id: 4, customer: 'Lisa Ray', status: 'Paid', total: '$200.00', date: '2025-10-01' },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Header */}
      <div className="bg-white p-4 shadow rounded flex justify-between items-center">
        <h2 className="font-semibold text-lg">Payments</h2>
        <span className="text-sm text-gray-600">12th October, 2025</span>
      </div>

      {/* Payment List Table */}
      <div className="w-full p-4 bg-white shadow rounded mt-4">
        <h3 className="text-lg font-semibold mb-4">Payment List</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-gray-700">Payment ID</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">Customer</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">Status</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">Amount</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {payments.map((payment) => (
                <tr key={payment.id} className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-800 font-medium">#{payment.id}</td>
                  <td className="px-4 py-2 text-gray-800">{payment.customer}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                        payment.status === 'Paid'
                          ? 'bg-green-100 text-green-800'
                          : payment.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-gray-800">{payment.total}</td>
                  <td className="px-4 py-2 text-gray-800">{payment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
