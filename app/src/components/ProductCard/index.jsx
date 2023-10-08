import React from "react";
import Styles from "./ProductCard.module.css";
import { MdFavoriteBorder } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
import { Button, Card } from "react-bootstrap";
import imageProduct from "../../assets/imageProduct.png";

const index = () => {
  return (
    <div>
      <Card>
        <img src={imageProduct} alt="image Product" />
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
    </div>
  );
};

export default index;
