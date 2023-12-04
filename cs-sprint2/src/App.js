import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import BodyMainPage from "./components/bodyMainPage/BodyMainPage";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart";
import Product from "./components/product/Product";
import Login from "./components/login/Login";

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
                <Route path="/product" element={<Product/>}/>
            </Routes>
        </>
    );
}

export default App;
