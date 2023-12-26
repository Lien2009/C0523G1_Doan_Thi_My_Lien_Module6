import React, {useContext, useEffect, useState} from 'react';
import {toast} from "react-toastify";
import './Cart.css'
import {CartContext} from "../context/Context";
import {removeCartByUserIdAndCartId} from "../../service/orderService";

const CartItem = (props) => {
    const {item, maxQuantity} = props
    const [count, setCount] = useState(item.quantity)
    const cartContext = useContext(CartContext);
    const {dispatch, userId} = cartContext;
    
    useEffect(() => {
        setCount(item.quantity)
    }, [item])
    
    useEffect(() => {
        dispatch({
            type: 'ADJUST_QTY',
            payload: {
                id: item?.productId,
                quantity: count
            }
        })
    }, [count])
    
    const handleOnChangeQuantity = (e) => {
        let value = e.target.value;
        value = value.replace(/\D/g, '');
        if (value === '' || isNaN(value)) {
            value = 1;
        }
        const intValue = parseInt(value, 10);
        if (intValue <= 1) {
            toast.error(`Vui lòng chọn ít nhất 1 sản phẩm`)
        } else if (intValue >= maxQuantity) {
            toast.error(`Chỉ còn ${maxQuantity} sản phẩm`)
        }
        setCount(Math.max(1, Math.min(maxQuantity, parseInt(value, 10))));
    }
    
    const handlePlusQuantity = (e) => {
        if (count >= maxQuantity) {
            toast.error(`Chỉ còn ${maxQuantity} sản phẩm`)
        }
        setCount(prevValue => Math.min(maxQuantity, prevValue + 1));
    }
    const handleMinusQuantity = (e) => {
        if (count <= 1) {
            toast.error(`Vui lòng chọn ít nhất 1 sản phẩm`)
        }
        setCount(prevValue => Math.max(1, prevValue - 1));
    }
    const handleRemoveCartItem = async (id) => {
        const res = await removeCartByUserIdAndCartId(userId, id)
        if (res.data.code === 200) {
            dispatch({
                type: 'REMOVE_BY_ID',
                payload:
                    {
                        id: id
                    }
            })
            toast.success(res.data.message)
            
        } else {
            toast.error(res.data.message)
        }
    }
    return (
        <div>
            <div
                className="row mb-4 d-flex justify-content-between align-items-center">
                <div className="col-md-2 col-lg-2 col-xl-2">
                    <img
                        src={item.image}
                        className="img-fluid rounded-3" alt="food"/>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                    <h6 className="text-muted">{item.name}</h6>
                    <h6 className="text-black mb-0">{item.description}</h6>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <button onClick={handleMinusQuantity} data-action="decrement"
                            className="btn btn-link px-2">
                        <i className="fas fa-minus"></i>
                    </button>
                    
                    <input id="form1"
                           type="number"
                           name='number'
                           value={count}
                           onChange={handleOnChangeQuantity}
                           className="form-control form-control-sm"
                           style={{width: "3rem", border: "1px solid #d9d9d9"}}/>
                    <button onClick={handlePlusQuantity}
                            data-action="increment"
                            className="btn btn-link px-2">
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h6 className="mb-0"
                        style={{whiteSpace: "nowrap"}}>{(item.price * item.quantity).toLocaleString()} đ</h6>
                </div>
                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                    <div onClick={() => handleRemoveCartItem(item.cartId)}
                         className="text-muted d-flex align-items-center justify-content-center"
                         style={{width: '20px', height: '20px', cursor: 'pointer'}}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>
            </div>
            
            <hr className="my-4"/>
        </div>
    );
};

export default CartItem;