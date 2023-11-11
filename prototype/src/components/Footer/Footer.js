import React from 'react';
import './Footer.css'
import {BsFacebook, BsInstagram, BsTwitter, BsYoutube} from "react-icons/bs";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-content">
                    <div className="footer-items">
                        <h2>Chính sách</h2>
                        <ul>
                            <li>Chính sách Cookie</li>
                            <li>Điều khoản</li>
                            <li>Quyền riêng tư</li>
                            <li>Sở hữu trí tuệ</li>
                        </ul>
                    </div>
                    <div className="footer-items">
                        <h2>Quick Links</h2>
                        <ul>
                            <li>Về chúng tôi</li>
                            <li>Các điều khoản và điều kiện</li>
                            <li>Chính sách bảo mật</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div className="footer-items">
                        <h2>Sitemap</h2>
                        <ul>
                            <li>Tìm hiểu</li>
                            <li>An toàn</li>
                            <li>Hỗ trợ</li>
                            <li>Liên lạc</li>
                        </ul>
                    </div>
                    <div className="footer-items">
                        <h2>Thông tin</h2>
                        <ul className="info">
                            <li>
                                <i className="bi bi-geo-alt-fill"></i>
                                ABCD, ABCD, Viet Nam
                            </li>
                            <li><i className="bi bi-envelope-fill"></i> c0523g1@gmail.com</li>
                            <li><i className="bi bi-telephone-fill"></i> (+84)12-345-6789</li>
                        </ul>
                        <ul className="social">
                            <li>
                                <BsFacebook/>
                            </li>
                            <li>
                                <BsTwitter/>
                            </li>
                            <li>
                                <BsYoutube/>
                            </li>
                            <li>
                                <BsInstagram/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-content">
                    <div>
                        <span>© 2023 All rights reserved | </span>
                        <span className="copyright__content">Designed by C0523G1</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;