"use client";

import React from "react";
import { useState, useEffect } from 'react';
const page = () => {
  const [statusFilter, setStatusFilter] = useState('all');

    const orders = [
    { id: 1, customer: 'John Doe', status: 'Shipped', total: '$120.00', date: '2025-10-10' },
    { id: 2, customer: 'Jane Smith', status: 'Processing', total: '$80.00', date: '2025-10-08' },
    { id: 3, customer: 'Mike Johnson', status: 'Pending', total: '$45.00', date: '2025-10-05' },
    { id: 4, customer: 'Lisa Ray', status: 'Completed', total: '$200.00', date: '2025-10-01' },
  ];

  return (
    <div className="w-full  flex flex-col">
      <div className="bg-white p-2 py-3 shadow rounded flex justify-between items-center">
        <h2 className="font-semibold">Orders</h2>
        <span className="font-semibold">12th October, 2025</span>
      </div>

      <div className="w-full p-4 bg-white shadow rounded mt-2 flex flex-col gap-4">

        <div className="w-full flex gap-4 justify-between items-center">

          <select name="status" id="status" className="lg:w-2/6 w-1/2 h-[35px] px-4 py-1 border border-[#ddd] rounded text-sm font-medium outline-none" value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="complete">Complete</option>
            <option value="canceled">Canceled</option>
          </select>

          <div className="lg:w-2/6 w-1/2">

           <form action="" className="w-full h-[35px] flex items-center">
              <input type="text" placeholder="Order ID" className="w-[80%] text-sm font-medium h-full px-4 py-1 border border-[#ddd] outline-none rounded-l-md"/>
              <button className="w-[20%] h-full bg-[#167389] py-1 text-sm rounded-r-md text-white cursor-pointer">Search</button>

           </form>

          </div>

        </div>

        <div className="mt-4">
        <h2 className="text-xl font-semibold mb-4">Order List</h2>

        <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Order ID</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Customer</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Total</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map(order => (
              <tr key={order.id} className="bg-white hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-800">#{order.id}</td>
                <td className="px-4 py-2 text-sm text-gray-800">{order.customer}</td>
                <td className="px-4 py-2 text-sm">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                      order.status === 'Shipped'
                        ? 'bg-blue-100 text-blue-800'
                        : order.status === 'Processing'
                        ? 'bg-yellow-100 text-yellow-800'
                        : order.status === 'Pending'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-gray-800">{order.total}</td>
                <td className="px-4 py-2 text-sm text-gray-800">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      </div>

      </div>

      
    </div>
  );
};

export default page;
