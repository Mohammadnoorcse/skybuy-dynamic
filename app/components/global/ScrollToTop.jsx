// app/components/ScrollToTop.jsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]); // trigger on route change

  return null;
};

export default ScrollToTop;
