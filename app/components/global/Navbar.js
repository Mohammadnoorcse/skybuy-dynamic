'use client'

import Image from 'next/image'
import Link from 'next/link'
import Search from '../client/Search'
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useCartWishlist } from '../global/CartWishlistContext';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mounted, setMounted] = useState(false); 
  const router = useRouter();
  const { cartItems, wishlistItems } = useCartWishlist();

  useEffect(() => {
    const token = localStorage.getItem('token'); 
    setIsLoggedIn(!!token);

    setMounted(true); 
  }, []);

  return (
    <div className='w-full bg-[#167389]'>
      <div className="w-full flex items-center flex-wrap py-2 px-[28px]">
        <div className=" w-1/2 lg:flex-1 order-1">
          <Link href="/">
            <Image
              src="https://skybuybd.com/_next/static/media/logo.2d8160b9.svg"
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>

        <div className=" w-full  lg:flex-2 order-3 lg:order-2 lg:mr-[2rem] mt-3 lg:mt-0">
          <Search />
        </div>

        <div className="w-1/2 lg:flex-1 order-2 lg:order-3 flex justify-end ">
          <div className='flex items-center gap-2 text-right'>

            {/* Wishlist */}
            <Link href="/product/wishlist" className='relative'>
              <CiHeart className='text-3xl text-white' />
              {mounted && (
                <span className='absolute top-[-0.7rem] right-[-4px] text-white'>
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link href="/product/cart" className='relative'> 
              <CiShoppingCart className='text-3xl text-white' />
              {mounted && (
                <span className='absolute top-[-0.7rem] right-[-4px] text-white'>
                  {cartItems.length}
                </span>
              )}
            </Link>
            
            {/* User */}
           {mounted && (
  <FaRegUser
    className='text-xl text-white cursor-pointer'
    onClick={() => {
      router.push(isLoggedIn ? '/dashboard' : '/login');
    }}
  />
)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
