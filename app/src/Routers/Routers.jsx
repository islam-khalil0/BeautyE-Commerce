import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../layouts/Navbar/index";
import Footer from "../layouts/Footer/index";
import Home from "../pages/Home/index";
import Sunscreen from "../pages/Sunscreen/index";
import DashboardLogin from "../pages/DashboardLogin/index";
import ForgetPassword from "../pages/ForgetPassword/index";
import Login from "../pages/Login/index";
import SignUp from "../pages/Signup/index";
import Index from "../components/SideBar/index";
import Forget from "../pages/ForgetPassword/index";
import Verification from "../pages/Verification/index"

const Routers = () => {
  const isDashboardLogin = window.location.pathname === "/Dashboard-login";
  const isForgetPassword = window.location.pathname === "/Forget-password";
  const isLogin = window.location.pathname === "/login";
  const isSignUp = window.location.pathname === "/sign-up";

  return (
    <div>
      {isDashboardLogin ? null : isForgetPassword ? null : isLogin ? null : isSignUp ? null : (
        <Navbar /> 
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sunscreen" element={<Sunscreen />} />
        <Route path="/dashboard-login" element={<DashboardLogin />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sidebar" element={<Index />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/verification" element={<Verification />} />
      </Routes>

      {isDashboardLogin ? null : isForgetPassword ? null : isLogin ? null : isSignUp ? null : (
        <Footer />
      )}
    </div>
  );
};

export default Routers;
