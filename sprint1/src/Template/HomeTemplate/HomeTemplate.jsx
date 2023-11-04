import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./../../components/Header";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "./../../components/Footer";
const HomeTemplate = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Outlet />
      <Footer />
    </>
  );
};

export default React.memo(HomeTemplate);
