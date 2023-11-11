import "./Header.css"
import logo from '../../assets/image/Logo-background-transfer.png'
import {BiLogIn, BiUser} from "react-icons/bi";
import {BsSearch} from "react-icons/bs";
import {HiOutlineBars3} from "react-icons/hi2";
import React, {useEffect, useRef, useState} from "react";
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import {Link, useNavigate} from "react-router-dom";
import {AiFillHeart} from "react-icons/ai";

export default function Header() {
    const [isOpenNavbarMobile, setOpenNavbarMobile] = useState(false)
    const [isShowUserMenu, setIsShowUserMenu] = useState(false)
    const [isAuthentication, setIsAuthentication] = useState(true)
    const userMenuRef = useRef(null)
    const navigate = useNavigate()
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setIsShowUserMenu(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const handleButtonClick = () => {
        setIsShowUserMenu((prevState) => !prevState);
    };
    const handleGoPage = () => {
        navigate('tim-kiem')
    }
    return (
        <header className="header">
            <NavbarMobile isOpenNavbarMobile={isOpenNavbarMobile}
                          setOpenNavbarMobile={setOpenNavbarMobile}
                          isAuthentication={isAuthentication}/>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <button
                        onClick={() => setOpenNavbarMobile(true)}
                        className="navbar-toggler sidebar-toggle bg-white me-2"
                        type="button"
                    >
                        <HiOutlineBars3 style={{width: '1.5rem', height: '1.5rem'}}/>
                    </button>
                    <div className="d-flex align-items-center">
                        <Link to={'/'}>
                            <img src={logo} alt=""
                                 style={{width: "120px", height: "150%"}}/>
                        </Link>
                    </div>
                    <div className="ms-2 collapse navbar-collapse navbar-middle" id="navbarSupportedContent">
                        {
                            isAuthentication ?
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0  navbar-login-items">
                                    <li className="nav-item">
                                        <a className="nav-link icon" aria-current="page" href="/">
                                            <AiFillHeart style={{width: "2rem", height: "2rem"}}/>
                                            <span className="description-icon">Tìm người yêu</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="/">
                                            <AiFillHeart style={{width: "2rem", height: "2rem"}}/>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="/">
                                            <AiFillHeart style={{width: "2rem", height: "2rem"}}/>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="/">
                                            <AiFillHeart style={{width: "2rem", height: "2rem"}}/>
                                        </a>
                                    </li>
                                </ul> :
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="/">
                                            Tìm hiểu
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="/">
                                            An toàn
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="/">
                                            Hỗ trợ
                                        </a>
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
                    {
                        !isAuthentication ?
                            <div className="float-lg-end lien-login-btn">
                                <button className="d-flex align-items-center"><BiLogIn/>
                                    <span>
                                Đăng nhập
                            </span>
                                </button>
                            </div> :
                            <div className="float-lg-end lien-login-btn">
                                <button ref={userMenuRef} className="position-relative"
                                        onClick={handleButtonClick}>
                                    <BiUser className="me-0"/>
                                    {
                                        isShowUserMenu && <div className={`user-menu`}>
                                            <ul className="position-relative">
                                                <li>
                                                    <a href={'/thong-tin'}>Thông tin</a>
                                                </li>
                                                <li><a href={'/lich-su'}>Lịch sử</a></li>
                                                <li>
                                                    <a href={'/cai-dat'}>Cài đặt</a>
                                                </li>
                                                <hr/>
                                                <li onClick={() => setIsAuthentication(false)}>
                                                    <p>Đăng xuất</p>
                                                </li>
                                                <span></span>
                                            </ul>
                                        </div>
                                    }
                                </button>
                            </div>
                    }
                </nav>
            </div>
        </header>
    )
}