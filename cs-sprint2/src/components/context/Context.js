import {createContext, useEffect, useReducer, useState} from "react";
import * as orderService from "../../service/orderService";
import * as userService from "../../service/userService";
import {addProductToCartByUserIdAndProductId, getCart} from "../../service/orderService";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {getCustomer} from "../../service/userService";

export const CartContext = createContext({});
const cartReducer = (state, action) => {

    switch (action.type) {
        case 'GET_CART':
            return {
                ...state,
                cartItem: action.payload.carts
            };
        case 'ADD_CART':
            // addCart(action.payload.userId, action.payload.item.id);
            // const existingItem = state.cartItem.find(item => item.productId === action.payload.id);
            return {
                ...state,
                cartItem: action.payload.data,
            };
        case "ADJUST_QTY":
            return {
                ...state,
                cartItem: state.cartItem.map(item => item.productId === action.payload.id ? {
                    ...item,
                    quantity: +action.payload.quantity
                } : item)
            }
        case "REMOVE_BY_ID":
            return {
                ...state,
                cartItem: state.cartItem.filter(item => item.cartId !== action.payload.id)
            }
        case "REMOVE_ALL_ITEMS":
            return {
                ...state,
                cartItem: []
            }
        default:
            return state;
    }
}
export const CartProvider = ({children}) => {
    const [cartState, dispatch] = useReducer(cartReducer, {cartItem: []});
    const [userId, setUserId] = useState('');
    const [isRender, setIsRender] = useState(false);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [refresh, setRefresh] = useState(true);
    const navigate = useNavigate();
    const [totalItem, setTotalItem] = useState(0);
    const [customer, setCustomer] = useState();

    useEffect(() => {
        void getUserId();
        if (userId) {
            displayCustomer();
        }
    }, [userId, setUserId]);

    useEffect(() => {
        if (cartState && cartState.cartItem.length >= 0) {
            setTotalItem(cartState.cartItem.length);
            const quantitiesAllPages = cartState?.cartItem.reduce((accumulator, currentCart) => accumulator + currentCart.quantity, 0);
            setTotalQuantity(quantitiesAllPages);
            const totalPrice = cartState?.cartItem.reduce((accumulator, currentCart) => accumulator + (currentCart.quantity * currentCart.price), 0);
            setTotalPrice(totalPrice);
        }
    }, [cartState]);

    const getUserId = async () => {
        const jwtToken = userService.getJwtToken();
        if (jwtToken) {
            const user = await userService.getUser(jwtToken.sub);
            if (user) {
                setUserId(user.id);
                await getAllCart(user.id)
            }
        } else {
            console.log("Khong tim thay user")
        }
    }
    const displayCustomer = async () => {
        const cus = await getCustomer(userId);
        console.log(cus)
        if (cus) {
            setCustomer(cus);
            console.log(cus)
        } else {
            console.log("Lỗi lấy thông tin KH")
        }
    }
    const getAllCart = async (userId) => {
        try {
            if (userId) {
                const res = await getCart(userId);
                console.log(res)
                dispatch({
                    type: 'GET_CART',
                    payload:
                        {
                            carts: res?.data?.code !== 400 ? res?.data : []
                        }
                })
                if (res.status === 200) {
                    console.log("Lấy dữ liệu thành công!")
                } else {
                    console.log("Lấy dữ liệu thất bại!")
                }
            }
        } catch (e) {
            console.log("Giỏ lỗi")
        }
    };
    const handleAddProductToCart = async (productId) => {
        if (userId === '' || !localStorage.getItem("JWT")) {
            navigate(`/login`);
            toast.warn("Vui lòng đăng nhập để đặt món!")
        } else {
            const res = await addProductToCartByUserIdAndProductId(userId, productId)
            if (res && res.data.code === 200) {
                dispatch({
                    type: 'ADD_CART',
                    payload: {
                        id: productId,
                        data: res.data.data
                    }
                })

                toast.success(res.data.message)
            } else {
                toast.error(res.data.message)
            }
        }
    }


    return <CartContext.Provider value={{
        cartState,
        dispatch,
        userId,
        setUserId,
        isRender,
        setIsRender,
        totalQuantity,
        totalPrice,
        setRefresh,
        getAllCart,
        handleAddProductToCart,
        totalItem,
        customer
    }}>
        {children}
    </CartContext.Provider>
}