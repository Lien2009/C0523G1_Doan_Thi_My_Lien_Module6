import React, {useContext, useEffect, useState} from "react";
import './Cart.css'
import {getCart} from "../../service/orderService";
import {CartContext} from "../context/Context";

const Cart = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [refresh, setRefresh] = useState(true);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(2);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const cartContext = useContext(CartContext);
    const {cartState, userId, dispatch} = cartContext;

    useEffect(() => {
        void getAllCart();
        void getAllCartData();
    }, [userId, currentPage, refresh, totalPages])

    const getAllCart = async () => {
        try {
            if (userId) {
                const res = await getCart(currentPage, limit, userId);
                dispatch({
                    type: 'GET_CART',
                    payload:
                        {
                            carts: res?.data?.code !== 400 ? res?.data?.content : []
                        }
                })
                setTotalPages(res.data.totalPages);

                if (res.status === 200) {
                    console.log("Lấy dữ liệu thành công")
                } else {
                    console.log("Lấy dữ liệu thất bại")
                }
            }
        } catch (e) {
            console.log("Gio loi")
        }
    };
    const getAllCartData = async () => {
        const allCartData = [];
        for (let page = 0; page < totalPages; page++) {
            const res = await getCart(page, limit, userId);
            allCartData.push(...res.data.content)
        }
        const quantitiesAllPages = allCartData.reduce((accumulator, currentCart) => accumulator + currentCart.quantity, 0);
        setTotalQuantity(quantitiesAllPages);
        const totalPrice = allCartData.reduce((accumulator, currentCart) => accumulator + (currentCart.quantity * currentCart.price), 0);
        setTotalPrice(totalPrice);
    };
    const prePage = () => {
        setCurrentPage((currentPage) => currentPage - 1);
        setRefresh((refresh) => !refresh);
    }

    const nextPage = () => {
        setCurrentPage((currentPage) => currentPage + 1);
        setRefresh((refresh) => !refresh);
    }

    const handleChangeQuantity = (e) => {

    }
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
                                            {cartState.cartItem.length > 0 ? (
                                                cartState.cartItem.map((cart, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <div
                                                                className="row mb-4 d-flex justify-content-between align-items-center">
                                                                <div className="col-md-2 col-lg-2 col-xl-2">
                                                                    <img
                                                                        src={cart.image}
                                                                        className="img-fluid rounded-3" alt="food"/>
                                                                </div>
                                                                <div className="col-md-3 col-lg-3 col-xl-3">
                                                                    <h6 className="text-muted">{cart.name}</h6>
                                                                    <h6 className="text-black mb-0">{cart.description}</h6>
                                                                </div>
                                                                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                                    <button className="btn btn-link px-2">
                                                                        <i className="fas fa-minus"></i>
                                                                    </button>

                                                                    <input id="form1" min="0" name="quantity"
                                                                           value={cart.quantity}
                                                                           type="number"
                                                                           onChange={handleChangeQuantity}
                                                                           className="form-control form-control-sm"
                                                                           style={{width: "2.5rem"}}/>

                                                                    <button className="btn btn-link px-2">
                                                                        <i className="fas fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                    <h6 className="mb-0">{(cart.price * cart.quantity).toLocaleString()} đ</h6>
                                                                </div>
                                                                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                    <a href="#!" className="text-muted"><i
                                                                        className="fas fa-times"></i></a>
                                                                </div>
                                                            </div>

                                                            <hr className="my-4"/>
                                                        </div>
                                                    )
                                                })
                                            ) : (<span>Chưa có món ăn nào</span>)}
                                            <div aria-label="Page navigation example mt-3" style={{
                                                marginTop: "1.5rem",
                                                display: "flex",
                                                justifyContent: "center"
                                            }}>
                                                <ul className="pagination">
                                                    <li className="page-item">
                                                        <button className="page-link" aria-label="Previous"
                                                                onClick={() => prePage()} tabIndex={-1}
                                                                disabled={currentPage + 1 <= 1}>
                                                            <span aria-hidden="true">&laquo;</span>
                                                        </button>
                                                    </li>
                                                    <li className="page-item">
                                                        <button
                                                            className="page-link">{currentPage + 1}/{totalPages}</button>
                                                    </li>
                                                    <li className="page-item">
                                                        <button className="page-link" aria-label="Next"
                                                                disabled={currentPage + 1 >= totalPages}
                                                                onClick={() => nextPage()}>
                                                            <span aria-hidden="true">&raquo;</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="pt-5">
                                                <h6 className="mb-0"><a href="#!"
                                                                        className="text-body"><i
                                                    className="fas fa-long-arrow-alt-left me-2"></i>Tiếp tục chọn
                                                    món</a></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 bg-grey">
                                        <div className="p-5">
                                            <h3 className="fw-bold mb-5 mt-2 pt-1">Tổng cộng</h3>
                                            <hr className="my-4"/>

                                            <div className="d-flex justify-content-between mb-4">
                                                <h6 className="text-uppercase">Số lượng món</h6>
                                                <h6>{totalQuantity}</h6>
                                            </div>

                                            <hr className="my-4"/>

                                            <div className="d-flex justify-content-between mb-5">
                                                <h6 className="text-uppercase">Tổng thanh toán</h6>
                                                <h6>{totalPrice.toLocaleString()} đ</h6>
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