import {createContext, useEffect, useReducer, useState} from "react";
import * as orderService from "../../service/orderService";
import * as userService from "../../service/userService";

export const CartContext = createContext({});
const cartReducer = (state, action) => {
    const addCart = async (productId, userId) => {
        await orderService.addCart(productId, userId);
    }
    switch (action.type){
        case 'GET_CART':
            return{
                ...state,
                cartItem: action.payload.carts
            };
        case 'ADD_CART':
            addCart(action.payload.userId,action.payload.item.id);
            const existingItem = state.cartItem.find(item => (item.productId ? item.productId : item.id) === action.payload.item.id);
            if (existingItem) {
                return {
                    ...state,
                };
            }
            return {
                ...state,
                cartItem : [action.payload.item,...state.cartItem],
            };
        default:
            return state;
    }
}
export const CartProvider = ({children})=>{
    const [cartState, dispatch] = useReducer(cartReducer,{cartItem: []});
    const [userId, setUserId] = useState();
    const [isRender, setIsRender] = useState(false);

    useEffect(() => {
        void getUserId();
    }, [])
    const getUserId = async ()=>{
        const jwtToken = userService.getJwtToken();
        if (jwtToken) {
            const user = await userService.getUser(jwtToken.sub);
            console.log(user)
            if (user) {
                setUserId(user.id);
            }
        } else {
            console.log("Khong tim thay user")
        }
    }

    return <CartContext.Provider value={{cartState,dispatch,userId,setUserId,isRender,setIsRender}}>
        {children}
    </CartContext.Provider>
}