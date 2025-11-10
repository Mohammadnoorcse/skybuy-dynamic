"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "./components/home/Slider";
import { getAllProductsAndSections } from "./lib/api";
import ProductCard from "./components/product/ProductCard";

const Page = () => {
  const [sections, setSections] = useState({});
  const [sectionNames, setSectionNames] = useState({});
  const [discount, setDiscount] = useState({});
  const [videos,setVideos] = useState();
  const [sliders,setSliders] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const { groupedSections, sectionMap,allDiscount,videos,slider } = await getAllProductsAndSections();
      setSections(groupedSections);
      setSectionNames(sectionMap);
      setDiscount(allDiscount);
      setVideos(videos);
      setSliders(slider);
      setLoading(false);

      console.log('videos',videos);

      
    };

    loadData();
  }, []);

 

  // Show loading until client fetch completes
  if (loading) {
    return (
      <div className="text-center py-10 text-gray-500">Loading...</div>
    );
  }

  const sortedKeys = Object.keys(sections).sort((a, b) => Number(a) - Number(b));

  return (
    <div className="shadow-md">
      {/* Slider & banners */}
      <div className="w-full flex sm:flex-row flex-col gap-2 shadow bg-white p-2">
        <div className="sm:w-5/7">
          <Slider slider ={sliders} />
        </div>
        <div className="sm:w-2/7 w-full h-full flex sm:flex-col flex-row gap-4">
          <div className="w-full">
            <Image
              src="/assets/banner.jpg"
              alt="Banner"
              width={700}
              height={300}
              className="rounded-md"
            />
          </div>
          <div className="w-full">
            <Image
              src="/assets/banner.jpg"
              alt="Banner"
              width={700}
              height={100}
              className="rounded-md"
            />
          </div>
        </div>
      </div>

      

      {/* Trending videos */}
      <div className="mt-3 shadow bg-white rounded-md p-4 flex flex-col gap-4">
        <div className="w-full flex justify-between items-center">
          <span className="text-[17px] font-bold uppercase">
            Trending Collection
          </span>
          <Link
            href="/shop/trend-collection"
            className="py-1 px-4 bg-[#167389] text-white rounded-md"
          >
            Views
          </Link>
        </div>
        <div className="w-full flex flex-col gap-4 mt-4">
          <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-4">
            {videos.map(
              (src, i) => (
                <div key={i} className="w-full">
                  <video
                    src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${src.path}`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto rounded-md"
                  />
                </div>
              )
            )}
          </div>

          
        </div>
      </div>

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
              Views
            </Link>
          </div>

          <div className="w-full flex flex-col gap-4 mt-4">
            <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-4">
              {sections[sid].map((p) => (
                <ProductCard key={p.id} product={p} discount ={discount} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
