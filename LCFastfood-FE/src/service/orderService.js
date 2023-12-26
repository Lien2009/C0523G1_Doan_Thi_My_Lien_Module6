import axios from "axios";

const URL_CART = "http://localhost:8080/api/orders";
export const getCart = async (userId)=>{
    try{
        return await axios.get(URL_CART+`/cart/${userId}`);
    }catch (e){
        alert("cart lỗi")
    }

}

export const updateCart = async (userId, payload) => {
    try {
        return await axios.put(URL_CART+`/cart/${userId}/update`, payload)
    } catch (e) {
        alert("Cập nhật lỗi")
    }
}

export const removeCartByUserIdAndCartId = async (userId, cartId) => {
  try {
    return await axios.delete(URL_CART+`/cart/${userId}/delete/${cartId}`)
  } catch (e) {
    alert("Xóa lỗi")
  }
}

export const addProductToCartByUserIdAndProductId = async (userId, productId) => {
    try {
        return await axios.post(URL_CART+`/cart/${userId}/add/${productId}`)
    } catch (e) {
        alert("Thêm lỗi")
    }
}
export const addOrder = async (userId,total,payment) =>{
    try {
        return await axios.post(URL_CART +`/addOrder?userId=${userId}&total=${total}&payment=${payment}`)
    }catch (e){
        alert("Tạo Order lỗi")
    }
}
export const getAllOrder = async (userId)=>{
    try{
        return await axios.get(URL_CART +`/history/${userId}`)
    }catch (e){
        alert("Lịch sử đặt hàng lỗi")
    }
}
export const getOrderDetail = async (userId)=>{
    try{
        return await axios.get(URL_CART +`/detail/${userId}`)
    }catch (e){
        alert("Lịch sử chi tiết lỗi")
    }
}
export const updateFeedbackStatus = async (orderDetailId,point) => {
    try {
        return await axios.put(URL_CART+`/status/${orderDetailId}/${point}`)
    } catch (e) {
        alert("Cập nhật feedback lỗi")
    }
}
