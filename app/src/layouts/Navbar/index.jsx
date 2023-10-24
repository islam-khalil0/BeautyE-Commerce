import React, { useState } from "react";
import Styles from "./Navbar.module.css";
import { Badge, Container } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";

const index = () => {
  const [openNav, setOpenNav] = useState(false);
  const [iconNav, setIconNav] = useState(false);
  const [query, setQuery] = useState("");

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#fff" : "",
      backgroundColor: isActive ? "#000" : "",
    };
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Container className="position-relative">
        <div className={`${Styles.search_container} mt-2`}>
          <div className="d-flex gap-2 align-items-center">
            <span
              className={Styles.toggle}
              onClick={() => {
                setOpenNav(!openNav), setIconNav(!iconNav);
              }}
            >
              {iconNav ? <AiFillCloseCircle /> : <FaBars />}
            </span>
            <span className={Styles.logo}>DIVI</span>
          </div>

          <div className={Styles.search_desktop}>
            <input
              type="text"
              className={Styles.search_input}
              placeholder="Search for product or brand..."
              onChange={handleSearch}
              value={query}
            />
            <BiSearch className={Styles.search_icon} />
          </div>
          <div className={Styles.user_control}>
            <span className={Styles.account}>
              <AiOutlineUser />
              <p className="my-0 mx-2">Account</p>
            </span>
            <span className={Styles.cart}>
              <div className="position-relative">
                <BsBag />
                <Badge bg="dark" className={Styles.badge}>
                  0
                </Badge>
              </div>

              <p className="my-0 mx-2">Cart</p>
            </span>
          </div>
        </div>
        <div className={Styles.nav_bar}>
          <ul className={openNav ? Styles.open : ""}>
            <li>
              <NavLink style={navLinkStyles} to="/">Brands</NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyles} to="/sunscreen">Sunscreen</NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyles} to="/">Browse by</NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyles} to="/">Bestsellers</NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyles} to="/">Skin care</NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyles} to="/">Hair care</NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyles} to="/">Makeup</NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyles} to="/">Tools & devices</NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyles} to="/">Bath & body</NavLink>
            </li>
          </ul>
        </div>
        <div className={Styles.search_mobile}>
          <input
            type="text"
            className={Styles.search_input}
            placeholder="Search for product or brand..."
            onChange={handleSearch}
            value={query}
          />
          <BiSearch className={Styles.search_icon} />
        </div>
      </Container>
    </>
  )
}

export default index