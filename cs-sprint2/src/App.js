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
import BestSeller from "./components/product/BestSeller";
import Detail from "./components/product/Detail";
import Order from "./components/order/Order";
import OrderHistory from "./components/order/OrderHistory";
import Customer from "./components/customer/Customer";
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
                <Route path="/all_product" element={<AllProduct/>}/>
                <Route path="/best_seller" element={<BestSeller/>}/>
                <Route path="/detail/:id" element={<Detail/>}/>
                <Route path="/order" element={<Order/>}/>
                <Route path="/order_history" element={<OrderHistory/>}/>
                <Route path="/customer" element={<Customer/>}/>
            </Routes>
            <ToastContainer/>
        </>
    );
}

export default App;
