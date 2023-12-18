import './Order.css'
import {PayPalButton} from "react-paypal-button-v2";
import React, {useContext, useEffect, useState} from "react";
import {CartContext} from "../context/Context";
import {addOrder} from "../../service/orderService";
import {toast} from "react-toastify";
import {getCustomer} from "../../service/userService";

const Order = () => {
    const cartContext = useContext(CartContext);
    const {userId, totalPrice, customer,dispatch} = cartContext;
    const [payment, setPayment] = useState();
    useEffect(() => {
        handleAddOrder()
    }, [payment])
    const handleAddOrder = async () => {
        console.log(payment)
        if (payment === 1 || payment === 2) {
            const res = await addOrder(userId, totalPrice, payment);
            if (res.status === 200) {
                dispatch({
                    type: 'REMOVE_ALL_ITEMS',
                })
                toast.success("Đặt hàng thành công!")

            } else {
                toast.warn("Đặt hàng thất bại!")
            }
        }
    }


    return (
        <div className="lien-order page-wrapper bg-red p-t-180 p-b-100 font-robo">
            <div className="wrapper wrapper--w960">
                <div className="card card-2">
                    <div className="card-heading"></div>
                    <div className="card-body">
                        <h2 className="title">Xác nhận thông tin đơn hàng</h2>
                        <div className="information"><span style={{fontWeight: "bolder"}}>Họ tên người nhận: </span>{customer.name}</div>
                        <div className="information"><span style={{fontWeight: "bolder"}}>Địa chỉ: </span>{customer.address}</div>
                        <div className="information"><span style={{fontWeight: "bolder"}}>Số điện thoại: </span>{customer.phone}</div>
                        <div className="information"><span style={{fontWeight: "bolder"}}>Tổng hóa đơn: </span>{totalPrice.toLocaleString()} đ
                        </div>
                        <hr/>
                        <div>Chọn phương thức thanh toán:</div>
                        {totalPrice > 0 ?
                            <div style={{marginTop:"0.5rem"}}>
                                <button type="button" className="btn btn-dark btn-block btn-lg"
                                        data-mdb-ripple-color="dark" onClick={() => setPayment(0)}>Thanh
                                    toán PayPal
                                </button>
                                <button type="button" className="btn btn-dark btn-block btn-lg mb-5"
                                        data-mdb-ripple-color="dark" onClick={() => setPayment(1)}>Ship COD
                                </button>
                            </div>
                            : null}
                        {payment === 0 ?
                            <PayPalButton classname="paypal-button-label-container"
                                          amount={totalPrice/20000}
                                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                          onSuccess={(details, data) => {
                                              setPayment(2);
                                              // OPTIONAL: Call your server to save the transaction
                                              return fetch("/paypal-transaction-complete", {
                                                  method: "post",
                                                  body: JSON.stringify({
                                                      orderID: data.orderID
                                                  })
                                              });
                                          }}
                                          onError={() => {

                                          }}
                            />
                            :
                            <div>
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Order;