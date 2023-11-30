
import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import BodyMainPage from "./components/bodyMainPage/BodyMainPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
        <Header/>
        <BodyMainPage/>
        <Footer/>

    </>
  );
}

export default App;
