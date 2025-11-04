"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const slides = [
    { id: 1, image: "/assets/dress/dress-1.jpg", title: "Modern Living Room" },
    { id: 2, image: "/assets/dress/dress-2.jpg", title: "Minimalist Workspace" },
    { id: 3, image: "/assets/dress/dress-3.jpg", title: "Urban Cityscape" },
    { id: 4, image: "/assets/dress/dress-4.jpg", title: "Natural Serenity" },
  ];
  return (
    <div className="w-full h-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.image}
              alt="logo"
              className="rounded-md w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
