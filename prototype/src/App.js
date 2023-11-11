import './App.css';
import Header from "./components/Header/Header";
import BodyMainPage from "./components/BodyMainPage/BodyMainPage";
import Footer from "./components/Footer/Footer";
import {Outlet, Route, Routes} from "react-router-dom";
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path=""
                       element={<BodyMainPage/>}
                />
                <Route path={'tim-kiem'}
                       element={<SearchPage/>}
                />

            </Route>
        </Routes>
    );
}
const Layout = () => {
    return <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
}
export default App;
