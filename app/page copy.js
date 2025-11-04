"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const Page = () => {
  const [showProducts, setShowProducts] = useState(false); // toggle view
  const [selectedCategory, setSelectedCategory] = useState("Bags"); // optional

  const handleCategoryClick = (category) => {
  setSelectedCategory(category);
  setShowProducts(true);
};

  const handleBackClick = () => {
    setShowProducts(false);
  };

  return (
    <div className="w-full h-screen flex gap-2 bg-[#F7F7F7]">
      <div className="w-2/8 md:block hidden h-screen shadow-md pt-4  overflow-auto scrollbar-hide">

        {/* =============== Category Grid =============== */}
        {!showProducts && (
          <div className="w-full  grid grid-cols-2">
            
           

            <div className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
              onClick={() => handleCategoryClick("Bags")}
            >
              <Image
                src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
                alt="image"
                width={70}
                height={70}
              />
              <span className="text-[13px] font-bold">Bags</span>
            </div>
            <div
              className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
              onClick={() => handleCategoryClick("Bags")}
            >
              <Image
                src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
                alt="image"
                width={70}
                height={70}
              />
              <span className="text-[13px] font-bold">Bags</span>
            </div>
            <div
              className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
              onClick={() => handleCategoryClick("Bags")}
            >
              <Image
                src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
                alt="image"
                width={70}
                height={70}
              />
              <span className="text-[13px] font-bold">Bags</span>
            </div>
            <div
              className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
              onClick={() => handleCategoryClick("Bags")}
            >
              <Image
                src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
                alt="image"
                width={70}
                height={70}
              />
              <span className="text-[13px] font-bold">Bags</span>
            </div>
            <div
              className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
              onClick={() => handleCategoryClick("Bags")}
            >
              <Image
                src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
                alt="image"
                width={70}
                height={70}
              />
              <span className="text-[13px] font-bold">Bags</span>
            </div>
            <div
              className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
              onClick={() => handleCategoryClick("Bags")}
            >
              <Image
                src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
                alt="image"
                width={70}
                height={70}
              />
              <span className="text-[13px] font-bold">Bags</span>
            </div>
            <div
              className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
              onClick={() => handleCategoryClick("Bags")}
            >
              <Image
                src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
                alt="image"
                width={70}
                height={70}
              />
              <span className="text-[13px] font-bold">Bags</span>
            </div>
            <div
              className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
              onClick={() => handleCategoryClick("Bags")}
            >
              <Image
                src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
                alt="image"
                width={70}
                height={70}
              />
              <span className="text-[13px] font-bold">Bags</span>
            </div>
            <div
              className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
              onClick={() => handleCategoryClick("Bags")}
            >
              <Image
                src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
                alt="image"
                width={70}
                height={70}
              />
              <span className="text-[13px] font-bold">Bags</span>
            </div>
            <div
              className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
              onClick={() => handleCategoryClick("Bags")}
            >
              <Image
                src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
                alt="image"
                width={70}
                height={70}
              />
              <span className="text-[13px] font-bold">Bags</span>
            </div>
            <div
              className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
              onClick={() => handleCategoryClick("Bags")}
            >
              <Image
                src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
                alt="image"
                width={70}
                height={70}
              />
              <span className="text-[13px] font-bold">Bags</span>
            </div>
            <div
              className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
              onClick={() => handleCategoryClick("Bags")}
            >
              <Image
                src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
                alt="image"
                width={70}
                height={70}
              />
              <span className="text-[13px] font-bold">Bags</span>
            </div>
            <div
              className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
              onClick={() => handleCategoryClick("Bags")}
            >
              <Image
                src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
                alt="image"
                width={70}
                height={70}
              />
              <span className="text-[13px] font-bold">Bags</span>
            </div>
            <div
              className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
              onClick={() => handleCategoryClick("Bags")}
            >
              <Image
                src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
                alt="image"
                width={70}
                height={70}
              />
              <span className="text-[13px] font-bold">Bags</span>
            </div>
            <div
              className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
              onClick={() => handleCategoryClick("Bags")}
            >
              <Image
                src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
                alt="image"
                width={70}
                height={70}
              />
              <span className="text-[13px] font-bold">Bags</span>
            </div>
            <div
              className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
              onClick={() => handleCategoryClick("Bags")}
            >
              <Image
                src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
                alt="image"
                width={70}
                height={70}
              />
              <span className="text-[13px] font-bold">Bags</span>
            </div>
            
          </div>
        )}

        {/* =============== Product List =============== */}
        {showProducts && (
          <div className="w-full h-full overflow-auto scrollbar-hide flex flex-col gap-4">
            {/* Header with Back Button */}
            <div className="w-full flex items-center px-4 py-3 hover:bg-[#E9F0EE] border-b border-gray-200">
              <div className="w-1/2 cursor-pointer" onClick={handleBackClick}>
                <FaArrowLeft />
              </div>
              <span className="w-1/2 text-center font-bold">{selectedCategory}</span>
            </div>

            {/* Product Links */}
            <div className="w-full flex flex-col gap-2">
              {Array(20)
                .fill("Purse")
                .map((item, idx) => (
                  <Link
                    href="/blog"
                    key={idx}
                    className="text-[13px] font-medium text-[#000] px-4 py-3 hover:bg-[#E9F0EE]"
                  >
                    {item}
                  </Link>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Right section (reserved for products or other content) */}
      <div className="md:w-6/8 w-full h-screen  shadow-md overflow-auto scrollbar-hide pt-3">

	  {/* first section */}
	  <div className="w-full flex sm:flex-row flex-col gap-2 shadow  bg-white p-2">

		<div className="sm:w-5/7">
			<Image src="/assets/banner.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
		</div>

		<div className="sm:w-2/7 w-full h-full flex sm:flex-col flex-row gap-4">
			<div className="w-full ">
				<Image src="/assets/banner.jpg" alt="Logo" width={700} height={300} className="rounded-md"/>
			</div>

			<div className="w-full"><Image src="/assets/banner.jpg" alt="Logo" width={700} height={100} className="rounded-md"/></div>
			
			
		</div>

	  </div>


	  {/* seconde section */}
		<div className="mt-3 shadow bg-white rounded-md p-4 flex flex-col gap-4">
			{/* category */}

			<div className="w-full md:flex hidden gap-4">
				<div className="w-[7rem] p-2 bg-[#F5F5F5] flex items-center gap-2 rounded-md">
					
					<Image src="https://skybuybd.com/_next/static/media/handbag.2ef168de.svg" alt="image" width={30} height={30}/>
					<span className="text-sm font-medium">Bags</span>
					
				</div>
				<div className="w-[7rem] p-2 bg-[#F5F5F5] flex items-center gap-2 rounded-md">
					
					<Image src="https://skybuybd.com/_next/static/media/handbag.2ef168de.svg" alt="image" width={30} height={30}/>
					<span className="text-sm font-medium">Bags</span>
					
				</div>
				<div className="w-[7rem] p-2 bg-[#F5F5F5] flex items-center gap-2 rounded-md">
					
					<Image src="https://skybuybd.com/_next/static/media/handbag.2ef168de.svg" alt="image" width={30} height={30}/>
					<span className="text-sm font-medium">Bags</span>
					
				</div>
				<div className="w-[7rem] p-2 bg-[#F5F5F5] flex items-center gap-2 rounded-md">
					
					<Image src="https://skybuybd.com/_next/static/media/handbag.2ef168de.svg" alt="image" width={30} height={30}/>
					<span className="text-sm font-medium">Bags</span>
					
				</div>
				<div className="w-[7rem] p-2 bg-[#F5F5F5] flex items-center gap-2 rounded-md">
					
					<Image src="https://skybuybd.com/_next/static/media/handbag.2ef168de.svg" alt="image" width={30} height={30}/>
					<span className="text-sm font-medium">Bags</span>
					
				</div>
				<div className="w-[7rem] p-2 bg-[#F5F5F5] flex items-center gap-2 rounded-md">
					
					<Image src="https://skybuybd.com/_next/static/media/handbag.2ef168de.svg" alt="image" width={30} height={30}/>
					<span className="text-sm font-medium">Bags</span>
					
				</div>
				<div className="w-[7rem] p-2 bg-[#F5F5F5] flex items-center gap-2 rounded-md">
					
					<Image src="https://skybuybd.com/_next/static/media/handbag.2ef168de.svg" alt="image" width={30} height={30}/>
					<span className="text-sm font-medium">Bags</span>
					
				</div>
				<div className="w-[7rem] p-2 bg-[#F5F5F5] flex items-center gap-2 rounded-md">
					
					<Image src="https://skybuybd.com/_next/static/media/handbag.2ef168de.svg" alt="image" width={30} height={30}/>
					<span className="text-sm font-medium">Bags</span>
					
				</div>

			</div>

			{/* product */}

			<div className="w-full flex flex-col gap-4 mt-4">

				<div className="w-full grid md:grid-cols-4 grid-cols-2 gap-4">
					{/* card */}
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/product.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/product.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/product.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/product.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
	

				</div>

			</div>


		</div>
	  {/* third section */}
		<div className="mt-3 shadow bg-white rounded-md p-4 flex flex-col gap-4">
			
			<div className="w-full flex justify-between items-center">
				<span className="text-[17px] font-bold">LADIES BAGS</span>
				<button className="py-1 px-4 bg-[#167389] text-white text-white rounded-md">Views</button>

			</div>

			

			{/* product */}

			<div className="w-full flex flex-col gap-4 mt-4">

				<div className="w-full grid md:grid-cols-4 grid-cols-2 gap-4">
					{/* card */}
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/product.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/product.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/product.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/product.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/product.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/product.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/product.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/product.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/product.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/product.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/product.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
	

				</div>

			</div>


		</div>
	  {/* four section */}
		<div className="mt-3 shadow bg-white rounded-md p-4 flex flex-col gap-4">
			
			<div className="w-full flex justify-between items-center">
				<span className="text-[17px] font-bold">SHOE</span>
				<button className="py-1 px-4 bg-[#167389] text-white text-white rounded-md">Views</button>

			</div>

			

			{/* product */}

			<div className="w-full flex flex-col gap-4 mt-4">

				<div className="w-full grid md:grid-cols-4 grid-cols-2 gap-4">
					{/* card */}
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/shoe.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/shoe.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/shoe.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/shoe.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/shoe.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/shoe.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/shoe.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/shoe.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/shoe.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/shoe.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/shoe.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
	

				</div>

			</div>


		</div>
	  {/* five section */}
		<div className="mt-3 shadow bg-white rounded-md p-4 flex flex-col gap-4">
			
			<div className="w-full flex justify-between items-center">
				<span className="text-[17px] font-bold">WATCHE</span>
				<button className="py-1 px-4 bg-[#167389] text-white text-white rounded-md">Views</button>

			</div>

			

			{/* product */}

			<div className="w-full flex flex-col gap-4 mt-4">

				<div className="w-full grid md:grid-cols-4 grid-cols-2 gap-4">
					{/* card */}
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/watch.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/watch.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/watch.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/watch.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/watch.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/watch.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/watch.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/watch.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/watch.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/watch.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
					<div className="w-full flex flex-col gap-3">

						<Image src="/assets/watch.jpg" alt="Logo" width={700} height={500} className="rounded-md"/>
						<span className="text-sm font-medium truncate">Summer Ice Silk Short-sleeved Quick-drying Thin</span>
						<div className="w-full flex justify-between items-center">
							<span className="text-sm font-bold text-red-600">৳ 545</span>
							<span className="text-[11px] font-medium text-[#5f5f5f]">SOLD: 3503</span>
							
						</div>

					</div>
	

				</div>

			</div>


		</div>



	  </div>
    </div>
  );
};

export default Page;
