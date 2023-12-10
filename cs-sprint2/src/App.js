import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import BodyMainPage from "./components/bodyMainPage/BodyMainPage";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart";
import Product from "./components/product/Product";
import Login from "./components/login/Login";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllProduct from "./components/product/AllProduct";
function App() {
    return (
        <>
            <Routes>
                <Route path="*" element={<Header/>}/>
            </Routes>

            <Routes>
                <Route path="/" element={<BodyMainPage/>}/>
            </Routes>
            <Routes>
                <Route path="/" element={<Footer/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/product/:id" element={<Product/>}/>
                <Route path="/allProduct" element={<AllProduct/>}/>
            </Routes>
            <ToastContainer/>
        </>
    );
}

export default App;
