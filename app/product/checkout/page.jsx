import React from 'react'
import Image from 'next/image'
import { IoMdSend } from "react-icons/io";
import Link from 'next/link'

const page = () => {
  return (
    <div className='w-full flex flex-col'>

        <div className='w-full shadow bg-white p-4 rounded flex items-center justify-between'>
            <div className='flex items-center gap-1'>
                
                <span className='text-base uppercase font-medium'>Checkout</span>

            </div>

            <span className='text-base '>27 September, 2025</span>

        </div>

        <div className='mt-4 flex sm:flex-row flex-col gap-4'>
            <div className='sm:w-5/7 w-full shadow bg-white p-4 rounded flex flex-col gap-4'>

                <form action="" className='w-full flex flex-col gap-2'>
                    <div className='w-full flex items-center gap-4'>
                        <div className='w-full flex flex-col '>
                            <span>Name</span>
                            <input type="text" className='w-full p-2 text-sm border border-gray-200 rounded-md outline-none'/>

                        </div>
                        <div className='w-full flex flex-col '>
                            <span>Phone / Email</span>
                            <input type="text" className='w-full p-2 text-sm border border-gray-200 rounded-md outline-none'/>

                        </div>

                    </div>
                    <div className='w-full flex items-center gap-4'>
                        <div className='w-full flex flex-col '>
                            <span>Emergency Phone *</span>
                            <input type="text" className='w-full p-2 text-sm border border-gray-200 rounded-md outline-none'/>

                        </div>
                        <div className='w-full flex flex-col '>
                            <span>Country *</span>
                            <input type="text" className='w-full p-2 text-sm border border-gray-200 rounded-md outline-none'/>

                        </div>

                    </div>
                    <div className='w-full flex items-center gap-4'>
                        <div className='w-full flex flex-col '>
                            <span>District *</span>
                            <input type="text" className='w-full p-2 text-sm border border-gray-200 rounded-md outline-none'/>

                        </div>
                        <div className='w-full flex flex-col '>
                            <span>City / Upazila *</span>
                            <input type="text" className='w-full p-2 text-sm border border-gray-200 rounded-md outline-none'/>

                        </div>

                    </div>
                    <div className='w-full flex items-center gap-4'>
                        <div className='w-full flex flex-col '>
                            <span>Address *</span>
                            <input type="text" className='w-full p-2 text-sm border border-gray-200 rounded-md outline-none'/>

                        </div>
                        <div className='w-full flex flex-col '>
                            <span>Delivery Method *</span>
                            <input type="text" className='w-full p-2 text-sm border border-gray-200 rounded-md outline-none'/>

                        </div>

                    </div>

                     <div className='w-full flex flex-col '>
                            <span>Note</span>
                            <textarea rows={5} type="text" className='w-full p-2 text-sm border border-gray-200 rounded-md outline-none'/>

                    </div>

                </form>
                

            </div>
            <div className='sm:w-2/7 w-full flex flex-col'>
                <div className='w-full shadow rounded bg-white p-2 flex flex-col gap-3'>
                    <h3 className='text-base font-medium text-center border-b border-gray-200 pb-2'>Checkout Summary</h3>

                    <div className='flex justify-between items-center'>
                        <span>Product Price</span>
                        <span>৳5883</span>

                    </div>
                   

                    <div className='bg-[#E9EFF0] rounded-md p-2 flex justify-center items-center flex-col gap-2'>
                        <form action="" className='w-full flex'>
                            <input type="text" placeholder='Coupen Code' className='w-full py-2 pl-2 bg-white rounded-l-full outline-none text-sm'/>
                            <button className='w-[3rem] bg-[#167389] text-center text-white flex justify-center items-center rounded-r-full cursor-pointer'><IoMdSend /></button>

                        </form>

                    </div>

                </div>

                <Link href="/product/checkout" className='w-full p-2 bg-[#167389] mt-3 rounded-md text-center text-white'>Place Order</Link>

                

            </div>
        </div>
      
    </div>
  )
}

export default page
