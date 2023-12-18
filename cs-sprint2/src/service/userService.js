import axios from "axios";
import {jwtDecode} from "jwt-decode"

const URL_LOGIN = "http://localhost:8080/api/users";
export const login = async (values)=>{
        const res = await axios.post(URL_LOGIN + `/login`,values);
        return res;
}
export const getJwtToken = ()=>{
    const jwtToken = localStorage.getItem("JWT");
    if(jwtToken){
        return jwtDecode(jwtToken);
    }
    return null;
}
export const addJwtTokenToLocalStorage = (jwtToken)=>{
    localStorage.setItem("JWT",jwtToken);
}
export const getUserNameByJwt = ()=>{
    const jwtToken =  localStorage.getItem("JWT");
    if (jwtToken){
        return jwtDecode(jwtToken).sub;
    }else {
        return null;
    }
}
export const handleLogout = () => {
    localStorage.removeItem("JWT");
}
export const getUser = async (userName) => {
    const res = await axios.get(URL_LOGIN + `/getUser/${userName}`)
    return res.data;
};
export const getCustomer = async (userId) => {
    try{
        const res = await axios.get(URL_LOGIN + `/getCustomer/${userId}`)
        return res.data;
    }catch (e){
        console.error(e)
        alert("Lỗi KH")
    }
};
