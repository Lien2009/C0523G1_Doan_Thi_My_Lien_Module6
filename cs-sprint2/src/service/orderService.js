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