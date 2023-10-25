import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../layouts/Navbar/index";
import Footer from "../layouts/Footer/index";
import Home from "../pages/Home/index";
import Sunscreen from "../pages/Sunscreen/index";
import {Index} from "../components/Sidebar/index";


const Routers = () => {
  return (
    <div>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sunscreen" element={<Sunscreen />} />
        <Route path="/sidebar" element={<Index />} />
      
      </Routes>

      {/* <Footer /> */}
    </div>
  );
};

export default Routers;
