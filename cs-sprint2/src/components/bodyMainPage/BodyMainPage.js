import React, {useEffect, useState} from 'react';
import './BodyMainPage.css'
import {Link, useNavigate} from "react-router-dom";
import imag5 from "./img/imag5.jpg"
import imag4 from "./img/imag4.jpg"
import cate3 from "./img/cate3.jpg"
import {getAllCategory} from "../../service/productService";

const BodyMainPage = () => {
    const navigate = useNavigate();
    const [categories, setCagories] = useState([]);
    const goRegisterPage = () => {
        navigate(`/register`)
    }
    const goAllProductPage = () => {
        navigate(`/allProduct`)
    }
    const goProductPage = (id) => {
        navigate(`/product/${id}`)
    }
    useEffect(() => {
        display();
    }, []);
    const display = async () => {
        const res = await getAllCategory();
        setCagories(res.data);
    }
    return (
        <section className="body-main-page">
            <div className="carousel">
                <div className="carousel-content">
                    <div className="description">
                        <h2 className="typeing-text">Ăn là mê – chê không tính tiền</h2>
                    </div>
                    <div className="lien-carousel-btn d-flex justify-content-center align-items-center">
                        <button className="btn" onClick={goAllProductPage}>
                            Chọn Món Ngay
                        </button>
                    </div>
                </div>
            </div>
            <section className="bg-01">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="wrapper">
                                <div className="content">
                                    <ol>
                                        <li><img src={imag5}/></li>
                                        <li><img src={imag4}/></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="wrapper">
                                <div className="content">
                                    <h5>CHÀO MỪNG ĐẾN VỚI</h5>
                                    <h2>LC FOODS</h2>
                                    <p>Nắm bắt nhu cầu của người tiêu dùng Việt Nam hiện nay, chúng tôi mong muốn phục
                                        vụ những bữa ăn nhanh nhưng hợp vệ sinh, đầy đủ dưỡng chất cùng với cung cách
                                        phục vụ chuyên nghiệp, LCFoods cam kết sẽ làm bạn hài lòng với dòng sản phẩm
                                        chất lượng. Không chỉ nổi tiếng về thức ăn ngon, LSFoods còn nổi tiếng về chuỗi
                                        tiêu chuẩn Chất Lượng, Dịch Vụ, Vệ Sinh và Giá trị.</p>
                                    <p>Chúng tôi cam kết không ngừng nâng cao chất lượng dịch vụ và mang đến những trải
                                        nghiệm thú vị cho khách
                                        hàng qua những sản phẩm luôn được yêu thích như món khoai tây chiên lừng danh
                                        thế giới French Fries, bánh burger Big Mac, hay Chicken McNuggets, và trên hết
                                        là những trải nghiệm mà bạn chỉ có thể có được khi mua hàng tại LCFoods.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="heading">
                <h1>DANH MỤC <span>MÓN ĂN</span></h1>
            </div>
            <div className="feedbacks">
                <div className="feedback-list">
                    {categories !== undefined?(
                        categories.map((cate,index)=>{
                            return(
                                <div className="card" key={index}>
                                    <div className="lien-bg"><img src={cate.image}/></div>
                                    <div className="blob"></div>
                                    <div className="card-text" onClick={() => goProductPage(cate.id)}>{cate.name}<i
                                        className="fa-solid fa-angle-right fa-beat"
                                        style={{color: "white"}}></i></div>
                                </div>
                            )
                        })
                    ):(<span>Không có kết quả</span>)}
                {/*    /!*<Link to="/product">*!/*/}
                {/*    <div className="card">*/}
                {/*        <div className="lien-bg"><img src={cate3}/></div>*/}
                {/*        <div className="blob"></div>*/}
                {/*        <div className="card-text" onClick={goProductPage}>Combo 1 Người <i*/}
                {/*            className="fa-solid fa-angle-right fa-beat"*/}
                {/*            style={{color: "white"}}></i></div>*/}
                {/*    </div>*/}
                {/*    /!*</Link>*!/*/}
                {/*    <div className="card">*/}
                {/*        <div className="lien-bg"><img src={cate3}/></div>*/}
                {/*        <div className="blob"></div>*/}
                {/*        <div className="card-text">Combo Nhóm <i className="fa-solid fa-angle-right fa-beat"*/}
                {/*                                                 style={{color: "white"}}></i></div>*/}
                {/*    </div>*/}
                {/*    <div className="card">*/}
                {/*        <div className="lien-bg"><img src={cate3}/></div>*/}
                {/*        <div className="blob"></div>*/}
                {/*        <div className="card-text">Gà Rán <i className="fa-solid fa-angle-right fa-beat"*/}
                {/*                                             style={{color: "white"}}></i></div>*/}
                {/*    </div>*/}
                {/*    <div className="card">*/}
                {/*        <div className="lien-bg"><img src={cate3}/></div>*/}
                {/*        <div className="blob"></div>*/}
                {/*        <div className="card-text">Hamburger <i className="fa-solid fa-angle-right fa-beat"*/}
                {/*                                                style={{color: "white"}}></i></div>*/}
                {/*    </div>*/}
                </div>
            </div>
            {/*<div className="feedbacks">*/}
            {/*    <div className="feedback-list">*/}
            {/*        <div className="card">*/}
            {/*            <div className="lien-bg" style={{backgroundImage: 'url(cate1)'}}></div>*/}
            {/*            <div className="blob"></div>*/}
            {/*        </div>*/}
            {/*        <div className="card">*/}
            {/*            <div className="lien-bg" style={{backgroundImage: 'url(cate1)'}}></div>*/}
            {/*            <div className="blob"></div>*/}
            {/*        </div>*/}
            {/*        <div className="card">*/}
            {/*            <div className="lien-bg" style={{backgroundImage: 'url(cate1)'}}></div>*/}
            {/*            <div className="blob"></div>*/}
            {/*        </div>*/}
            {/*        <div className="card">*/}
            {/*            <div className="lien-bg" style={{backgroundImage: 'url(cate1)'}}></div>*/}
            {/*            <div className="blob"></div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </section>
    );
};

export default BodyMainPage;