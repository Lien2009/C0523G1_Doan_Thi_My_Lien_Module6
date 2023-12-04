import "./header.css"
import {useState} from "react";
import NavbarMobile from "./NavbarMobile";
import {Link, useNavigate} from "react-router-dom";
import logo from "./img/logo.jpg";
import logo2 from "./img/logo2.png"
import cart from "./img/cart.jpg";


export default function Header() {
    const [isOpenNavbarMobile, setOpenNavbarMobile] = useState(false)
    const [isShowUserMenu, setIsShowUserMenu] = useState(false)
    const [isAuthentication, setIsAuthentication] = useState(false)
    const navigate = useNavigate()
    const handleButtonClick = () => {
        setIsShowUserMenu((prevState) => !prevState);
    };
    const goLoginPage = () => {
        navigate(`/login`)
    }

    return (
        <header className="lien-header">
            <NavbarMobile isOpenNavbarMobile={isOpenNavbarMobile}
                          setOpenNavbarMobile={setOpenNavbarMobile}/>
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
                            <img src={logo} alt="logo"
                                 style={{width: "70px", borderRadius: "50%"}}/>
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
                                        <li><a className="dropdown-item" href="#">Món Mới</a></li>
                                        <li><a className="dropdown-item" href="#">Combo Nhóm</a></li>
                                        <li><a className="dropdown-item" href="#">Combo 1 Người</a></li>
                                        <li><a className="dropdown-item" href="#">Hamburger</a></li>
                                        <li><a className="dropdown-item" href="#">Gà Rán</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>

                        <form>
                            <div className="input-group">
                                <div className='search-btn'>
                                    <span className="input-group-text">
                                         <i className="fa-solid fa-magnifying-glass" style={{color: "#e32929"}}></i>
                                    </span>
                                </div>
                                <input type="text" className="form-control"
                                       placeholder="Nhập món" aria-label="Username"
                                       aria-describedby="addon-wrapping"
                                />
                            </div>
                        </form>
                    </div>
                    {
                        !isAuthentication ?
                            <div className="float-lg-end lien-login-btn">
                                <button className="d-flex align-items-center icon">
                                    <i className="fa-solid fa-user" style={{color: "#e32929"}}
                                       onClick={goLoginPage}></i>
                                </button>
                            </div> :
                            <div className="float-lg-end lien-login-btn">
                                <button className="position-relative"
                                        onClick={handleButtonClick}>
                                    <img
                                        src={""}
                                        alt="avatar"
                                        style={{
                                            width: "36px",
                                            aspectRatio: '1/1',
                                            borderRadius: "50%",
                                            objectFit: "cover",
                                            objectPosition: "center"
                                        }}/>
                                    {
                                        isShowUserMenu && <div className={`user-menu`}>
                                            <ul className="position-relative">
                                                <li>
                                                    <Link to="/">Trang cá nhân</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Lịch sử đặt hàng</Link>
                                                </li>
                                                {/*{currentRole === "ADMIN" &&*/}
                                                {/*    <li>*/}
                                                {/*        <Link to="/accounts">Quản lý</Link>*/}
                                                {/*    </li>*/}
                                                {/*}*/}
                                                <hr/>
                                                <li>
                                                    <p style={{fontFamily: "Nunito Sans, sans-serif"}}>Đăng xuất</p>
                                                </li>
                                                <span></span>
                                            </ul>
                                        </div>
                                    }
                                </button>
                            </div>
                    }
                    <div className="float-lg-end lien-login-btn">
                        <Link to="/cart">
                            <img src={cart} alt="cart"
                                 style={{width: "38px", borderRadius: "50%"}}/>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}