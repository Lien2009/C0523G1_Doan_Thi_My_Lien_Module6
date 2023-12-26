import React, {useEffect, useState} from 'react';
import './NavbarMobile.css'
import {Link, useNavigate} from "react-router-dom";
import logo from "./img/logo.jpg"
const getWindowDimensions = () => {
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    };
}

const NavbarMobile = ({isOpenNavbarMobile, setOpenNavbarMobile, isAuthentication}) => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const navigate = useNavigate()
    const [name, setName] = useState("");
    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        if (+windowDimensions.width > 991) {
            setOpenNavbarMobile(false)
        }
        return () => window.removeEventListener('resize', handleResize);
    }, [windowDimensions, setOpenNavbarMobile]);

    return (
        <>
            <div className={`navbar-mobile ${isOpenNavbarMobile && 'active'}`}>
                <div className="navbar-mobile-content">
                    <div className="close-btn" onClick={() => setOpenNavbarMobile(false)}>
                        close
                        <i className="fa-regular fa-circle-xmark fa-flip"></i>
                    </div>
                    <h1 className="logo">
                        <div className={'pt-3'}>
                            {isAuthentication ?
                                <Link to="/">
                                    <img src={logo}
                                         alt=""
                                         style={{width: "130px", height: "150%"}}/>
                                </Link> :
                                <Link to="/">
                                    <img src={logo}
                                         alt=""
                                         style={{width: "130px", height: "150%"}}/>
                                </Link>
                            }
                        </div>
                    </h1>
                    <ul className="list-navbar-items">
                                <li className="navbar-item">
                                    <Link to="/" className="d-flex align-items-center"><i
                                        className="fa-solid fa-house text-white"></i>Trang chủ</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/invited_recommend_friend/RecommendList" className="d-flex align-items-center"><i
                                        className="fa-solid fa-user-plus text-white"></i>Tìm hiểu</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/top_hundered" className="d-flex align-items-center"><i
                                        className="fa-solid fa-crown text-white"></i>Thực đơn</Link>
                                </li>
                            </ul>
                    <form>
                        <div className="input-group">
                            <div className='search-btn'>
                                    <span className="input-group-text">
                                         <i className="fa-solid fa-magnifying-glass" style={{color: "#9D66C3"}}></i>
                                    </span>
                            </div>
                            <input type="text" className="form-control"
                                   placeholder="Nhập món" aria-label="Username" aria-describedby="addon-wrapping"
                            />
                        </div>
                    </form>
                </div>
            </div>
            <div className={`overlay ${isOpenNavbarMobile && 'active'}`}
                 onClick={() => setOpenNavbarMobile(false)}></div>
        </>
    );
};

export default NavbarMobile;