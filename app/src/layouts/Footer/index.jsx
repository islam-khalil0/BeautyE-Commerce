import React from "react";
import Styles from "./footer.module.css";
import { Button } from "react-bootstrap";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BsTiktok } from "react-icons/bs";

const index = () => {
  return (
    <div className={Styles.footerContainer}>
      <div className={Styles.topFooter}>
        <div className={Styles.signUp}>
          <p>
            Sign up to our newsletters and receive the latest exclusive
            discounts and deals
          </p>
          <Button className="w-30">Sign me up</Button>
        </div>
        <div className={Styles.contact}>
          <p>Connect with us</p>
          <div className={Styles.icons}>
            <span>
              <BiLogoFacebookCircle className={Styles.icon} />
            </span>
            <span>
              <AiFillTwitterCircle className={Styles.icon} />
            </span>
            <span>
              <AiFillInstagram className={Styles.icon} />
            </span>
            <span>
              <AiFillYoutube className={Styles.icon} />
            </span>
            <span>
              <BsTiktok />
            </span>
          </div>
        </div>
      </div>
      <div className={Styles.links}>
        <div className={Styles.CustomerService}>
          <h5>Customer Service</h5>
          <ul>
            <li>
              <p>Help Center / FAQs</p>
            </li>
            <li>
              <p>Returns</p>
            </li>
            <li>
              <p>Shipping Information</p>
            </li>
            <li>
              <p>Track my order</p>
            </li>
            <li>
              <p>Cookie Settings</p>
            </li>
          </ul>
        </div>
        <div className={Styles.MyAccount}>
          <h5>My Account</h5>
          <ul>
            <li>
              <p>My Rewards</p>
            </li>
            <li>
              <p>My Favorites</p>
            </li>
            <li>
              <p> Refer a Friend</p>
            </li>
            <li>
              <p>Order History</p>
            </li>
          </ul>
        </div>
        <div className={Styles.Company}>
          <h5> Company</h5>
          <ul>
            <li>
              <p>Affiliate Program</p>
            </li>
            <li>
              <p> About Us</p>
            </li>
            <li>
              <p>Press</p>
            </li>
            <li>
              <p>What is Klarna?</p>
            </li>
          </ul>
        </div>
        <div className={Styles.Legal}>
          <h5> Legal</h5>
          <ul>
            <li>
              <p>Privacy Policy </p>
            </li>
            <li>
              <p> Site Wide Exclusions </p>
            </li>
            <li>
              <p>Terms & Conditions</p>
            </li>
            <li>
              <p>Modern Slavery Statement</p>
            </li>
            <li>
              <p>Product Recall</p>
            </li>
            <li>
              <p>Accessibility</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
