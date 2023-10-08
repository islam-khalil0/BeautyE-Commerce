import React from "react";
import Styles from "./sunscreen.module.css";
import Checkbox1 from "../../components/CheckBoxOne/Checkbox1";
import { Checkbox2 } from "../../components/CheckBoxTwo/Checkbox2";
import { Productrating } from "../../components/Rating/Productrating";
import { Size } from "../../components/Size/Size";
import { Colors } from "../../components/Colors/Colors";

const index = () => {
  return (
    <div className={Styles.section_sunscreen}>
      <div className={Styles.container}>
        <div className={Styles.side_bar}>
          {/* <Checkbox1 /> */}
          <Checkbox2 />
          <Checkbox2 />
          <Productrating />
          <Size />
          <Colors />
        </div>
        <div className={Styles.content}></div>
      </div>
    </div>
  );
};

export default index;
