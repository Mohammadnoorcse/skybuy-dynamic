"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "../components/global/Navbar";
import { IoIosCall, IoMdHome } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { LuDollarSign } from "react-icons/lu";
import { CiFlag1, CiLogout } from "react-icons/ci";

import MainDashboard from "../components/userdashboard/maindashbord/page";
import Order from "../components/userdashboard/order/page";
import Payment from "../components/userdashboard/payment/page";
import Account from "../components/userdashboard/account/page";
import Setting from "../components/userdashboard/setting/page";
import { useAuth } from "../components/global/AuthContext";

// Sidebar menu items
const sidebarItems = [
  { key: "dashboard", label: "Dashboard", icon: <IoMdHome /> },
  { key: "orders", label: "Orders", icon: <FaShoppingBag /> },
  { key: "payments", label: "Payments", icon: <LuDollarSign /> },
  { key: "qc", label: "QC", icon: <CiFlag1 /> },
  { key: "account", label: "Account", icon: <IoIosCall /> },
  { key: "settings", label: "Settings", icon: <IoMdHome /> },
];

const Page = () => {
  const router = useRouter();
  const { user, token, logout } = useAuth(); 
  const [selectedTab, setSelectedTab] = useState("dashboard");
    const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

 


  // Render dynamic content based on selected tab
  const renderContent = () => {
    switch (selectedTab) {
      case "orders":
        return <Order />;
      case "payments":
        return <Payment />;
      case "qc":
        return <MainDashboard />;
      case "account":
        return <Account />;
      case "settings":
        return <Setting />;
      case "dashboard":
      default:
        return <MainDashboard />;
    }
  };

  // Use context logout 
  const handleLogout = async () => {
    try {
      if (token) {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/logout`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
      }
    } catch (err) {
      console.error("Logout API failed", err);
    }

    logout(); 
    router.push("/login"); 
  };

   if (!mounted) {
    
    return <span className="text-xl font-bold text-[#5f6368]">Loading...</span>;
  }

 

  return (
    <div className="w-full flex flex-col">
      <Navbar />

      <div className="w-full flex md:flex-row flex-col gap-2 bg-[#F7F7F7]">
        {/* Sidebar */}
        <div className="md:w-2/8 w-full flex flex-col gap-4 shadow-md py-4">
          {/* Profile Box */}
          <div className="w-full flex flex-col justify-center items-center gap-2 mt-2">
            <div className="w-[5rem] h-[5rem] bg-[#AAAAAA] rounded-full flex justify-center items-center">
              <span className="text-white text-xl font-medium">
                {"Guest"}
              </span>
            </div>
            <span className="text-xl font-bold text-[#5f6368]">
              {user?.email || "No email"}
            </span>

            <div className="py-1 px-2 bg-[#F5EDED] flex flex-row gap-1 rounded-full">
              <img
                src="https://skybuybd.com/_next/static/media/point.7d578a08.png"
                alt="logo"
                width={15}
                height={15}
              />
              <span className="text-sm">0</span>
              <span className="text-sm">Points</span>
            </div>

            <div className="w-full p-2">
              <div className="flex justify-between items-center bg-[#F9E8D9] p-2 rounded-md">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-[#AAAAAA] font-semibold uppercase">
                    Account Manager
                  </span>
                  <span className="text-[14px] font-medium uppercase">
                   {user?.name}
                  </span>
                  {/* <span className="text-[14px] uppercase">01622256788</span> */}
                </div>
                <div className="w-[1.8rem] h-[1.8rem] bg-[#ED7D31] rounded-full text-white flex justify-center items-center">
                  <IoIosCall />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Items */}
          <div className="px-4">
            <div className="grid grid-cols-2 md:flex md:flex-col gap-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setSelectedTab(item.key)}
                  className={`w-full flex items-center gap-2 px-4 py-2 rounded text-left transition-all ${
                    selectedTab === item.key
                      ? "bg-[#F2F2F2] font-semibold text-[#333]"
                      : "hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  <span className="text-lg md:text-xl">{item.icon}</span>
                  <span className="text-sm md:text-base">{item.label}</span>
                </button>
              ))}

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-4 py-2 rounded text-left transition-all hover:bg-gray-100 text-gray-600 cursor-pointer"
              >
                <span className="text-lg md:text-xl">
                  <CiLogout />
                </span>
                <span className="text-sm md:text-base">Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:w-6/8 w-full pt-2 px-1">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Page;
