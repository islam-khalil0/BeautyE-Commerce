import React from "react";
import Styles from "./offersSection.module.css";
import image from "../../assets/offersImg.png";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ProductCard from "../../components/ProductCard/index";

const index = () => {
  const productsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={Styles.container}>
      <div className={Styles.offers_section}>
        <div className={Styles.image}>
          <h5>20% off RevitaLash Cosmetics</h5>
          <p>
            Save on formulas for bolder, fuller & healthier looking brows &
            lashes with code LASH20
          </p>
          <img src={image} />
        </div>
        <div className={Styles.swiper_div}>
          <Swiper
            className={Styles.swiper}
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView="auto"
            navigation
          >
            {productsArray.map((item) => {
              return (
                <SwiperSlide key={item} className={Styles.swiper_slide}>
                  <ProductCard {...item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className={Styles.effect}></div>
        </div>
      </div>
    </div>
  );
};

export default index;
