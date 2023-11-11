import React, {useEffect, useState} from 'react';
import './NavbarMobile.css'
import {AiOutlineClose, AiOutlineHeart, AiOutlineSafety} from "react-icons/ai";
import logo from "../../assets/image/Logo-background-transfer.png";
import {BiSupport} from "react-icons/bi";
import {TbCirclesRelation} from "react-icons/tb";
import {BsSearch} from "react-icons/bs";
import {useNavigate} from "react-router-dom";

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

    const handleGoPage = () => {
        navigate('tim-kiem')
        setOpenNavbarMobile(false)
    }
    return (
        <>
            <div className={`navbar-mobile ${isOpenNavbarMobile && 'active'}`}>
                <div className="navbar-mobile-content">
                    <div className="close-btn" onClick={() => setOpenNavbarMobile(false)}>
                        close
                        <AiOutlineClose/>
                    </div>
                    <h1 className="logo">
                        <div className={'pt-3'}>
                            <a href="/a">
                                <img src={logo}
                                     alt=""
                                     style={{width: "130px", height: "150%"}}/>
                            </a>
                        </div>
                    </h1>
                    {
                        isAuthentication ? <ul className="list-navbar-items">
                                <li className="navbar-item">
                                    <a href="/b" className="d-flex align-items-center"><AiOutlineHeart/> Tên ICon 1</a>
                                </li>
                                <li className="navbar-item">
                                    <a href="/c" className="d-flex align-items-center"><AiOutlineSafety/> Tên ICon 2</a>
                                </li>
                                <li className="navbar-item">
                                    <a href="/d" className="d-flex align-items-center"><BiSupport/>Tên ICon 3</a>
                                </li>
                                <li className="navbar-item">
                                    <a href="/d" className="d-flex align-items-center"><BiSupport/>Tên ICon 4</a>
                                </li>
                            </ul> :
                            <ul className="list-navbar-items">
                                <li className="navbar-item">
                                    <a href="/b" className="d-flex align-items-center"><TbCirclesRelation/>Tìm hiểu</a>
                                </li>
                                <li className="navbar-item">
                                    <a href="/c" className="d-flex align-items-center"><AiOutlineSafety/>An toàn</a>
                                </li>
                                <li className="navbar-item">
                                    <a href="/d" className="d-flex align-items-center"><BiSupport/>Hỗ trợ</a>
                                </li>
                            </ul>
                    }
                    <form>
                        <div className="input-group">
                            <div onClick={handleGoPage} className='search-btn'>
                                    <span className="input-group-text">
                                        <BsSearch/>
                                    </span>
                            </div>
                            <input type="text" className="form-control"
                                   placeholder="Nhập tên" aria-label="Username" aria-describedby="addon-wrapping"/>
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