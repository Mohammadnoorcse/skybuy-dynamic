"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { getAllProductsAndSections } from "./lib/api";

const Slider = dynamic(() => import("./components/home/Slider"), { ssr: false });
const ProductCard = dynamic(() => import("./components/product/ProductCard"), { ssr: false });

const SkeletonGrid = () => (
  <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="w-full h-40 bg-gray-200 animate-pulse rounded-md" />
    ))}
  </div>
);



const Page = () => {
  const [sections, setSections] = useState({});
  const [sectionNames, setSectionNames] = useState({});
  const [discount, setDiscount] = useState({});
  const [videos, setVideos] = useState([]);
  const [sliders, setSliders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = localStorage.getItem("homeData");
    if (cached) {
      const parsed = JSON.parse(cached);
      setSections(parsed.groupedSections || {});
      setSectionNames(parsed.sectionMap || {});
      setDiscount(parsed.allDiscount || {});
      setSliders(parsed.slider || []);
      setVideos(parsed.videos || []);
      setLoading(false);
    }

    const loadData = async () => {
      // Phase 1 — load main data (fast)
      const { groupedSections, sectionMap, allDiscount, slider } = await getAllProductsAndSections("main");
      setSections(groupedSections);
      setSectionNames(sectionMap);
      setDiscount(allDiscount);
      setSliders(slider);
      setLoading(false);

      // Phase 2 — load videos + refresh cache
      const fullData = await getAllProductsAndSections("full");
      setVideos(fullData.videos || []);
      setSliders(fullData.slider || []);
      localStorage.setItem("homeData", JSON.stringify(fullData));
     
    };

    loadData();
  }, []);

  const sortedKeys = Object.keys(sections).sort((a, b) => Number(a) - Number(b));

  return (
    <div className="shadow-md">
      {/* Slider & banners */}
      <div className="w-full flex sm:flex-row flex-col gap-2 shadow bg-white p-2">
        <div className="sm:w-5/7">
          {sliders?.length > 0 ? (
            <Slider slider={sliders} />
          ) : (
            <div className="h-[250px] bg-gray-200 animate-pulse rounded-md" />
          )}
        </div>

        <div className="sm:w-2/7 w-full h-full flex sm:flex-col flex-row gap-4">
          <Image
            src="/assets/banner.jpg"
            alt="Banner"
            width={700}
            height={300}
            className="rounded-md"
            priority
          />
          <Image
            src="/assets/banner.jpg"
            alt="Banner"
            width={700}
            height={100}
            className="rounded-md"
          />
        </div>
      </div>

      {/* Trending videos */}
      {videos?.length > 0 && (
        <div className="mt-3 shadow bg-white rounded-md p-4 flex flex-col gap-4">
          <div className="w-full flex justify-between items-center">
            <span className="text-[17px] font-bold uppercase">
              Trending Collection
            </span>
            <Link
              href="/shop/trend-collection"
              className="py-1 px-4 bg-[#167389] text-white rounded-md"
            >
              View All
            </Link>
          </div>

          <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-4 mt-4">
            {videos.map((src, i) => (
              <div key={i} className="w-full">
                <video
                  src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${src.path}`}
                  preload="none"
                  poster="/assets/video-placeholder.jpg"
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full h-auto rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Dynamic sections */}
      {sortedKeys.map((sid) => (
        <div
          key={sid}
          className="mt-3 shadow bg-white rounded-md p-4 flex flex-col gap-4"
        >
          <div className="w-full flex justify-between items-center">
            <span className="text-[17px] font-bold">
              {sectionNames[sid] || `Section ${sid}`}
            </span>
            <Link
              href={`/shop/${sectionNames[sid]}`}
              className="py-1 px-4 bg-[#167389] text-white rounded-md"
            >
              View All
            </Link>
          </div>

          <div className="w-full mt-4">
            {loading ? (
              <SkeletonGrid />
            ) : (
              <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                {sections[sid].map((p) => (
                  <ProductCard key={p.id} product={p} discount={discount} />
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
