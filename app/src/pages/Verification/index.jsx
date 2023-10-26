import React from 'react';
import style1 from "../Verification/Verification.module.css"; 
import image1 from "../../assets/Ellipse 4.png"
import image2 from "../../assets/Group 11.png"
import image3 from "../../assets/Vector(2).png"
import image4 from "../../assets/Long Shadow.png"
export default function Verification() {
  return (
    <div className={style1 .container}>
      <div className={style1 .box1}>
        <p className={style1 .Diva}>DIVA</p>
        <a className={style1 .text1} href="/login">Back to login</a>
        <p className={style1 .text2}>Password Reset</p>
        <p className={style1 .text3}>We sent a code to your email </p>
        <div className={style1.code}>
            <input className={style1.code2} type="text"/>
            <input className={style1.code2} type="text"/>
            <input className={style1.code2}  type="text"/>
            <input className={style1.code2} type="text"/>
            </div>
        <button className={style1 .btn1} type="submit"> Continue</button>
        <p className={style1 .text4}>Didn't receive the email? <a href="#"> Click to resend </a></p>


      </div>
      <div className={style1 .box2}>
      <img className={style1 .image1} src={image1}/>
      <img className={style1 .image2} src={image2}/>
      <img className={style1 .image3} src={image3}/>
      <img className={style1 .image4} src={image4}/>
      
      
      
      </div>
    </div>
  );
}