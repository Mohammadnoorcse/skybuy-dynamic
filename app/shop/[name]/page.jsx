"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getAllProductsAndSections } from "@/app/lib/api";
import ProductCard from "@/app/components/product/ProductCard";

const Page = () => {
  const params = useParams();
  const name = decodeURIComponent(params.name || "");

  const [loading, setLoading] = useState(true);
  const [foundProducts, setFoundProducts] = useState([]);
  const [discount, setDiscount] = useState({});
  const [displayType, setDisplayType] = useState("category");

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const { products, categories, allSections, allDiscount } =
          await getAllProductsAndSections();
        setDiscount(allDiscount);

        let filteredProducts = [];

        // Helper function to parse JSON safely
        const parseIds = (json) => {
          try {
            return JSON.parse(json || "[]");
          } catch {
            return [];
          }
        };

        // 1️⃣ Check category
        const currentCategory = categories.find(
          (c) => c.name.toLowerCase() === name.toLowerCase()
        );

        if (currentCategory) {
          filteredProducts = products.filter((p) => {
            const catIds = parseIds(p.categories_id);
            return catIds.includes(currentCategory.id);
          });

          if (filteredProducts.length > 0) setDisplayType("category");
        }

        // 2️⃣ Check section if no category products found
        if (filteredProducts.length === 0) {
          const currentSection = allSections.find(
            (s) => s.name.toLowerCase() === name.toLowerCase()
          );

          if (currentSection) {
            filteredProducts = products.filter((p) => {
              const sectionIds = parseIds(p.section_id);
              return sectionIds.includes(currentSection.id);
            });

            if (filteredProducts.length > 0) setDisplayType("section");
          }
        }

        setFoundProducts(filteredProducts);
      } catch (err) {
        console.error("Error loading products:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [name]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <span>Loading...</span>
      </div>
    );
  }

  if (foundProducts.length === 0) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <span>No products found for "{name}"</span>
      </div>
    );
  }

  return (
    <div className="shadow-md">
      {/* Header */}
      <div className="w-full flex justify-between items-center shadow bg-white p-4 rounded">
        <span className="text-sm font-bold uppercase">
          SHOWING RESULTS ({foundProducts.length}) FOR{" "}
          <span className="text-[#94700b]">{name}</span>
        </span>
      </div>

      {/* Products Grid */}
      <div className="mt-3 shadow bg-white rounded-md p-4">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          {foundProducts.map((product) => (
            <ProductCard key={product.id} product={product} discount={discount} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
