import React, { useState } from "react";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Styles from './navbar.module.css'
import { AiOutlineUser } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const index = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
<>
<Container>
        <div className={Styles.navbar_desktop}>
          <div className="d-flex justify-content-between align-items-center py-3">
            <div>
              <Link to="/" className={Styles.logo}>
                DIVI
              </Link>
            </div>

            <input
              type="text"
              className={`${Styles.search_input} mx-3`}
              placeholder="Search for product or brand"
            />
            <div className="d-flex align-items-center gap-4">
              <Nav.Link as={Link} className="">
                <AiOutlineUser />
                <span className={Styles.user_icon}>Account</span>
              </Nav.Link>
              <Nav.Link>
                <div className="position-relative">
                  <BsBag />
                  <span className={Styles.cart_icon}>Cart</span>
                  <Badge className={`${Styles.badge} bg-black`}>0</Badge>
                </div>
              </Nav.Link>
            </div>
          </div>
          <Navbar expand="lg" className={`${Styles.navbar} p-0 p-lg-2`}>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="d-flex w-100 justify-content-evenly">
                <Nav.Link as={NavLink} to="/">
                  Brands
                </Nav.Link>
                <Nav.Link as={NavLink} to="/sunscreen">
                  Sunscreen
                </Nav.Link>
                <Nav.Link as={NavLink} to="#link">
                  Browse by
                </Nav.Link>
                <Nav.Link as={NavLink} to="#link">
                  Bestsellers
                </Nav.Link>
                <Nav.Link as={NavLink} to="#link">
                  Skin care
                </Nav.Link>
                <Nav.Link as={NavLink} to="#link">
                  Hair care
                </Nav.Link>
                <Nav.Link as={NavLink} to="#link">
                  Makeup
                </Nav.Link>
                <Nav.Link as={NavLink} to="#link">
                  Tools & devices
                </Nav.Link>
                <Nav.Link as={NavLink} to="#link">
                  Bath & body
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <div className={Styles.navbar_mobile}>
          <div className="d-flex justify-content-between align-items-center py-3">
            <div className="d-flex gap-2  align-items-center">
              <h4 className={`${Styles.toggle} m-0`} onClick={() => setOpenNav(!openNav)}>
                <FaBars />
              </h4>

              <Link to="/" className={Styles.logo}>
                DIVI
              </Link>
            </div>
            <div className="d-flex align-items-center gap-4">
              <Link>
              <AiOutlineUser className="text-dark"/>
                <span className={Styles.user_icon}>User</span>
              </Link>
              <Link>
                <div className="position-relative">
                <BsBag className="text-dark"/>
                  <span className={Styles.cart_icon}>Cart</span>
                  <Badge className={`${Styles.badge} bg-black`}>0</Badge>
                </div>
              </Link>
            </div>
          </div>
          {openNav && (
            <div className={Styles.navs}>
              <Nav.Link as={NavLink} className="py-1" to="/">
                Brands
              </Nav.Link>
              <Nav.Link as={NavLink} className="py-1" to="/sunscreen">
                Sunscreen
              </Nav.Link>
              <Nav.Link as={NavLink} className="py-1" to="#link">
                Browse by
              </Nav.Link>
              <Nav.Link as={NavLink} className="py-1" to="#link">
                Bestsellers
              </Nav.Link>
              <Nav.Link as={NavLink} className="py-1" to="#link">
                Skin care
              </Nav.Link>
              <Nav.Link as={NavLink} className="py-1" to="#link">
                Hair care
              </Nav.Link>
              <Nav.Link as={NavLink} className="py-1" to="#link">
                Makeup
              </Nav.Link>
              <Nav.Link as={NavLink} className="py-1" to="#link">
                Tools & devices
              </Nav.Link>
              <Nav.Link as={NavLink} className="py-1" to="#link">
                Bath & body
              </Nav.Link>
            </div>
          )}
          <input type="text" placeholder="Search for product or brand" className={Styles.search_input} />
        </div>
      </Container>
</>
  )
}

export default index