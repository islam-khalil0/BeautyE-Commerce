import React from 'react';
import style from "../ForgetPassword/ForgetPassword.module.css"
import image1 from "../../assets/Lock.png"
export default function Forget() {
  return (
    <div className={style.container}> 
      <div className={style.box1}>
        <p className={style.Diva}>DIVA</p>
        <a className={style.text1} href="/login">Back to login</a>
        <p className={style.text2}>Forgot Password</p>
        <p className={style.text3}>Send a verification code to your email to reset your password </p>
        <label className={style.email}>Email</label>
        <input className={style.email2} type="text"></input>
        <button className={style.btn1} type="submit"> Send a vervication code</button>


      </div>
      <div className={style.box2}>
        <img  className={style.image} src={image1}/>
            </div>
    </div>
  );
}