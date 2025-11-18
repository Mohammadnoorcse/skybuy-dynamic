'use client'

import Image from 'next/image'
import Link from 'next/link'
import Search from '../client/Search'
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { useCartWishlist } from '../global/CartWishlistContext';
import { useAuth } from './AuthContext';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const router = useRouter();
  const { cartItems, wishlistItems } = useCartWishlist();
  const { isLoggedIn } = useAuth();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleUserClick = () => {
    if (isLoggedIn) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  };

  return (
    <div className='w-full bg-[#167389]'>
      <div className="w-full flex items-center flex-wrap py-2 px-[28px]">
        
        {/* Logo */}
        <div className="w-1/2 lg:flex-1 order-1">
          <Link href="/">
            <Image
              src="https://skybuybd.com/_next/static/media/logo.2d8160b9.svg"
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>

        {/* Search */}
        <div className="w-full lg:flex-2 order-3 lg:order-2 lg:mr-[2rem] mt-3 lg:mt-0">
          <Search />
        </div>

        {/* Wishlist, Cart, User */}
        <div className="w-1/2 lg:flex-1 order-2 lg:order-3 flex justify-end">
          <div className='flex items-center gap-2 text-right'>
            
            {/* Wishlist */}
            <Link href="/product/wishlist" className='relative'>
              <CiHeart className='text-3xl text-white' />
              {mounted && wishlistItems.length > 0 && (
                <span className='absolute top-[-0.7rem] right-[-4px] text-white text-sm font-bold'>
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link href="/product/cart" className='relative'>
              <CiShoppingCart className='text-3xl text-white' />
              {mounted && cartItems.length > 0 && (
                <span className='absolute top-[-0.7rem] right-[-4px] text-white text-sm font-bold'>
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* User */}
            <FaRegUser
              className='text-xl text-white cursor-pointer'
              onClick={handleUserClick}
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
