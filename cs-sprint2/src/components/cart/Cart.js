import React from "react";
import './Cart.css'
import p1 from "../product/img/p1.jpg"

const Cart = () => {
    return (
            <section className="cart">
                <div className="container ">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">
                            <div className="card-registration card-registration-2" style={{borderRadius: "15px"}}>
                                <div className="card-body p-0">
                                    <div className="row g-0 lien-cart">
                                        <div className="col-lg-8">
                                            <div className="p-5">
                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                    <h1 className="fw-bold mb-0 text-black">Giỏ hàng của tôi</h1>
                                                </div>
                                                <hr className="my-4"/>

                                                    <div
                                                        className="row mb-4 d-flex justify-content-between align-items-center">
                                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                                            <img
                                                                src={p1}
                                                                className="img-fluid rounded-3" alt="Cotton T-shirt"/>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-xl-3">
                                                            <h6 className="text-muted">Combo 1 người</h6>
                                                            <h6 className="text-black mb-0">2 đùi gà + 1 Pepsi size M</h6>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                            <button className="btn btn-link px-2"
                                                                    onClick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                                <i className="fas fa-minus"></i>
                                                            </button>

                                                            <input id="form1" min="0" name="quantity" value="1"
                                                                   type="number"
                                                                   className="form-control form-control-sm"/>

                                                            <button className="btn btn-link px-2"
                                                                    onClick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                                <i className="fas fa-plus"></i>
                                                            </button>
                                                        </div>
                                                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                            <h6 className="mb-0">55.000 đ</h6>
                                                        </div>
                                                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                            <a href="#!" className="text-muted"><i
                                                                className="fas fa-times"></i></a>
                                                        </div>
                                                    </div>

                                                    <hr className="my-4"/>

                                                        <div
                                                            className="row mb-4 d-flex justify-content-between align-items-center">
                                                            <div className="col-md-2 col-lg-2 col-xl-2">
                                                                <img
                                                                    src={p1}
                                                                    className="img-fluid rounded-3"
                                                                    alt="Cotton T-shirt"/>
                                                            </div>
                                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                                <h6 className="text-muted">Hamburger bò</h6>
                                                                <h6 className="text-black mb-0">Thịt bò, salad, phomai</h6>
                                                            </div>
                                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                                <button className="btn btn-link px-2"
                                                                        onClick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                                    <i className="fas fa-minus"></i>
                                                                </button>

                                                                <input id="form1" min="0" name="quantity" value="1"
                                                                       type="number"
                                                                       className="form-control form-control-sm"/>

                                                                <button className="btn btn-link px-2"
                                                                        onClick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                                    <i className="fas fa-plus"></i>
                                                                </button>
                                                            </div>
                                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                <h6 className="mb-0">30.000 đ</h6>
                                                            </div>
                                                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                <a href="#!" className="text-muted"><i
                                                                    className="fas fa-times"></i></a>
                                                            </div>
                                                        </div>

                                                        <hr className="my-4"/>

                                                        <div
                                                            className="row mb-4 d-flex justify-content-between align-items-center">
                                                            <div className="col-md-2 col-lg-2 col-xl-2">
                                                                <img
                                                                    src={p1}
                                                                    className="img-fluid rounded-3"
                                                                    alt="Cotton T-shirt"/>
                                                            </div>
                                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                                <h6 className="text-muted">Kem vani</h6>
                                                                <h6 className="text-black mb-0">Bánh ốc quế, kem</h6>
                                                            </div>
                                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                                <button className="btn btn-link px-2"
                                                                        onClick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                                    <i className="fas fa-minus"></i>
                                                                </button>

                                                                <input id="form1" min="0" name="quantity" value="1"
                                                                       type="number"
                                                                       className="form-control form-control-sm"/>

                                                                <button className="btn btn-link px-2"
                                                                        onClick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                                    <i className="fas fa-plus"></i>
                                                                </button>
                                                            </div>
                                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                <h6 className="mb-0">5.000 đ</h6>
                                                            </div>
                                                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                <a href="#!" className="text-muted"><i
                                                                    className="fas fa-times"></i></a>
                                                            </div>
                                                        </div>

                                                        <hr className="my-4"></hr>

                                                        <div className="pt-5">
                                                            <h6 className="mb-0"><a href="#!"
                                                                                    className="text-body"><i
                                                                className="fas fa-long-arrow-alt-left me-2"></i>Tiếp tục chọn món</a></h6>
                                                        </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 bg-grey">
                                            <div className="p-5">
                                                <h3 className="fw-bold mb-5 mt-2 pt-1">Tổng cộng</h3>
                                                <hr className="my-4"/>

                                                    <div className="d-flex justify-content-between mb-4">
                                                        <h6 className="text-uppercase">Số lượng món</h6>
                                                        <h6>3</h6>
                                                    </div>

                                                    {/*<h5 className="text-uppercase mb-3">Nhập mã giảm</h5>*/}

                                                    {/*<div className="mb-5">*/}
                                                    {/*    <div className="form-outline">*/}
                                                    {/*        <input type="text" id="form3Examplea2"*/}
                                                    {/*               className="form-control form-control-lg"/>*/}
                                                    {/*        <label className="form-label" htmlFor="form3Examplea2">Enter*/}
                                                    {/*            your code</label>*/}
                                                    {/*    </div>*/}
                                                    {/*</div>*/}

                                                    <hr className="my-4"/>

                                                        <div className="d-flex justify-content-between mb-5">
                                                            <h6 className="text-uppercase">Tổng thanh toán</h6>
                                                            <h6>90.000 đ</h6>
                                                        </div>

                                                        <button type="button" className="btn btn-dark btn-block btn-lg"
                                                                data-mdb-ripple-color="dark">Thanh toán
                                                        </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
)
}
export default Cart;