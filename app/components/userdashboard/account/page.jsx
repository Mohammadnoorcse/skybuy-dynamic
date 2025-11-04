

import React from "react";
import Image from 'next/image';

const Page = () => {


  return (
    <div className="w-full flex flex-col">
      {/* Header */}
      <div className="bg-white p-4 shadow rounded flex justify-between items-center">
        <h2 className="font-semibold text-lg">Account</h2>
        <button className="text-sm bg-[#C4161C] p-2 rounded-md text-white cursor-pointer">Delete Account</button>
      </div>

      {/* Payment List Table */}
      <div className="w-full p-4 bg-white shadow rounded mt-4">

        <form action="" className="flex flex-col gap-3">
          <div className="w-[130px] h-[130px] mb-3 rounded-full">
            <img className="w-full h-full rounded-full" src="data:image/jpeg;base64,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" alt="" />
          </div>

          <div className="flex items-center gap-4">
            
            <div className="w-1/2 flex flex-col gap-1">
              <span className="text-sm">Name</span>
              <input type="text" className="py-1 px-2 border border-[#ddd] text-sm rounded-[4px] outline-[#167389]"/>

            </div>
            <div className="w-1/2 flex flex-col gap-1">
              <span className="text-sm">Number/Contact</span>
              <input type="text" className="py-1 px-2 border border-[#ddd] text-sm rounded-[4px] outline-[#167389]"/>

            </div>

          </div>
          <div className="flex items-center gap-4">
            
            <div className="w-1/2 flex flex-col gap-1">
              <span className="text-sm">District</span>
              <input type="text" className="py-1 px-2 border border-[#ddd] text-sm rounded-[4px] outline-[#167389]"/>

            </div>
            <div className="w-1/2 flex flex-col gap-1">
              <span className="text-sm">City</span>
              <input type="text" className="py-1 px-2 border border-[#ddd] text-sm rounded-[4px] outline-[#167389]"/>

            </div>

          </div>

          <div className="flex flex-col gap-1">
              <span className="text-sm">Address</span>
              <textarea rows={5} type="text" className="py-1 px-2 border border-[#ddd] text-sm rounded-[4px] outline-[#167389]"/>
          </div>

          


          

        </form>
        

       
      </div>
    </div>
  );
};

export default Page;
