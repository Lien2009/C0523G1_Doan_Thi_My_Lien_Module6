import HomeTemplate from "./template/HomeTemplate";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import {ToastContainer} from "react-toastify";


function App() {
    return (
        <div>
            <Routes>
                <Route path="" element={<HomeTemplate/>}></Route>
                <Route path="/" element={<Home/>}/>
                <Route path="search" >
                    <Route path=":id" element={<Search/>}/>
                </Route>
            </Routes>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default App;
