import React from 'react'
import Image from 'next/image';
import { FcGoogle } from "react-icons/fc";

const page = () => {
  return (
    <div className='w-full shadow  rounded-md flex flex-col items-center justify-center gap-4 pb-[2rem]'>
          <Image src="https://skybuybd.com/_next/static/media/login_icon.849dedcc.svg" alt="A description of the image" width={200} height={200} />
        <p>এখানে আপনার মোবাইল নাম্বার / ইমেইল দিয়ে লগিন করুন</p>
        

       <div>
         <form action="" className='sm:w-[30rem] w-[20rem] flex flex-col gap-2 items-start'>
            <span className='text-base font-bold '>মোবাইল নাম্বার / ইমেইল</span>
            <input type="text" className='w-full py-[6px] px-[12px] text-sm border border-[#ddd] rounded-md outline-[#167389]'/>
            <button className='w-full h-[40px] rounded-md bg-[#167389] text-white cursor-pointer'>সাবমিট করুন</button>

            <div className='w-full h-[40px] rounded-md text-white cursor-pointer mt-4 bg-[#0075E9] flex justify-center items-center relative '>
                <span className=''>Sign in with Google</span>
                <div className='w-[30px] h-[36px] bg-white absolute top-[1.5px] left-[4px] rounded-l-md flex justify-center items-center'>
                    <FcGoogle className='text-2xl'/>
                </div>

            </div>

        </form>
       </div>

    
      
    </div>
  )
}

export default page
