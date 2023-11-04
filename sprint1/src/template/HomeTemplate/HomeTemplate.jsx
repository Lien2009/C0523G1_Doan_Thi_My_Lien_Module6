import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {Outlet} from "react-router-dom";
import Carousel from "../../components/Carousel";

const HomerTemplate = ()=>{
    return(
        <>
            <Header/>
            <Carousel/>
            <Outlet/>
            {/*render ra những nội dung nằm giữa header footer*/}
            <Footer/>
        </>
    )
}
export default React.memo(HomerTemplate);