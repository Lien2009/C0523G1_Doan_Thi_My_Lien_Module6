import {createContext, useEffect, useReducer, useState} from "react";
import * as orderService from "../../service/orderService";
import * as userService from "../../service/userService";
import {getCart} from "../../service/orderService";

export const CartContext = createContext({});
const cartReducer = (state, action) => {
    const addCart = async (productId, userId) => {
        await orderService.addCart(productId, userId);
    }
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
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [refresh, setRefresh] = useState(true);
    
    useEffect(() => {
        void getUserId();
    }, [userId, setUserId]);
    
    useEffect(() => {
        if (cartState && cartState.cartItem.length >= 0) {
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
    const getAllCart = async (userId) => {
        try {
            if (userId) {
                const res = await getCart(currentPage, limit, userId);
                console.log(res)
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
    
    
    return <CartContext.Provider value={{
        cartState,
        dispatch,
        userId,
        setUserId,
        isRender,
        setIsRender,
        totalQuantity,
        totalPrice,
        setCurrentPage,
        setRefresh,
        currentPage,
        totalPages,
        getAllCart
    }}>
        {children}
    </CartContext.Provider>
}