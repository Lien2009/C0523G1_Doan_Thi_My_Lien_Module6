import axios from "axios";

const URL_PRODUCT = "http://localhost:8080/api/products";
const URL_CATEGORY = "http://localhost:8080/api/categories";
export const getAllCategory =async ()=>{
    try{
        const res = await axios.get(URL_CATEGORY);
        return res;
    }catch (e){
        alert("Danh mục lỗi!")
    }
}
export const getAllProduct = async (currentPage, limit,name)=>{
    try{
        const res = await axios.get(URL_PRODUCT+`/getAll?page=${currentPage}&limit=${limit}&name=${name}`);
        return res;
    }catch (e){
        alert("SP lỗi!")
    }
}
export const getAllProductSort = async (currentPage, limit,name)=>{
    try{
        const res = await axios.get(URL_PRODUCT+`/getAllSort?page=${currentPage}&limit=${limit}&name=${name}`);
        return res;
    }catch (e){
        alert("SP lỗi!")
    }
}
export const getAllProductByCate = async (currentPage, limit,name,categoryId)=>{
    try{
        const res = await axios.get(URL_PRODUCT+`/getProductByCate?page=${currentPage}&limit=${limit}&name=${name}&categoryId=${categoryId}`);
        return res;
    }catch (e){
        alert("SP theo danh mục lỗi!")
    }
}
export const getAllProductByCateSort = async (currentPage, limit,name,categoryId)=>{
    try{
        const res = await axios.get(URL_PRODUCT+`/getProductByCateSort?page=${currentPage}&limit=${limit}&name=${name}&categoryId=${categoryId}`);
        return res;
    }catch (e){
        alert("SP theo danh mục lỗi!")
    }
}
export const findCategoryById = async (id) => {
    try {
        const res = await axios.get(URL_CATEGORY + `/${id}`);
        return res.data
    }catch (e){
        alert("Tìm danh mục bị lỗi!")
    }
}
export const findBestSeller = async () => {
    try {
        const res = await axios.get(URL_PRODUCT + `/bestSeller`);
        return res
    }catch (e){
        alert("Tìm bestSeller bị lỗi!")
    }
}