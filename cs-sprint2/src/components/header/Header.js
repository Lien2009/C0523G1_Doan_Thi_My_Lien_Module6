import "./header.css"
import {useState} from "react";
import NavbarMobile from "./NavbarMobile";
import {Link} from "react-router-dom";
import logo from "./img/logo.jpg";


export default function Header() {
    const [isOpenNavbarMobile, setOpenNavbarMobile] = useState(false)
    const [isShowUserMenu, setIsShowUserMenu] = useState(false)
    const [isAuthentication, setIsAuthentication] = useState(false)
    const handleButtonClick = () => {
        setIsShowUserMenu((prevState) => !prevState);
    };


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
                                            Tìm hiểu
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link" aria-current="page">
                                            Thực đơn
                                        </Link>
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
                                       ></i>
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
                </nav>
            </div>
        </header>
    )
}