"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllProductsAndSections } from "@/app/lib/api";

const MobileSildebar = ({ onClickItem }) => {
  const [showProducts, setShowProducts] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const { categories } = await getAllProductsAndSections();
        setCategories(categories || []);
      } catch (err) {
        console.error("Failed to load categories:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <div className="text-center py-6">Loading...</div>;
  return (
    <div className="w-full">
      {/* =============== Category Grid =============== */}
      {!showProducts && (
        <div className="grid grid-cols-2  gap-2">
          {categories.map((cat) => (
            <Link
              key={cat.id || cat.name}
              href={`/shop/${cat.name}`}
              onClick={onClickItem}
              className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer transition"
            >
              <Image
                src={
                  cat.image
                    ? `${process.env.NEXT_PUBLIC_API_URL}/${cat.image}`
                    : "/assets/category/default.svg"
                }
                alt={cat.name}
                width={70}
                height={70}
              />
              <span className="text-[13px] font-bold text-center">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileSildebar;
