import "./Header.css"
export default function Header() {

    return (
        <header className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="d-flex align-items-center justify-content-between">
                        <a className="navbar-brand" href="/">
                            <img src="../../../public/mainPageImage/Logo-background-transfer.png"
                                 style={{width: "90px", height: "150%"}}/>
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"/>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" style={{color: "white"}} aria-current="page" href="/">
                                    Tìm hiểu
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" style={{color: "white"}} aria-current="page" href="/">
                                    An toàn
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" style={{color: "white"}} aria-current="page" href="/">
                                    Hỗ trợ
                                </a>
                            </li>

                        </ul>

                        <form>
                            <div className="input-group" style={{width: "250px"}}>

                                <a type="button"><span style={{borderRadius:"20px 0px 0px 20px", fontSize: "24px"}}
                                                       className="input-group-text" id="addon-wrapping">
                               <i className="fa-solid fa-magnifying-glass"></i>
                            </span></a>

                                <input style={{borderRadius:"20px 0px 0px 20px"}} type="text" className="form-control"
                                       placeholder="Nhập tên" aria-label="Username" aria-describedby="addon-wrapping"/>
                            </div>
                        </form>
                    </div>
                    <div className="float-lg-end">
                        <button className="lien-login-btn"><i className="fa-solid fa-right-to-bracket fa-md"></i> Đăng
                            nhập
                        </button>
                    </div>

                </nav>
            </div>
        </header>
    )
}