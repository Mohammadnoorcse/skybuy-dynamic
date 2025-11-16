import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='mt-[2rem] w-full bg-white border-t-3 border-[#167389] p-8 flex flex-col gap-4'>
        <div className='flex flex-col gap-3 justify-center items-center'>
            <Image src="https://skybuybd.com/_next/static/media/logo.2d8160b9.svg" alt="logo" width={150} height={150}/>
            <div className='flex items-center gap-2'>
                 <Image src="https://skybuybd.com/_next/static/media/facebook_round.4a8ef585.svg" alt="logo" width={40} height={40}/>
                 <Image src="https://skybuybd.com/_next/static/media/instagram.4390992e.svg" alt="logo" width={40} height={40}/>
                 <Image src="https://skybuybd.com/_next/static/media/youtube.9e128cb7.svg" alt="logo" width={40} height={40}/>
                 <Image src="https://skybuybd.com/_next/static/media/linkedin.313fbeb4.svg" alt="logo" width={40} height={40}/>
                 <Image src="https://skybuybd.com/_next/static/media/tiktok.6049d9a4.svg" alt="logo" width={40} height={40}/>
            </div>

            <p className='text-[20px] mt-4'>Explore Sky Brands... Think to the Sky.</p>

            <div className='flex items-center gap-4'>
                <div className='max-w-[200px] h-[90px] p-4 bg-[#E8F0F3] rounded-md flex justify-center items-center'>
                    <Image src="https://skybuybd.com/_next/static/media/logo.2d8160b9.svg" alt="logo" width={120} height={120} />

                </div>
                <div className='max-w-[200px] h-[90px] p-4 bg-[#E8F0F3] rounded-md flex justify-center items-center'>
                    <Image src="https://skybuybd.com/_next/static/media/logo.2d8160b9.svg" alt="logo" width={120} height={120} />

                </div>
                <div className='max-w-[200px] h-[90px] p-4 bg-[#E8F0F3] rounded-md flex justify-center items-center'>
                    <Image src="https://skybuybd.com/_next/static/media/skyexpress.3f90a79f.svg" alt="logo" width={120} height={120} />

                </div>
                
                
            </div>

            <div className='w-full grid sm:grid-cols-4 grid-cols-2 sm:gap-0 gap-4 mt-8 '>
                <div className='flex flex-col gap-2 '>
                    <h3 className='text-base font-medium uppercase mb-1'>Contact</h3>
                    <span>House 42, Road 3/A, Dhanmondi, Dhaka, Bangladesh</span>
                    <span className='text-sm'>Email: skybuybd@gmail.com</span>
                    <span className='text-sm'>Phone: 09613828606</span>


                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-base font-medium uppercase mb-1'>Customer</h3>
                    
                    <span className='text-sm'>Account</span>
                    <span className='text-sm'>Cart</span>
                    <span className='text-sm'>Wishlist</span>
                    <span className='text-sm'>Shipping Charge</span>
                    <span className='text-sm'>Retail Purchase</span>
                    <span className='text-sm'></span>
                    <Link href="/faq" className='text-sm'>FAQ</Link>


                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-base font-medium uppercase mb-1'>Information</h3>
                    <Link href="/about" className='text-sm'>About us</Link>
                    <Link href="/contact" className='text-sm'>Contact Us</Link>
                    <Link href="/privacy-policy" className='text-sm'>Privacy Policy</Link>
                    <Link href="/returns-refund" className='text-sm'>Returns & Refund</Link>
                    <Link href="/terms-conditions" className='text-sm'>Terms & Conditions</Link>
                    <Link href="/secured-payment" className='text-sm'>Secured Payment</Link>
                   
                    
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-base font-medium uppercase mb-1'>Mobile Apps</h3>
                     <Image src="/assets/playstore.png" alt="logo" width={120} height={120} />
                     <Image src="/assets/playstore.png" alt="logo" width={120} height={120} />


                </div>

            </div>

            <div className='w-full mt-4 flex items-center justify-center'>
                <span className='text-center text-base'>© 2025 Skybuybd - All Rights Reserved</span>

            </div>

        </div>
        
      
    </div>
  )
}

export default Footer
