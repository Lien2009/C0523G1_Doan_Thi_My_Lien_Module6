import React, {useContext, useEffect, useState} from 'react';
import p1 from "./img/p1.jpg"
import "./Product.css"
import {findCategoryById, getAllProduct, getAllProductByCate} from "../../service/productService";
import {toast} from "react-toastify";
import {useNavigate, useParams} from "react-router-dom";
import {CartContext} from "../context/Context";
import {addProductToCartByUserIdAndProductId} from "../../service/orderService";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [refresh, setRefresh] = useState(true);
    const [totalPages, setTotalPages] = useState(0);
    const [records, setRecords] = useState("");
    const [limit, setLimit] = useState(8);
    const [searchName, setSearchName] = useState("");
    const [categoryName, setCategoryName] = useState("");
    const pattern = /[!@#$%^&*()_+=|{}<>?]/;
    const {id} = useParams();
    const cartContext = useContext(CartContext);
    const {dispatch, userId} = cartContext;
    
    useEffect(() => {
        display();
        findCategory();
    }, [currentPage, refresh, id]);
    const display = async () => {
        const res = await getAllProductByCate(currentPage, limit, searchName, id);
        setProducts(res.data.content);
        setRecords(res.data.size);
        setTotalPages(res.data.totalPages);
    }
    const findCategory = async () => {
        const res = await findCategoryById(id);
        setCategoryName(res.name);
    }
    const prePage = () => {
        setCurrentPage((currentPage) => currentPage - 1);
        setRefresh((refresh) => !refresh);
    }
    
    const nextPage = () => {
        setCurrentPage((currentPage) => currentPage + 1);
        setRefresh((refresh) => !refresh);
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSearch();
        }
    }
    const handleSearch = () => {
        if (pattern.test(searchName)) {
            toast.warn("Vui lòng không nhập ký tự đặc biệt!");
        } else {
            setCurrentPage(0);
            setRefresh(!refresh);
        }
    }
    const renderStars = (point) => {
        const starArray = [];
        if (point === 0) {
            starArray.push(<i className="fa-solid fa-star" style={{color: "white"}}></i>)
        }
        for (let i = 0; i < point; i++) {
            starArray.push(
                <i className="fa-solid fa-star" style={{color: "#feb60a"}}></i>
            );
        }
        return starArray;
    };
    
    const handleAddProductToCart = async (productId) => {
        const res = await addProductToCartByUserIdAndProductId(userId, productId)
        if (res && res.data.code === 200) {
            dispatch({
                type: 'ADD_CART',
                payload: {
                    id: productId,
                    data: res.data.data
                }
            })
            toast.success(res.data.message)
        } else {
            toast.error(res.data.message)
        }
       
    }
    
    return (
        <div className="product">
            <h2 className="typeing-text">{categoryName}</h2>
            <div className="ms-2 navbar-collapse navbar-middle" id="navbarSupportedContent">
                <form>
                    <div className="input-group">
                        <div className='search-btn'>
                                    <span className="input-group-text">
                                         <i className="fa-solid fa-magnifying-glass" style={{color: "#e32929"}}
                                            onClick={handleSearch}></i>
                                    </span>
                        </div>
                        <input type="search" className="form-control"
                               placeholder="Tìm kiếm món ăn" aria-label="Username"
                               aria-describedby="addon-wrapping"
                               onChange={(name) => {
                                   (setSearchName(name.target.value))
                               }}
                               onKeyDown={(e) => {
                                   handleKeyDown(e)
                               }}/>
                    </div>
                </form>
            </div>
            <div className="card-list container-fluid">
                {products !== undefined ? (
                    products.map((pro, index) => {
                        return (
                            <div key={pro.id} className="item text-center">
                                <div className="product-cover">
                                    <div className="image-cover p-3" style={{width: "100%", height: "22rem"}}>
                                        <img className="rounded bg-white" src={pro.image} alt=""
                                             style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                                    </div>
                                    <div className="detail">
                                        <h4 className="">{pro.name}</h4>
                                        <p><span className="">{pro.description}</span></p>
                                        <p className="">
                                            {renderStars(pro.feedbackPoint)}
                                        </p>
                                        <div className="d-flex px-4 justify-content-between w-100 lien-add"
                                             style={{color: "#e22625"}}>
                                            <h3 className="fs-5 fw-bolder mb-0 pt-1">{pro.price.toLocaleString()} đ</h3>
                                            <button onClick={() => handleAddProductToCart(pro.id)}
                                                    className="btn btn-sm py-0 px-2"
                                                    style={{backgroundColor: "#feb60a", borderRadius: "20px"}}> Thêm <i
                                                className="fa-solid fa-cart-plus" style={{color: "#e22625"}}></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ) : (<span>Không có món ăn</span>)}
            
            </div>
            <div aria-label="Page navigation example mt-3"
                 style={{marginTop: "1.5rem", display: "flex", justifyContent: "center"}}>
                <ul className="pagination">
                    <li className="page-item">
                        <button className="page-link" aria-label="Previous" onClick={() => prePage()} tabIndex={-1}
                                disabled={currentPage + 1 <= 1}>
                            <span aria-hidden="true">&laquo;</span>
                        </button>
                    </li>
                    <li className="page-item">
                        <button className="page-link">{currentPage + 1}/{totalPages}</button>
                    </li>
                    <li className="page-item">
                        <button className="page-link" aria-label="Next" disabled={currentPage + 1 >= totalPages}
                                onClick={() => nextPage()}>
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    
    
    )
}
export default Product;