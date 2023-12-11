import "./header.css"
import React, {useEffect, useRef, useState} from "react";
import NavbarMobile from "./NavbarMobile";
import {Link, useNavigate} from "react-router-dom";
import logo from "./img/logo.jpg";
import logo2 from "./img/logo2.png"
import cart from "./img/cart.jpg";
import {TbShoppingCartHeart} from "react-icons/tb";
import {getUserNameByJwt} from "../../service/userService";
import {Logout} from "../login/Logout";
import {toast} from "react-toastify";
import AllProduct from "../product/AllProduct";
import {getAllCategory} from "../../service/productService";
import Cart from "../cart/Cart";


export default function Header() {
    const [isOpenNavbarMobile, setOpenNavbarMobile] = useState(false)
    const [isAuthentication, setIsAuthentication] = useState(false)
    const [userName, setUserName] = useState(false)
    const navigate = useNavigate()
    const accessToken = localStorage.getItem('JWT')
    const [isShowModal, setShowModal] = useState(false);
    const [categories, setCagories] = useState([]);
    const goLoginPage = () => {
        navigate(`/login`)
    }

    useEffect(() => {
        const test = async () => {
            setUserName(getUserNameByJwt)
        }
        test();
    }, [accessToken])

    const handleModal = async () => {
        setShowModal(true);
    }
    const closeModal = async () => {
        setShowModal(false);
    }
    useEffect(() => {
        if (!accessToken) {
            setUserName(null);
        }
    }, [accessToken])
    useEffect(() => {
        display();
    }, []);
    const display = async () => {
        const res = await getAllCategory();
        setCagories(res.data);
    }
    const goProductPage = (id) => {
        navigate(`/product/${id}`)
    }
    const goBestSellerPage = () => {
        navigate(`/bestSeller`)
    }
    return (
        <header className="lien-header">
            <NavbarMobile isOpenNavbarMobile={isOpenNavbarMobile}
                          setOpenNavbarMobile={setOpenNavbarMobile}/>
            <Logout show={isShowModal}
                    handleClose={closeModal}/>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <button
                        onClick={() => setOpenNavbarMobile(true)}
                        className="navbar-toggler sidebar-toggle bg-white me-2"
                        type="button"
                    ><span className="navbar-toggler-icon"/>
                    </button>
                    <div className="d-flex align-items-center">
                        <Link to={'/'}>
                            <img src={logo2} alt="logo"
                                 style={{width: "6rem", borderRadius: "50%"}}/>
                        </Link>

                    </div>
                    <div className="ms-2 collapse navbar-collapse navbar-middle" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" aria-current="page">
                                    Trang chủ
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link" aria-current="page">
                                    Thông tin
                                </Link>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        Thực đơn
                                    </a>
                                    <ul className="dropdown-menu">
                                        {categories !== undefined ? (
                                            categories.map((cate, index) => {
                                                return (
                                                    <li key={index}><a className="dropdown-item"
                                                                       onClick={() => {if(index === 0){
                                                                           goBestSellerPage();
                                                                       }else {goProductPage(cate.id)}}}>{cate.name}</a>
                                                    </li>
                                                )
                                            })
                                        ) : (<span>Không có kết quả</span>)}

                                    </ul>
                                </div>
                            </li>
                        </ul>

                        {/*<form>*/}
                        {/*    <div className="input-group">*/}
                        {/*        <div className='search-btn'>*/}
                        {/*            <span className="input-group-text">*/}
                        {/*                 <i className="fa-solid fa-magnifying-glass" style={{color: "#e32929"}}></i>*/}
                        {/*            </span>*/}
                        {/*        </div>*/}
                        {/*        <input type="search" className="form-control"*/}
                        {/*               placeholder="Tìm kiếm món ăn" aria-label="Username"*/}
                        {/*               aria-describedby="addon-wrapping"*/}
                        {/*               onChange={(name)=>{setSearchName(name.target.value)}}*/}
                        {/*               onKeyDown={handleKeyDown}*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*</form>*/}
                    </div>
                    {
                        userName == null ?
                            <div className="float-lg-end lien-login-btn">
                                <button className="d-flex align-items-center icon">
                                    <i className="fa-solid fa-user" style={{color: "#e32929"}}
                                       onClick={goLoginPage}></i>
                                </button>
                            </div> :
                            <div className="float-lg-end info">
                                <div className="position-relative">
                                    <div className="dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button"
                                           data-bs-toggle="dropdown" aria-expanded="false">
                                            Hi, {userName}
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link to="/" className="dropdown-item">Trang cá nhân</Link>
                                            </li>
                                            <li>
                                                <Link to="/" className="dropdown-item">Lịch sử đặt hàng</Link>
                                            </li>
                                            {/*{currentRole === "ADMIN" &&*/}
                                            {/*    <li>*/}
                                            {/*        <Link to="/accounts" className="dropdown-item">Quản lý</Link>*/}
                                            {/*    </li>*/}
                                            {/*}*/}
                                            <hr/>
                                            <li onClick={() => handleModal()}>
                                                <p style={{fontFamily: "Nunito Sans, sans-serif"}}
                                                   className="dropdown-item">Đăng xuất</p>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*<span style={{color:"white",marginLeft:"0.5rem"}}>Hi, {userName}</span>*/}
                                    {/*{*/}
                                    {/*    isShowUserMenu && <div className={`user-menu`}>*/}
                                    {/*        <ul className="position-relative">*/}
                                    {/*            <li>*/}
                                    {/*                <Link to="/">Trang cá nhân</Link>*/}
                                    {/*            </li>*/}
                                    {/*            <li>*/}
                                    {/*                <Link to="/">Lịch sử đặt hàng</Link>*/}
                                    {/*            </li>*/}
                                    {/*            /!*{currentRole === "ADMIN" &&*!/*/}
                                    {/*            /!*    <li>*!/*/}
                                    {/*            /!*        <Link to="/accounts">Quản lý</Link>*!/*/}
                                    {/*            /!*    </li>*!/*/}
                                    {/*            /!*}*!/*/}
                                    {/*            <hr/>*/}
                                    {/*            <li>*/}
                                    {/*                <p style={{fontFamily: "Nunito Sans, sans-serif"}}>Đăng xuất</p>*/}
                                    {/*            </li>*/}
                                    {/*        </ul>*/}
                                    {/*    </div>*/}
                                    {/*}*/}
                                </div>
                            </div>
                    }
                    <div className="float-lg-end lien-login-btn">
                        <Link to="/cart">
                            <TbShoppingCartHeart style={{color: "white", fontSize: "35px"}}/>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}