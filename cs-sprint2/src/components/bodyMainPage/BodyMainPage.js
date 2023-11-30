import React from 'react';
import './BodyMainPage.css'
import {useNavigate} from "react-router-dom";
import cate1 from "./img/cate1.jpeg"
const BodyMainPage = () => {
    const navigate = useNavigate();
    const goRegisterPage = ()=>{
        navigate(`register`)
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
            <div className="feedbacks">
                <div className="feedback-list">
                    <section id="card1" className="card">
                        <div className="card">
                            <div className="bg" style={{ backgroundImage: 'url(cate1)' }}></div>
                            <div className="blob"></div>
                        </div>

                    </section>
                    <section id="card2" className="card">
                        <div className="card">
                            <div className="bg" style={{ backgroundImage: 'url(cate1)' }}></div>
                            <div className="blob"></div>
                        </div>

                    </section>
                    <section id="card3" className="card">
                        <div className="card">
                            <div className="bg" style={{ backgroundImage: 'url(cate1)' }}></div>
                            <div className="blob"></div>
                        </div>

                    </section>
                    <section id="card4" className="card">
                        <div className="card">
                            <div className="bg" style={{ backgroundImage: 'url(cate1)' }}></div>
                            <div className="blob"></div>
                        </div>

                    </section>

                </div>
            </div>
            <div className="feedbacks">
                <div className="feedback-list">
                    <section id="card1" className="card">
                        <div className="card">
                            <div className="bg" style={{ backgroundImage: 'url(cate1)' }}></div>
                            <div className="blob"></div>
                        </div>

                    </section>
                    <section id="card2" className="card">
                        <div className="card">
                            <div className="bg" style={{ backgroundImage: 'url(cate1)' }}></div>
                            <div className="blob"></div>
                        </div>

                    </section>
                    <section id="card3" className="card">
                        <div className="card">
                            <div className="bg" style={{ backgroundImage: 'url(cate1)' }}></div>
                            <div className="blob"></div>
                        </div>

                    </section>
                    <section id="card4" className="card">
                        <div className="card">
                            <div className="bg" style={{ backgroundImage: 'url(cate1)' }}></div>
                            <div className="blob"></div>
                        </div>

                    </section>

                </div>
            </div>
        </section>
    );
};

export default BodyMainPage;