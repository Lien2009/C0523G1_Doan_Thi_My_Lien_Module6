import React from 'react';
import './BodyMainPage.css'
import {Link, useNavigate} from "react-router-dom";
import imag5 from "./img/imag5.jpg"
import imag4 from "./img/imag4.jpg"
import cate3 from "./img/cate3.jpg"

const BodyMainPage = () => {
    const navigate = useNavigate();
    const goRegisterPage = () => {
        navigate(`register`)
    }
    const goProductPage = ()=>{
        navigate(`product`)
    }
    return (
        <section className="body-main-page">
            <div className="carousel">
                <div className="carousel-content">
                    <div className="description">
                        <h2 className="typeing-text">Ăn là mê – chê không tính tiền</h2>
                    </div>
                    <div className="lien-carousel-btn d-flex justify-content-center align-items-center">
                        <button className="btn" onClick={goRegisterPage}>
                            Đăng Ký Ngay
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
                                    <h5>Welcome at</h5>
                                    <h2>Smarteye restaurant</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in
                                        voluptate velit esse cillum dolore.</p>
                                    <p>There are many variations of passages of Lorem Ipsum available,
                                        but the majority have suffered alteration in some form, by injected
                                        humour, or randomised words which don't look even slightly believable.
                                        If you are going to use a passage of Lorem Ipsum, you need to be sure
                                        there isn't anything embarrassing hidden in the middle of text.
                                        All the</p>
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
                    {/*<Link to="/product">*/}
                        <div className="card">
                            <div className="lien-bg"><img src={cate3}/></div>
                            <div className="blob"></div>
                            <div className="card-text" onClick={goProductPage}>Combo 1 Người <i className="fa-solid fa-angle-right fa-beat"
                                                                        style={{color: "white"}}></i></div>
                        </div>
                    {/*</Link>*/}
                    <div className="card">
                        <div className="lien-bg"><img src={cate3}/></div>
                        <div className="blob"></div>
                        <div className="card-text">Combo Nhóm <i className="fa-solid fa-angle-right fa-beat"
                                                                    style={{color: "white"}}></i></div>
                    </div>
                    <div className="card">
                        <div className="lien-bg"><img src={cate3}/></div>
                        <div className="blob"></div>
                        <div className="card-text">Gà Rán <i className="fa-solid fa-angle-right fa-beat"
                                                                    style={{color: "white"}}></i></div>
                    </div>
                    <div className="card">
                        <div className="lien-bg"><img src={cate3}/></div>
                        <div className="blob"></div>
                        <div className="card-text">Hamburger <i className="fa-solid fa-angle-right fa-beat"
                                                                    style={{color: "white"}}></i></div>
                    </div>
                </div>
            </div>
            <div className="feedbacks">
                <div className="feedback-list">
                    <div className="card">
                        <div className="lien-bg" style={{backgroundImage: 'url(cate1)'}}></div>
                        <div className="blob"></div>
                    </div>
                    <div className="card">
                        <div className="lien-bg" style={{backgroundImage: 'url(cate1)'}}></div>
                        <div className="blob"></div>
                    </div>
                    <div className="card">
                        <div className="lien-bg" style={{backgroundImage: 'url(cate1)'}}></div>
                        <div className="blob"></div>
                    </div>
                    <div className="card">
                        <div className="lien-bg" style={{backgroundImage: 'url(cate1)'}}></div>
                        <div className="blob"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BodyMainPage;