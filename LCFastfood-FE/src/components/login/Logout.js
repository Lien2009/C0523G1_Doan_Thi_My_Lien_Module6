import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import * as userService from "../../service/userService";
import {useContext} from "react";
import {CartContext} from "../context/Context";

export function Logout (events){
    const {show, handleClose} = events;
    const navigate = useNavigate();
    const cartContext = useContext(CartContext);
    const {dispatch} = cartContext;
    const handleLogout = ()=>{
        userService.handleLogout();
        handleClose();
        navigate("/");
        dispatch({
            type: 'REMOVE_ALL_ITEMS',
        })
        toast.success("Đăng xuất thành công!");
    }
    if(!show){
        return null;
    }
    return (
        <>
            <div className="modal" tabIndex="-1" style={{display: 'block'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" style={{fontWeight: "bold"}}>Đăng xuất</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                    onClick={handleClose}></button>
                        </div>
                        <div className="modal-body">
                            <p>Bạn có chắc chắn muốn đăng xuất?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal"
                                    onClick={handleClose}>Quay lại
                            </button>
                            <button type="button" className="btn btn-outline-dark"
                                     onClick={() => handleLogout()}>Đăng xuất
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}