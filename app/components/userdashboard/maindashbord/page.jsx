import React from 'react'
import { FaRegClock } from "react-icons/fa";
import { VscServerProcess } from "react-icons/vsc";
import { FiCheckSquare } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";

const page = () => {
  return (
    <div className='w-full  flex flex-col'>
      <div className='bg-white p-2 py-3 shadow rounded flex justify-between items-center'>
        <h2 className='font-semibold'>Dashboard</h2>
        <span className='font-semibold'>12th October, 2025</span>

      </div>

      <div className='w-full flex md:flex-row flex-col gap-2 mt-2'>
        <div className='md:w-1/2 w-full p-4 bg-white shadow rounded'>
          <h2>Order Statistics</h2>

          <div className='my-4 grid grid-cols-4 gap-1'>
            <div className='w-full bg-[#DBDFEA] flex justify-center items-center flex-col gap-2 p-2 py-4 rounded-md'>
              <span className='text-3xl text-[#167389]'><FaRegClock /></span>
              <h2 className='text-base font-bold'>0</h2>
              <span>Pending</span>

            </div>
            <div className='w-full bg-[#DBDFEA] flex justify-center items-center flex-col gap-2 p-2 py-4 rounded-md'>
              <span className='text-3xl text-[#F29648]'><VscServerProcess /></span>
              <h2 className='text-base font-bold'>0</h2>
              <span>Processing</span>

            </div>
            <div className='w-full bg-[#DBDFEA] flex justify-center items-center flex-col gap-2 p-2 py-4 rounded-md'>
              <span className='text-3xl text-[#19CC61]'><FiCheckSquare /> </span>
              <h2 className='text-base font-bold'>0</h2>
              <span>Completed</span>

            </div>
            <div className='w-full bg-[#DBDFEA] flex justify-center items-center flex-col gap-2 p-2 py-4 rounded-md'>
              <span className='text-3xl text-[#F94851]'><RxCrossCircled /></span>
              <h2 className='text-base font-bold'>0</h2>
              <span>Pending</span>

            </div>

          </div>

        </div>

        <div className='md:w-1/2 w-full p-4 bg-white shadow rounded'>

        </div>

      </div>
      
    </div>
  )
}

export default page
