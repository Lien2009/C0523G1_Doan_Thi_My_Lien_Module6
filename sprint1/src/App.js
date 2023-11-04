import { Routes, Route } from "react-router-dom";
import HomeTemplate from "./Template/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import Search from "./pages/Search";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route path="/" element={<Home />} />
          <Route path="search">
            <Route path=":keyword" element={<Search />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
    </div>
  );
};

export default App;
