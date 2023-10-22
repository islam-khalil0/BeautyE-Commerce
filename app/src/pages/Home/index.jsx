import React, { useState } from "react";
import Styles from "./Home.module.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import OffersSection from "../../components/OffersSection/index";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MdFavoriteBorder } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";

import BrandCard from "../../components/BrandCard/index";

const sliderHome = [1, 2, 3, 4, 5, 6];
const brandProductsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const data = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSNBYXudKZdS1qhvlANYZ6bde369xX2QAEMg&usqp=CAU",
    desc: "lorem",
    price: 33,
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSNBYXudKZdS1qhvlANYZ6bde369xX2QAEMg&usqp=CAU",
    desc: "lorem",
    price: 33,
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSNBYXudKZdS1qhvlANYZ6bde369xX2QAEMg&usqp=CAU",
    desc: "lorem",
    price: 33,
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSNBYXudKZdS1qhvlANYZ6bde369xX2QAEMg&usqp=CAU",
    desc: "lorem",
    price: 33,
  },
  {
    id: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSNBYXudKZdS1qhvlANYZ6bde369xX2QAEMg&usqp=CAU",
    desc: "lorem",
    price: 33,
  },
  {
    id: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSNBYXudKZdS1qhvlANYZ6bde369xX2QAEMg&usqp=CAU",
    desc: "lorem",
    price: 33,
  },
  {
    id: 7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSNBYXudKZdS1qhvlANYZ6bde369xX2QAEMg&usqp=CAU",
    desc: "lorem",
    price: 33,
  },
];

const index = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules

        modules={[Navigation, Pagination]}
        className="my-5"
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {sliderHome.map((_item) => (
          <SwiperSlide>
            <Row className={Styles.home}>
              <Col md={6} className={Styles.img_content}>
                <img
                  className="d-block w-100"
                  src="https://cdn.logojoy.com/wp-content/uploads/20191023114758/AdobeStock_224061283-min.jpeg"
                  alt=""
                />
              </Col>
              <Col md={6} className="d-flex align-items-center">
                <div className="p-3" style={{ margin: "0 0 50px 20px" }}>
                  <h2>
                    New from Eminence <br className="d-none d-md-block" />{" "}
                    Organic Skin Care
                  </h2>
                  <p className="py-2">
                    Mineral protection that guards against sun{" "}
                    <br className="d-none d-md-block" /> damage & leaves skin
                    looking radiant.
                  </p>
                  <Button className="px-4">Shop now</Button>
                </div>
              </Col>
            </Row>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* brands card */}
      <Container className="my-4">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination]}
          style={{ padding: "3rem 0" }}
          spaceBetween={40}
          slidesPerView={2}
          breakpoints={{
            576: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {data.map((item) => (
            <SwiperSlide>
              <Card>
                <img src={item.img} alt="" />
                <div className="body-card p-2">
                  <div className="d-flex justify-content-between align-content-center ">
                    <div>
                      <p className="fw-bold m-0">Brand Name</p>
                      <p className="m-0">Brand information</p>
                    </div>
                    <div>
                      <MdFavoriteBorder />
                    </div>
                  </div>
                  <div className="rating">
                    <AiFillStar className="text-warning" />
                    <AiFillStar className="text-warning" />
                    <AiFillStar className="text-warning" />
                    <AiFillStar className="text-warning" />
                    <AiFillStar className="text-warning" />
                    <span className="rating-num">(5085)</span>
                  </div>
                  <p className="py-2 m-0">EGP 55.00</p>
                  <Button className="w-100">
                    <MdAddShoppingCart /> Add to cart
                  </Button>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      <OffersSection />

      <div className={Styles.container}>
        <h3>Brands</h3>
        <div className={Styles.brands}>
          {brandProductsArray.map((item) => {
            return <BrandCard key={item} {...item} />;
          })}
        </div>
      </div>

      <OffersSection />
    </div>
  );
};

export default index;
