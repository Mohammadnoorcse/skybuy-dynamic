"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import Slider from "@/app/components/product/Slider";
import { useCartWishlist } from "@/app/components/global/CartWishlistContext";
import { getProductDetails } from "@/app/lib/api";

const ProductPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("specification");
  const [quantity, setQuantity] = useState(1);
  const [productData, setProductData] = useState({
    product: null,
    categories: [],
    colors: [],
    sizes: [],
  });
  const [loading, setLoading] = useState(true);

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const { addToCart, addToWishlist } = useCartWishlist();

  // Load product details and auto-select first color and size
  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      const data = await getProductDetails(id);
      setProductData(data);

      // Auto-select first color and size
      setSelectedColor(data.colors?.[0]?.name || "");
      setSelectedSize(data.sizes?.[0]?.name || "");

      // Reset quantity
      setQuantity(1);

      setLoading(false);
    };

    if (id) loadProduct();
  }, [id]);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () =>
    addToCart({ ...productData.product, quantity, selectedColor, selectedSize });

  const handleAddToWishlist = () =>
    addToWishlist({ ...productData.product, selectedColor, selectedSize });

  const renderContent = () => {
    const contentMap = {
      specification: {
        title: "Specifications",
        text: "Here are the product specifications...",
      },
      description: {
        title: "Description",
        text: "This is the product description...",
      },
      seller: {
        title: "Seller Info",
        text: "Seller name, ratings, and contact...",
      },
    };
    const content = contentMap[activeTab];
    return content ? (
      <div>
        <h3 className="font-semibold text-lg mb-2">{content.title}</h3>
        <p className="text-sm text-gray-600">{content.text}</p>
      </div>
    ) : null;
  };

  const tabButton = (tab) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`p-2 text-[12px] rounded-md font-bold cursor-pointer ${
        activeTab === tab
          ? "bg-[#167389] text-white"
          : "border border-[#167389]"
      }`}
    >
      {tab.charAt(0).toUpperCase() + tab.slice(1)}
    </button>
  );

  if (loading) return <p>Loading...</p>;

  const { product, categories, colors, sizes } = productData;

  return (
    <div className="w-full flex md:flex-row flex-col gap-4">
      {/* Product Details */}
      <div className="md:w-5/7 w-full flex flex-col gap-4">
        <div className="w-full shadow bg-white p-4 rounded flex flex-col gap-4">
          <h1 className="text-base font-semibold">{product?.name}</h1>
          <span className="w-full border-b border-[#eee] mt-2"></span>

          <div className="flex flex-col gap-4 mt-4">
            <div className="w-full h-[20rem] flex justify-center items-center">
              <Slider images = {product?.images} />
            </div>

            <div className="w-full flex flex-col gap-2 mt-12">
              <p>
                <span className="font-semibold">Sku Code:</span> {product?.sku}
              </p>
              <p>
                <span className="font-semibold">Category:</span>{" "}
                {categories.map((c) => c.name).join(", ")}
              </p>
              <p>
                <span className="font-semibold">Approximate Weight:</span> 0.03
                Kg
              </p>

              {/* Color Selection */}
              <div className="flex items-center gap-2">
                <p className="font-semibold">Color:</p>
                <div className="flex gap-2">
                  {colors.map((c) => (
                    <button
                      key={c.id || c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`px-3 rounded border ${
                        selectedColor === c.name
                          ? "bg-[#167389] text-white"
                          : "border-gray-300 text-gray-700"
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mt-2 flex items-center gap-2">
                <p className="font-semibold">Size:</p>
                <div className="flex gap-2">
                  {sizes?.map((s) => (
                    <button
                      key={s.name}
                      onClick={() => setSelectedSize(s.name)}
                      className={`px-3 rounded border ${
                        selectedSize === s.name
                          ? "bg-[#167389] text-white"
                          : "border-gray-300 text-gray-700"
                      }`}
                    >
                      {s.name.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <p>
                <span className="font-semibold">Stock:</span> {product?.stock}
              </p>
              <p>
                <span className="font-semibold">Price:</span> ৳{" "}
                {product?.sale_price}
              </p>
              <p className="text-sm">{product?.short_desc}</p>

              {/* Quantity */}
              <p className="text-base font-semibold">Quantity</p>
              <div className="w-[8rem] h-[2rem] border border-[#156C80] rounded-full flex justify-between items-center">
                <span
                  onClick={decrement}
                  className="w-[2rem] h-full bg-[#156C80] rounded-full text-center text-white cursor-pointer"
                >
                  -
                </span>
                <span>{quantity}</span>
                <span
                  onClick={increment}
                  className="w-[2rem] h-full bg-[#156C80] rounded-full text-center text-white cursor-pointer"
                >
                  +
                </span>
              </div>

              {/* Actions */}
              <div className="mt-4 flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="p-2 bg-[#167389] text-white rounded-md cursor-pointer"
                >
                  Add to Cart
                </button>
                <button className="p-2 bg-[#167389] text-white rounded-md cursor-pointer">
                  Buy Now
                </button>
                <button
                  onClick={handleAddToWishlist}
                  className="w-[3rem] p-2 border border-[#167389] rounded-md flex justify-center items-center text-[#167389]"
                >
                  <FaRegHeart />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-4 w-full shadow bg-white p-4 rounded flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            {tabButton("specification")}
            {tabButton("description")}
            {tabButton("seller")}
          </div>
          <div className="mt-4">{renderContent()}</div>
        </div>
      </div>

      {/* Similar Products */}
      <div className="md:w-2/7 w-full shadow bg-white rounded p-2">
        <h1 className="text-base font-semibold text-center my-4 border-b border-gray-200">
          Similar Products
        </h1>
        <div className="grid md:grid-cols-1 sm:grid-cols-3 grid-cols-2 gap-4">
          {Array(3)
            .fill({
              name: "Retro Round Sunglasses Best Man Brides",
              price: 29,
              sold: 9543,
              image: "/assets/product.jpg",
            })
            .map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="rounded-md"
                />
                <span className="text-sm font-semibold truncate">
                  {item.name}
                </span>
                <div className="flex items-center justify-between">
                  <span className="text-[15px] font-bold text-[#cf3056]">
                    ৳ {item.price}
                  </span>
                  <span className="text-[11px] text-[#5f5f5f] font-medium">
                    SOLD: {item.sold}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
