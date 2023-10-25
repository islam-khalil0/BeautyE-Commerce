import React, { useState } from "react";
import Styles from "./login.module.css";
import logo from "../../assets/diva.png";
import mainPicture from "../../assets/mainPicture.png";
import topImg from "../../assets/topImg.png";
import topBg from "../../assets/topBg.png";
import underImg from "../../assets/underImg.png";
import underBg from "../../assets/underBg.png";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const index = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.form}>
        <img src={logo} width={150} />
        <form onSubmit={handleSubmit}>
          <span style={{ gap: "0" }}>
            <h6>login</h6>
            <p>Welcome Back,</p>
            <small>please enter your details</small>
          </span>
          <span>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <small
              style={{
                textDecoration: "underline",
                cursor: "pointer",
                margin: "1rem 0 0 0 ",
              }}
            >
              forget your password?
            </small>
          </span>
          <button type="submit" style={{ alignSelf: "center" }}>
            login
          </button>
        </form>
        <p>or</p>
        <span className={Styles.icons}>
          <AiOutlineGooglePlus />
          <FaFacebookF />
          <BsInstagram />
        </span>
        <p>
          don't have an account ?{" "}
          <span style={{ color: "#155293" }}> sign up</span>
        </p>
      </div>
      <div className={Styles.images}>
        <div className={Styles.mainPicture}>
          <img src={mainPicture} />

          {/* other images */}
          <img src={topImg} />
          <img src={topBg} />
          <img src={underImg} />
          <img src={underBg} />
        </div>
      </div>
    </div>
  );
};

export default index;
