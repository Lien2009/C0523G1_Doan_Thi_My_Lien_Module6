import {useContext, useEffect, useState} from "react";
import {CartContext} from "../context/Context";
import {getAllOrder, getOrderDetail, updateFeedbackStatus} from "../../service/orderService";
import {IoMdTime} from "react-icons/io";
import {FaSackDollar} from "react-icons/fa6";
import './OrderHistory.css'
import {addFeedback} from "../../service/productService";
import {toast} from "react-toastify";

const OrderHistory = () => {
    const [history, setHistory] = useState([]);
    const [detail, setDetail] = useState([]);
    const cartContext = useContext(CartContext);
    const {userId} = cartContext;
    const [ratings, setRatings] = useState({});
    const handleCheck = (orderDetailId, value) => {
        setRatings((prevRatings) => {
            const updatedRatings = {
                ...prevRatings,
                [orderDetailId]:value
            };
            return updatedRatings;
        });
        console.log(ratings)
    };


    const handleRating = async (orderDetailId, value) => {
        console.log(orderDetailId);
        console.log(value);
        setDetail(prevDetail => prevDetail.map(item => {
            if (item.id === orderDetailId) {
                return {
                    ...item,
                    feedbackStatus: value // Giả sử feedbackStatus sẽ nhận giá trị value khi đã gửi đánh giá
                };
            }
            return item;
        }));
        console.log(detail)
        const res = await updateFeedbackStatus(orderDetailId, value)
        console.log(res)
        if (res.status === 200) {
            toast("Đánh giá của bạn đã được gửi đi")
        } else {
            toast("Đánh giá lỗi!")
        }
    };

    useEffect(() => {
        displayHistory();
        displayDetail();
    }, [])
    const displayHistory = async () => {
        const res = await getAllOrder(userId);
        setHistory(res.data);
        console.log(res.data)
    }
    const displayDetail = async () => {
        const res = await getOrderDetail(userId);
        setDetail(res.data);
        console.log(res.data)
    }
    return (
        <section className="ftco-section" style={{marginTop: "7rem"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="h3 mb-4 text-center" style={{fontFamily: "Pacifico, sans-serif"}}>Lịch Sử Đặt
                            Hàng</h3>
                        <table className="table">
                            <thead>

                            </thead>
                            {history.length > 0 ? (
                                history.map((his, index) => {
                                    return (
                                        <tbody key={index}>
                                        <tr>
                                            <td colSpan={2} style={{backgroundColor: "#f9c97a"}}>
                                                <IoMdTime/> {his.orderDate}</td>
                                            <td colSpan={2} style={{backgroundColor: "#f9c97a"}}>
                                                <FaSackDollar/> {his.totalPrice.toLocaleString()} đ
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Tên món</th>
                                            <th>Số lượng</th>
                                            <th>Đơn giá</th>
                                            <th>Đánh giá</th>
                                        </tr>
                                        {detail !== undefined ? (
                                            detail.map((detail, index) => {
                                                if (detail.orderId === his.id) {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{detail.name}</td>
                                                            <td>{detail.quantity}</td>
                                                            <td>{detail.price.toLocaleString()} đ</td>
                                                            <td>
                                                                {detail.feedbackStatus > 0 ? (
                                                                        <span>Cảm ơn phản hồi của bạn</span>

                                                            ):(
                                                                    <>
                                                                        {[1, 2, 3, 4, 5].map((star) => (
                                                                            <label key={star} className="star-checkbox">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    value={star}
                                                                                    checked={ratings[detail.id]>= star}
                                                                                    onChange={()=>handleCheck(detail.id,star)}
                                                                                />
                                                                                <span className="star"></span>
                                                                            </label>
                                                                        ))}
                                                                        {ratings[detail.id]>0?(
                                                                            <button className="btn" style={{backgroundColor:"#f9c97a",marginBottom:"1rem"}}
                                                                                    onClick={() => handleRating(detail.id, ratings[detail.id])}>Gửi
                                                                            </button>
                                                                        ):(<></>)}

                                                                    </>
                                                            )
                                                            }

                                                        </td>
                                                </tr>
                                                )
                                                }
                                            })
                                        ) : (<span>Không có</span>)}
                                        </tbody>
                                    )
                                })) : (<span>Chưa có đơn nào</span>)}


                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default OrderHistory;