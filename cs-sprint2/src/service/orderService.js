import axios from "axios";

const URL_CART = "http://localhost:8080/api/orders";
export const getCart = async (currentPage, limit,userId)=>{
    try{
        return await axios.get(URL_CART+`/cart/${userId}?page=${currentPage}&limit=${limit}`);
    }catch (e){
        alert("cart lỗi")
    }

}
export const addCart = async (productId,userId)=>{
    try{
        const res = await axios.post(URL_CART+`/addCart/${productId}/${userId}`);
        return res;
    }catch (e){
        alert("thêm giỏ lỗi")
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
        alert("Xóa lỗi")
    }
}