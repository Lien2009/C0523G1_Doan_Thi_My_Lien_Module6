import "./Detail.css"
import React, {useContext, useEffect, useState} from "react";
import {findProductById, findRecommendProduct, getAllProductByCate} from "../../service/productService";
import {useParams} from "react-router-dom";
import {CartContext} from "../context/Context";

const Detail = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    const [products, setProducts] = useState([]);
    const [recommendCate, setRecommentCate] = useState();
    const [cateId, setCateId] = useState();
    const cartContext = useContext(CartContext);
    const {handleAddProductToCart} = cartContext;
    useEffect(()=>{
        display();
    },[]);
    useEffect(() => {
        if (cateId) {
            recommendProduct();
        }
    }, [cateId]);

    useEffect(() => {
        if (recommendCate) {
            displayRecommend();
        }
    }, [recommendCate]);
    const display = async ()=>{
        const res = await findProductById(id);
        setProduct(res);
        setCateId(res.categoryId);
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
    const recommendProduct = ()=>{
        switch (cateId){
            case 1:
            case 3:
                setRecommentCate(7);
                break;
            case 2:
            case 4:
            case 5:
                setRecommentCate(6);
                break;
            case 6:
            case 7:
                setRecommentCate(4);
                break;
            default:
                setRecommentCate(1);
                break;
        }
    }

    const displayRecommend = async () => {
        console.log(recommendCate)
        const res = await findRecommendProduct(recommendCate)
        console.log(res)
        setProducts(res);
    }

    return (
        <>
                <div className="container" style={{overflow: "hidden", marginTop:"9rem", marginBottom:"3rem"}}>
                    <div className="row gx-5">
                        <aside className="col-lg-6">
                            <div className=" mb-3 d-flex justify-content-center">
                                <div data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image">
                                    <img style={{maxWidth: "100%", maxHeight: "500px",margin: "auto"}}
                                         className="rounded-4 fit"
                                         src={product.image}/>
                                </div>
                            </div>
                        </aside>
                        <main className="col-lg-5 mb-3 justify-content-center" style={{backgroundColor:"#f9c97a",borderRadius:"2rem"}}>
                            <div className="ps-lg-3">
                                <h4 className="title text-dark">
                                    {product.name}
                                </h4>
                                <div className="d-flex flex-row">
                                    <div className="mb-1 me-2">
                                        {renderStars(product.feedbackPoint)}
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <span className="h5">{product?.price?.toLocaleString()} đ</span>
                                    <span className="text-muted">/phần</span>
                                </div>

                                <p>
                                    {product.description}
                                </p>
                                <hr/>
                                {/*<a href="#" className="btn btn-warning shadow-0"> Buy now </a>*/}
                                <button onClick={() => handleAddProductToCart(product.id)} className="btn shadow-0" style={{backgroundColor:"#feb60a"}}> <i
                                    className="me-1 fa fa-solid fa-cart-plus" style={{color:"#e22625"}}></i> Thêm vào giỏ
                                </button>
                                <h6 style={{marginTop:"1rem"}}>Nên ăn kèm với:</h6>
                                <div className="card-list-recommend container-fluid">
                                    {products !== undefined?(
                                        products.map((pro,index)=>{
                                            return(
                                                <div key={pro.id} className="item-detail text-center">
                                                    <div className="product-cover">
                                                        <div className="image-cover p-3" style={{width: "100%", height: "8rem"}}>
                                                            <img className="rounded bg-white" src={pro.image} alt=""
                                                                 style={{height: "100%", objectFit: "cover"}}/>
                                                        </div>
                                                        <div className="detail">
                                                            <h6 className="">{pro.name}</h6>
                                                            <div className="d-flex px-4 justify-content-between w-100 lien-add"
                                                                 style={{color: "#e22625"}}>
                                                                <p className="fw-bolder mb-0 pt-1" style={{fontSize: "1rem"}}>{pro.price.toLocaleString()} đ</p>
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
                                    ):(<span>Không có kết quả</span>)}
                                </div>
                            </div>
                        </main>

                    </div>
                </div>
        </>

    )
}
export default Detail;