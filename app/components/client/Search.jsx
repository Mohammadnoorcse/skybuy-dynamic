"use client";

import React, { useRef, useState, useEffect } from "react";
import { FiCamera } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

const Search = () => {
  const fileInputRef = useRef(null);
  const containerRef = useRef(null);

  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Handle image input
  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected image:", file);
      // Handle upload logic
    }
  };

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full relative" ref={containerRef}>
      <form
        className="w-full h-[40px] flex items-center"
       
      >
        {/* Camera icon */}
        <div
          className="w-[4rem] h-full bg-white rounded-l-full flex items-center justify-center cursor-pointer"
          onClick={handleClick}
        >
          <FiCamera className="text-xl text-[#555555]" />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>

        {/* Search input */}
        <div className="w-full h-full bg-white"  onClick={() => setShowDropdown(true)}>
          <input
            placeholder="Search keyword"
            className="w-full h-full outline-none font-medium text-[#555555]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowDropdown(true)}
          />
        </div>

        {/* Search icon */}
        <div className="w-[5rem] h-full bg-[black] rounded-r-full flex items-center justify-center text-white cursor-pointer">
          <FaSearch />
        </div>
      </form>

      {/* Dropdown */}
      {showDropdown && (
        <div className="absolute sm:top-[3.5rem] top-[3rem] w-full h-[12rem]  z-10 bg-white p-4 shadow-md overflow-auto scrollbar-hide">
          {/* Recent Searches */}
          {searchQuery.trim() === "" ? (
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-red-700">Recent Searches</h1>
              <div className="flex flex-wrap gap-4 items-center">
                {Array(6)
                  .fill("Ladies Bag")
                  .map((item, idx) => (
                    <Link
                      key={idx}
                      href="/blog"
                      className="p-1 px-2 bg-[#BEDBFF] text-sm rounded-md"
                    >
                      {item}
                    </Link>
                  ))}
              </div>
            </div>
          ) : (
            // Search suggestions
            <div className="flex flex-col gap-1">
              {Array(10)
                .fill("Ladies Bag")
                .map((item, idx) => (
                  <Link
                    key={idx}
                    href="/blog"
                    className="p-1 px-2 hover:bg-[#BEDBFF] hover:rounded-md text-sm border-b border-gray-200"
                  >
                    {item}
                  </Link>
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
