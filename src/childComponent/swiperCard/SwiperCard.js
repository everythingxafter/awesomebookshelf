import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "./swipercard.css";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/free-mode/free-mode.min.css";
import "swiper/modules/autoplay/autoplay.min.css";

const SwiperCard = ({ children }) => {
  const [slidesPerView, setSlidesPerView] = useState(5);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        setSlidesPerView(5);
      } else if (screenWidth >= 992) {
        setSlidesPerView(4);
      } else if (screenWidth >= 768) {
        setSlidesPerView(3);
      } else if (screenWidth >= 520) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    }

    // add event listener for window resize
    window.addEventListener("resize", handleResize);

    // call the function once on mount
    handleResize();

    // cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay, Navigation]}
        className="landing-ibook__swiper-card"
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
      >
        {children}
      </Swiper>
    </>
  );
};

export default SwiperCard;
