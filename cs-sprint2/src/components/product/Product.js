import React from 'react';
import p1 from "./img/p1.jpg"
import "./Product.css"
const Product = () => {
return(
<div className="product">
    <h2 className="typeing-text">Combo 1 Người</h2>
    <div className="card-list container-fluid">
        <div className="item text-center">
            <div className="product-cover">
                <div className="image-cover p-3">
                    <img className="rounded bg-white" src={p1} alt=""/>
                </div>
                <div className="detail">
                    <h4 className="">Combo gà viên</h4>
                    <p><span className="">1 phần gà viên + sốt kem</span></p>
                    {/*<p className="">*/}
                    {/*    <i className="fa-solid fa-star" style={{color:"#feb60a"}}></i>*/}
                    {/*    <i className="fa-solid fa-star" style={{color:"#feb60a"}}></i>*/}
                    {/*    <i className="fa-solid fa-star" style={{color:"#feb60a"}}></i>*/}
                    {/*    <i className="fa-solid fa-star" style={{color:"#feb60a"}}></i>*/}
                    {/*    <i className="fa-solid fa-star" style={{color:"#feb60a"}}></i>*/}
                    {/*</p>*/}
                    <div className="d-flex px-4 justify-content-between w-100 lien-add" style={{color:"#e22625"}}>
                        <h3 className="fs-5 fw-bolder mb-0 pt-1">50.000đ</h3>
                        <button className="btn btn-sm py-0 px-2" style={{backgroundColor:"#feb60a",borderRadius:"20px"}}> Thêm <i
                            className="fa-solid fa-cart-plus" style={{color:"#e22625"}}></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="item text-center">
            <div className="product-cover">
                <div className="image-cover p-3">
                    <img className="rounded bg-white" src={p1} alt=""/>
                </div>
                <div className="detail">
                    <h4 className="">Combo gà viên</h4>
                    <p><span className="">1 phần gà viên + sốt kem</span></p>
                    <div className="d-flex px-4 justify-content-between w-100 lien-add" style={{color:"#e22625"}}>
                        <h3 className="fs-5 fw-bolder mb-0 pt-1">50.000đ</h3>
                        <button className="btn btn-sm py-0 px-2" style={{backgroundColor:"#feb60a",borderRadius:"20px"}}> Thêm <i
                            className="fa-solid fa-cart-plus" style={{color:"#e22625"}}></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="item text-center">
            <div className="product-cover">
                <div className="image-cover p-3">
                    <img className="rounded bg-white" src={p1} alt=""/>
                </div>
                <div className="detail">
                    <h4 className="">Combo gà viên</h4>
                    <p><span className="">1 phần gà viên + sốt kem</span></p>
                    <div className="d-flex px-4 justify-content-between w-100 lien-add" style={{color:"#e22625"}}>
                        <h3 className="fs-5 fw-bolder mb-0 pt-1">50.000đ</h3>
                        <button className="btn btn-sm py-0 px-2" style={{backgroundColor:"#feb60a",borderRadius:"20px"}}> Thêm <i
                            className="fa-solid fa-cart-plus" style={{color:"#e22625"}}></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="item text-center">
            <div className="product-cover">
                <div className="image-cover p-3">
                    <img className="rounded bg-white" src={p1} alt=""/>
                </div>
                <div className="detail">
                    <h4 className="">Combo gà viên</h4>
                    <p><span className="">1 phần gà viên + sốt kem</span></p>
                    <div className="d-flex px-4 justify-content-between w-100 lien-add" style={{color:"#e22625"}}>
                        <h3 className="fs-5 fw-bolder mb-0 pt-1">50.000đ</h3>
                        <button className="btn btn-sm py-0 px-2" style={{backgroundColor:"#feb60a",borderRadius:"20px"}}> Thêm <i
                            className="fa-solid fa-cart-plus" style={{color:"#e22625"}}></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="item text-center">
            <div className="product-cover">
                <div className="image-cover p-3">
                    <img className="rounded bg-white" src={p1} alt=""/>
                </div>
                <div className="detail">
                    <h4 className="">Combo gà viên</h4>
                    <p><span className="">1 phần gà viên + sốt kem</span></p>
                    <div className="d-flex px-4 justify-content-between w-100 lien-add" style={{color:"#e22625"}}>
                        <h3 className="fs-5 fw-bolder mb-0 pt-1">50.000đ</h3>
                        <button className="btn btn-sm py-0 px-2" style={{backgroundColor:"#feb60a",borderRadius:"20px"}}> Thêm <i
                            className="fa-solid fa-cart-plus" style={{color:"#e22625"}}></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="item text-center">
            <div className="product-cover">
                <div className="image-cover p-3">
                    <img className="rounded bg-white" src={p1} alt=""/>
                </div>
                <div className="detail">
                    <h4 className="">Combo gà viên</h4>
                    <p><span className="">1 phần gà viên + sốt kem</span></p>
                    <div className="d-flex px-4 justify-content-between w-100 lien-add" style={{color:"#e22625"}}>
                        <h3 className="fs-5 fw-bolder mb-0 pt-1">50.000đ</h3>
                        <button className="btn btn-sm py-0 px-2" style={{backgroundColor:"#feb60a",borderRadius:"20px"}}> Thêm <i
                            className="fa-solid fa-cart-plus" style={{color:"#e22625"}}></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


)
}
export default Product;