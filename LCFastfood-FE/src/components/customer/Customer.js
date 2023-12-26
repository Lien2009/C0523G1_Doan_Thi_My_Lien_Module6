import './Customer.css'
import {useContext} from "react";
import {CartContext} from "../context/Context";
import {useNavigate} from "react-router-dom";
import {updateCustomer} from "../../service/userService";
import {toast} from "react-toastify";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";


const Customer = () => {
    const cartContext = useContext(CartContext);
    const {customer, userId,displayCustomer} = cartContext;
    const navigate = useNavigate();
    console.log(customer)
    const update = async (customers) => {
        console.log(customers.phone, customers.email, customers.address, userId)
        const res = await updateCustomer(customers.phone, customers.email, customers.address, userId)
        console.log(res)
        if (res.status === 200) {
            toast("Sửa thành công!");
            displayCustomer();
            navigate("/customer");
        } else {
            toast.error("Lỗi");
            navigate("/customer");
        }
    };
    const validateObject = {
        phone: Yup.string()
            .required("Phải nhập dữ liêu")
            .min(10,"Số điện thoại không hợp lệ (10 chữ số)")
            .max(10,"Số điện thoại không hợp lệ (10 chữ số)"),
        email: Yup.string()
            .required("Phải nhập dữ liêu")
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),
        address: Yup.string()
            .required("Phải nhập dữ liêu")
            .max(255,"Địa chỉ dài quá quy định")
    }
    const initValue = customer && {
        phone: customer.phone,
        email: customer.email,
        address: customer.address
    }
    return (
        customer &&
        <div class="container rounded bg-white customer">
            <div class="row">
                <div class="col-md-3 border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img
                        class="rounded-circle mt-5" width="150px"
                        src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg"/><span
                        style={{fontWeight: "bolder"}}>{customer?.name}</span><span> </span></div>
                </div>
                <div class="col-md-9 border-right">
                    <div class="p-3 py-4">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4 class="text-right">Thông tin cá nhân</h4>
                        </div>
                        <Formik initialValues={initValue} onSubmit={(value) => {
                            update(value)
                        }}
                                validationSchema={Yup.object(validateObject)}>
                            <Form>


                                <div class="row mt-3">
                                    <div className="col-md-12"><label className="labels">Ngày sinh</label><input
                                        type="date"
                                        className="form-control"
                                        placeholder="enter phone number"
                                        value={customer.birthday} readOnly/>
                                    </div>
                                    <div class="col-md-12"><label class="labels">Số điện thoại</label><Field type="text"
                                                                                                             name="phone"
                                                                                                             class="form-control"
                                                                                                             placeholder="Nhập số điện thoại"
                                    />
                                        <ErrorMessage name="phone" component="span"
                                                      style={{color: "red"}}></ErrorMessage>
                                    </div>
                                    <div class="col-md-12"><label class="labels">Email</label><Field type="text"
                                                                                                     name="email"
                                                                                                     class="form-control"
                                                                                                     placeholder="Nhập email"
                                    />
                                        <ErrorMessage name="email" component="span"
                                                      style={{color: "red"}}></ErrorMessage></div>
                                    <div class="col-md-12"><label class="labels">Địa chỉ</label><Field type="text"
                                                                                                       name="address"
                                                                                                       class="form-control"
                                                                                                       placeholder="Nhập địa chỉ"
                                    /><ErrorMessage name="address" component="span" style={{color: "red"}}></ErrorMessage>
                                    </div>

                                </div>
                                <div class="mt-3 text-center">
                                    <button class="btn profile-button" style={{backgroundColor:"#813531",color:"white"}} type="submit">Cập nhật</button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Customer;