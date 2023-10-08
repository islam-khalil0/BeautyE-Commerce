import React from "react";
import Styles from "./brandCard.module.css";
import imageBrand from "../../assets/brandImg.png";

const index = () => {
  return (
    <div className={Styles.brandCard}>
      <img src={imageBrand} />
      <h5>Brand Name</h5>
    </div>
  );
};

export default index;
