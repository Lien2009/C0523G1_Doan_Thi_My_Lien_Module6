import {useContext, useEffect, useState} from "react";
import {CartContext} from "../context/Context";
import {getAllOrder, getOrderDetail} from "../../service/orderService";
import { IoMdTime } from "react-icons/io";
import { FaSackDollar } from "react-icons/fa6";

const OrderHistory = ()=>{
    const [history, setHistory] = useState([]);
    const [detail, setDetail] = useState([]);
    const [orderId, setOrderId] = useState();
    const cartContext = useContext(CartContext);
    const {userId} = cartContext;
    useEffect(()=>{
        displayHistory();
        displayDetail();
    },[])
    const displayHistory = async ()=>{
        const res = await getAllOrder(userId);
        setHistory(res.data);
        console.log(res.data)
    }
    const displayDetail = async ()=>{
        const res = await getOrderDetail(userId);
        setDetail(res.data);
        console.log(res.data)
    }
    return(
        <section className="ftco-section" style={{marginTop:"7rem"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="h3 mb-4 text-center" style={{fontFamily:"Pacifico, sans-serif"}}>Lịch Sử Đặt Hàng</h3>
                            <table className="table">
                                <thead>

                                </thead>
                                {history !== undefined?(
                                    history.map((his,index)=>{
                                        return(
                                            <tbody key={index}>
                                                <tr>
                                                    <td colSpan={2} style={{backgroundColor:"#f9c97a"}}><IoMdTime /> {his.orderDate}</td>
                                                    <td colSpan={2} style={{backgroundColor:"#f9c97a"}}><FaSackDollar /> {his.totalPrice.toLocaleString()} đ</td>
                                                </tr>
                                                <tr>
                                                    <th>Tên món</th>
                                                    <th>Số lượng</th>
                                                    <th>Đơn giá</th>
                                                    <th>Đánh giá</th>
                                                </tr>
                                                {detail !== undefined?(
                                                    detail.map((detail,index)=>{
                                                        if(detail.orderId === his.id){
                                                            return(
                                                                <tr key={index}>
                                                                    <td>{detail.name}</td>
                                                                    <td>{detail.quantity}</td>
                                                                    <td>{detail.price.toLocaleString()} đ</td>
                                                                    <td>aaaaaa</td>
                                                                </tr>
                                                            )
                                                        }
                                                    })
                                                ):(<span>Không có</span>)}
                                            </tbody>
                                        )
                                    })):(<span>Chưa có</span>)}


                            </table>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default OrderHistory;