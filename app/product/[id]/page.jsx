"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import Slider from "@/app/components/product/Slider";
import { useCartWishlist } from "@/app/components/global/CartWishlistContext";
import { getProductDetails, getSimilarProductsByCategoryIds } from "@/app/lib/api";
import Link from "next/link";

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

  // NEW STATE FOR SIMILAR PRODUCTS (LAZY)
  const [similarProducts, setSimilarProducts] = useState([]);
  const [similarLoading, setSimilarLoading] = useState(true);

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const { addToCart, addToWishlist } = useCartWishlist();
  const [toastMessage, setToastMessage] = useState(""); 

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);

      const data = await getProductDetails(id);
      setProductData(data);

      setSelectedColor(data.colors?.[0]?.name || "");
      setSelectedSize(data.sizes?.[0]?.name || "");

      setQuantity(1);
      setLoading(false);

      // Lazy load similar products
      const categoryIds = JSON.parse(data.product.categories_id || "[]");

      setSimilarLoading(true);
      getSimilarProductsByCategoryIds(categoryIds, data.product.id)
        .then((res) => setSimilarProducts(res))
        .finally(() => setSimilarLoading(false));
    };

    if (id) loadProduct();
  }, [id]);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(""), 2000); 
  };

  // const handleAddToCart = () =>
  //   addToCart({ ...productData.product, quantity, selectedColor, selectedSize });
   const handleAddToCart = () => {
    addToCart({ ...productData.product, quantity, selectedColor, selectedSize });
    showToast("Added to Cart!");
  };

  // const handleAddToWishlist = () =>
  //   addToWishlist({ ...productData.product, selectedColor, selectedSize });
    const handleAddToWishlist = () => {
    addToWishlist({ ...productData.product, selectedColor, selectedSize });
    showToast("Added to Wishlist!");
  };

  if (loading) return <p>Loading...</p>;

  const { product, categories, colors, sizes } = productData;

  return (
    <div className="w-full flex md:flex-row flex-col gap-4">
      {/* LEFT SIDE PRODUCT DETAILS */}
      <div className="md:w-5/7 w-full flex flex-col gap-4">
        <div className="w-full shadow bg-white p-4 rounded flex flex-col gap-4">
          <h1 className="text-base font-semibold">{product?.name}</h1>

          <div className="flex flex-col gap-4 mt-4">
            <div className="w-full h-[20rem] flex justify-center items-center">
              <Slider images={product?.images} />
            </div>

            <div className="w-full flex flex-col gap-2 mt-12">
              <p>
                <span className="font-semibold">Sku Code:</span> {product?.sku}
              </p>

              <p>
                <span className="font-semibold">Category:</span>{" "}
                {categories.map((c) => c.name).join(", ")}
              </p>

              {/* Color Selection */}
              <div className="flex items-center gap-2 mt-3">
                <p className="font-semibold">Color:</p>
                <div className="flex gap-2">
                  {colors.map((c) => (
                    <button
                      key={c.id}
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
                  {sizes.map((s) => (
                    <button
                      key={s.id}
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

              {/* Quantity */}
              <p className="text-base font-semibold mt-4">Quantity</p>
              <div className="w-[8rem] h-[2rem] border border-[#156C80] rounded-full flex justify-between items-center">
                <span
                  onClick={decrement}
                  className="w-[2rem] h-full bg-[#156C80] text-white text-center rounded-full cursor-pointer"
                >
                  -
                </span>
                <span>{quantity}</span>
                <span
                  onClick={increment}
                  className="w-[2rem] h-full bg-[#156C80] text-white text-center rounded-full cursor-pointer"
                >
                  +
                </span>
              </div>

              {/* Buttons */}
              <div className="mt-4 flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="p-2 bg-[#167389] text-white rounded-md"
                >
                  Add to Cart
                </button>

                <button className="p-2 bg-[#167389] text-white rounded-md">
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
        <div className="mt-4 w-full shadow bg-white p-4 rounded">
          <div className="flex gap-4 items-center">
            {["specification", "description", "seller"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`p-2 text-[12px] rounded-md font-bold ${
                  activeTab === tab
                    ? "bg-[#167389] text-white"
                    : "border border-[#167389]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - SIMILAR PRODUCTS */}
      <div className="md:w-2/7 w-full shadow bg-white rounded p-3">
        <h1 className="text-base font-semibold text-center my-4 border-b pb-2">
          Similar Products
        </h1>

        {/* Skeleton Loader */}
        {similarLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {Array(4)
              .fill()
              .map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 h-32 w-full rounded"></div>
                  <div className="h-3 bg-gray-200 rounded mt-2 w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded mt-1 w-1/2"></div>
                </div>
              ))}
          </div>
        ) : similarProducts.length === 0 ? (
          <p className="text-center text-gray-500">No similar products found</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {similarProducts.map((item) => (
              <Link href={`/product/${item.id}`} key={item.id} className="flex flex-col gap-2">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${item.images[0]}`}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="rounded-md"
                />
                <span className="text-sm font-semibold truncate">
                  {item.name}
                </span>

                <div className="flex justify-between items-center">
                  <span className="text-[15px] font-bold text-[#cf3056]">
                    ৳ {item.sale_price}
                  </span>
                  <span className="text-[11px] text-[#5f5f5f]">
                    SOLD: 15
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

        {/* ✅ Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-5 bg-[#167389] text-white px-4 py-2 rounded-md shadow-lg animate-slide-in ">
          <span>Successfully {toastMessage}</span>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
