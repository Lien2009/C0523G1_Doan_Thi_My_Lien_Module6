import React, {useContext, useEffect} from "react";
import './Cart.css'
import {CartContext} from "../context/Context";
import CartItem from "./CartItem";
import {TbShoppingCartHeart} from "react-icons/tb";
import * as cartService from "../../service/orderService"
import {toast} from "react-toastify";
const Cart = () => {
    const cartContext = useContext(CartContext);
    const {cartState, userId, totalQuantity, totalPrice} = cartContext;

    useEffect(() => {
        console.log(cartState)
    }, [cartState])
    // const prePage = () => {
    //     setCurrentPage((currentPage) => currentPage - 1);
    //     setRefresh((refresh) => !refresh);
    // }
    //
    // const nextPage = () => {
    //     setCurrentPage((currentPage) => currentPage + 1);
    //     setRefresh((refresh) => !refresh);
    // }
    
    const handleUpdateCart = async () => {
        const data = cartState.cartItem.map(item => ({
                productId: item.productId,
                quantity: item.quantity,
        }))
        const res = await cartService.updateCart(userId, data)

        if (res.data.code === 200) {
            toast.success(res.data.message)
        } else {
            toast.error(res.data.message)
        }
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
                                                <button onClick={handleUpdateCart} type="button" className="btn btn-dark d-flex justify-content-center align-items-center gap-2">Cập nhật <TbShoppingCartHeart style={{color: "white", fontSize: "20px"}}/></button>
                                            </div>
                                            <hr className="my-4"/>
                                            {cartState.cartItem.length > 0 ? (
                                                cartState.cartItem.map((cart, index) => {
                                                    return (
                                                        <CartItem key={index} item={cart} maxQuantity={cart.productQuantity}/>
                                                    )
                                                })
                                            ) : (<span>Chưa có món ăn nào</span>)}
                                            {/*<div aria-label="Page navigation example mt-3" style={{*/}
                                            {/*    marginTop: "1.5rem",*/}
                                            {/*    display: "flex",*/}
                                            {/*    justifyContent: "center"*/}
                                            {/*}}>*/}
                                            {/*    <ul className="pagination">*/}
                                            {/*        <li className="page-item">*/}
                                            {/*            <button className="page-link" aria-label="Previous"*/}
                                            {/*                    onClick={() => prePage()} tabIndex={-1}*/}
                                            {/*                    disabled={currentPage + 1 <= 1}>*/}
                                            {/*                <span aria-hidden="true">&laquo;</span>*/}
                                            {/*            </button>*/}
                                            {/*        </li>*/}
                                            {/*        <li className="page-item">*/}
                                            {/*            <button*/}
                                            {/*                className="page-link">{currentPage + 1}/{totalPages}</button>*/}
                                            {/*        </li>*/}
                                            {/*        <li className="page-item">*/}
                                            {/*            <button className="page-link" aria-label="Next"*/}
                                            {/*                    disabled={currentPage + 1 >= totalPages}*/}
                                            {/*                    onClick={() => nextPage()}>*/}
                                            {/*                <span aria-hidden="true">&raquo;</span>*/}
                                            {/*            </button>*/}
                                            {/*        </li>*/}
                                            {/*    </ul>*/}
                                            {/*</div>*/}
                                            <div className="pt-5">
                                                <h6 className="mb-0"><a href="#!"
                                                                        className="text-body"><i
                                                    className="fas fa-long-arrow-alt-left me-2"></i>Tiếp tục chọn
                                                    món</a></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 bg-grey">
                                        <div className="p-4">
                                            <h3 className="fw-bold mb-5 mt-2 pt-1">Tổng cộng</h3>
                                            <hr className="my-4"/>

                                            <div className="d-flex justify-content-between mb-4">
                                                <h5 className="text-uppercase">Số lượng: </h5>
                                                <h5>{totalQuantity}</h5>
                                            </div>

                                            <hr className="my-4"/>

                                            <div className="d-flex justify-content-between mb-5">
                                                <h5 className="text-uppercase">Giá: </h5>
                                                <h5>{totalPrice.toLocaleString()} đ</h5>
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