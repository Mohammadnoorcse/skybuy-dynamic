"use client";

import React, { useRef, useState, useEffect } from "react";
import { FiCamera } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { getAllProductsAndSections } from "@/app/lib/api";

const Search = () => {
  const fileInputRef = useRef(null);
  const containerRef = useRef(null);

  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  // -------------------------
  // IMAGE SEARCH API (fetch)
  // -------------------------
  const searchProductByImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/search-image`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      return data;
    } catch (err) {
      console.error("Image search failed:", err);
      return null;
    }
  };

  // -----------------------------------------
  // HANDLE IMAGE INPUT
  // -----------------------------------------
  const handleClick = () => fileInputRef.current?.click();

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setShowDropdown(true);
    setSearchQuery("");
    setFilteredResults([]);

    const result = await searchProductByImage(file);

    if (result?.product) {
      setFilteredResults([result.product]);
    } else {
      setFilteredResults([]);
    }
  };

  // -----------------------------------------
  // FETCH PRODUCTS + TEXT SEARCH
  // -----------------------------------------
  useEffect(() => {
    let isMounted = true;

    const init = async () => {
      const { products } = await getAllProductsAndSections();
      if (isMounted) setProducts(products);
    };

    init();

    // CLOSE DROPDOWN ON OUTSIDE CLICK
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // TEXT SEARCH
    if (searchQuery.trim()) {
      const results = products.filter((p) =>
        p.name?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredResults(results.slice(0, 10));
    } else if (!searchQuery.trim()) {
      // Do not clear if image search is active
      if (filteredResults.length === 0) setFilteredResults([]);
    }

    // Cleanup
    return () => {
      isMounted = false;
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchQuery, products]);


  return (
    <div className="w-full relative" ref={containerRef}>
      <form className="w-full h-[40px] flex items-center">
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
        <div
          className="w-full h-full bg-white"
          onClick={() => setShowDropdown(true)}
        >
          <input
            placeholder="Search product..."
            className="w-full h-full outline-none font-medium text-[#555555]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowDropdown(true)}
          />
        </div>

        {/* Search icon */}
        <div className="w-[5rem] h-full bg-black rounded-r-full flex items-center justify-center text-white cursor-pointer">
          <FaSearch />
        </div>
      </form>

      {/* Dropdown */}
      {showDropdown && (
        <div className="absolute sm:top-[3.5rem] top-[3rem] w-full h-[12rem] z-10 bg-white p-4 shadow-md overflow-auto scrollbar-hide">
          {searchQuery.trim() === "" && filteredResults.length === 0 ? (
            // Recent searches
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-red-700">Recent Searches</h1>
              <div className="flex flex-wrap gap-4 items-center">
                {Array(6)
                  .fill("Ladies Bag")
                  .map((item, idx) => (
                    <Link
                      key={idx}
                      href={`/search/${item}`}
                      className="p-1 px-2 bg-[#BEDBFF] text-sm rounded-md"
                    >
                      {item}
                    </Link>
                  ))}
              </div>
            </div>
          ) : filteredResults.length > 0 ? (
            // Results (text search + image search)
            <div className="flex flex-col gap-1">
              {filteredResults.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  onClick={() => setShowDropdown(false)}
                  className="p-1 px-2 hover:bg-[#BEDBFF] hover:rounded-md text-sm border-b border-gray-200 flex justify-between"
                >
                  <span>{product.name}</span>
                  <span className="text-gray-500">৳{product.sale_price}</span>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic text-sm">No products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
