"use client";

import Navbar from "./components/global/Navbar";
import Slidebar from "./components/global/Slidebar";
import Footer from "./components/global/Footer";
import { usePathname } from "next/navigation";
import { CiMenuBurger } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoCallOutline, IoChatboxOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");
  const [showBottomCategory, setShowBottomCategory] = useState(false);

  if (isDashboard) return <>{children}</>;

  return (
    <div className="w-full flex flex-col relative">
      <Navbar />
      <div className="w-full h-screen flex gap-2 bg-[#F7F7F7]">
        <div className="w-2/8 md:block hidden h-screen shadow-md pt-4 overflow-auto scrollbar-hide">
          <Slidebar />
        </div>
        <div className="md:w-6/8 w-full h-screen overflow-auto scrollbar-hide pt-3">
          {children}
          <Footer />
        </div>
      </div>

      {/* Bottom footer */}
      <div className="fixed bottom-0 left-0 w-full bg-white rounded-t md:hidden flex justify-between items-center px-4 py-1">
        <div
          onClick={() => setShowBottomCategory(!showBottomCategory)}
          className="flex flex-col items-center text-[12px] font-semibold text-[#167389] capitalize"
        >
          <CiMenuBurger className="text-xl" />
          <span>category</span>
        </div>
        <div className="flex flex-col items-center text-[12px] font-semibold text-[#167389] capitalize">
          <FaRegUser className="text-xl" />
          <span>Account</span>
        </div>
        <div className="flex flex-col items-center text-[12px] font-semibold text-white capitalize p-2 bg-[#167389] rounded-full">
          <IoMdHome className="text-4xl" />
        </div>
        <div className="flex flex-col items-center text-[12px] font-semibold text-[#167389] capitalize">
          <IoCallOutline className="text-xl" />
          <span>call</span>
        </div>
        <div className="flex flex-col items-center text-[12px] font-semibold text-[#167389] capitalize">
          <IoChatboxOutline className="text-xl" />
          <span>chat</span>
        </div>
      </div>

      {/* Bottom category */}
      {showBottomCategory && (
        <div className="absolute top-0 left-0 w-[20rem] h-full overflow-auto scrollbar-hide z-50 bg-white md:hidden block">
          <div
            className="flex justify-end mr-3 cursor-pointer"
            onClick={() => setShowBottomCategory(false)}
          >
            <RxCross2 />
          </div>
          <Slidebar />
        </div>
      )}
    </div>
  );
}
