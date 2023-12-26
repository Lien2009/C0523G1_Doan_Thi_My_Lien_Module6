import React, {useContext, useEffect, useState} from 'react';
import "./Product.css"
import {findBestSeller} from "../../service/productService";
import {CartContext} from "../context/Context";
import {useNavigate} from "react-router-dom";

const AllProduct = () => {
    const [products, setProducts] = useState([]);
    const cartContext = useContext(CartContext);
    const {handleAddProductToCart} = cartContext;
    const navigate = useNavigate();

    useEffect(() => {
        display();
    }, []);
    const display = async () => {
        const res = await findBestSeller();
        setProducts(res.data);
        console.log(res)
    }
    const renderStars = (point) => {
        const starArray = [];
        if (point === 0) {
            starArray.push(<p style={{color:"#813531"}}>Chưa có đánh giá</p>)
        }
        for (let i = 0; i < point; i++) {
            starArray.push(
                <i className="fa-solid fa-star" style={{color: "#feb60a"}}></i>
            );
        }
        return starArray;

    };
    const goDetailPage = (id)=>{
        navigate(`/detail/${id}`);
    }

    return (
        <div className="product min-vh-100">
            <h2 className="typeing-text">Món Bán Chạy</h2>

            <div className="card-list container-fluid">
                {products !== undefined ? (
                    products.map((pro, index) => {
                        return (
                            <div className="item text-center" key={index}>
                                <div className="product-cover">
                                    <div className="image-cover p-3" style={{width: "100%", height: "22rem"}} onClick={()=>goDetailPage(pro.id)}>
                                        <img className="rounded bg-white" src={pro.image} alt=""
                                             style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                                    </div>
                                    <div className="detail">
                                        <h4 className="">{pro.name}</h4>
                                        <p className="description"><span>{pro.description}</span></p>
                                        <p className="">
                                            {renderStars(pro.feedbackPoint)}
                                        </p>
                                        <div className="d-flex px-4 justify-content-between w-100 lien-add"
                                             style={{color: "#e22625"}}>
                                            <h3 className="fs-5 fw-bolder mb-0 pt-1">{pro.price.toLocaleString()} đ</h3>
                                            <button onClick={() => handleAddProductToCart(pro.id)}
                                                    className="btn btn-sm py-0 px-2"
                                                    style={{
                                                        backgroundColor: "#feb60a",
                                                        borderRadius: "20px"
                                                    }}> Thêm <i
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
        </div>
    )
}
export default AllProduct;