import React from "react";
import "./Carousel.css";
const Carousel = () => {
    return (
        <section className="carousel">
            <div className="description">
                <h1 className="typeing-text">Yêu nhau đê, tui mợt mỏi rồi!</h1>
            </div>
            <div className="carousel-btn d-flex justify-content-center align-items-center">
                <button className="btn btn-success">Đăng Ký Ngay</button>
            </div>
        </section>
    );
};

export default React.memo(Carousel);