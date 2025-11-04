"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
    const slides = [
    { id: 1, image: "/assets/banner.jpg", title: "Slide One" },
    { id: 2, image: "/assets/banner1.jpg", title: "Slide Two" },
    { id: 3, image: "/assets/banner2.jpg", title: "Slide Three" },
  ];
  return (
    <div className="w-full h-[280px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full h-full"
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
           <img src={slide.image} alt="logo" className="rounded-md w-full h-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
