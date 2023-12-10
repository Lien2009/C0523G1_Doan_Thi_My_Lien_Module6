import './Login.css'
import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import * as loginService from "../../service/userService";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {CartContext} from "../context/Context";
import * as userService from "../../service/userService";
import {jwtDecode} from "jwt-decode";
const Login = ()=>{
    const navigate = useNavigate();
    const cartContext = useContext(CartContext);
    const {setUserId} = cartContext;
    const handleLogin = async (values) => {
        try {
            const res = await loginService.login(values);

            loginService.addJwtTokenToLocalStorage(res.data.jwtToken);
            const tempURL = localStorage.getItem("tempURL");
            localStorage.removeItem("tempURL");
            if(res.status === 200){
                const jwt = jwtDecode(res.data.jwtToken);
                const user = await userService.getUser(jwt.sub);
                console.log(user)
                if (user) {
                    setUserId(user.id);
                }
                if(tempURL){
                    navigate(tempURL);
                }else {
                    navigate("/")
                }
                toast.success("Đăng nhập thành công!")
            }else {
                toast.error("Đăng nhập không thành công!")
            }
        }catch (e){
            toast.error("Tên đăng nhập hoặc mật khẩu không đúng!")
        }
    }
    const initValue = {
        userName: "",
        password: ""
    }
    const validateObject = {
        userName: Yup.string()
            .required("Vui lòng không để trống!"),
        password: Yup.string()
            .required("Vui lòng không để trống!")
    }
    const goRegisterPage = ()=>{
        navigate("/")
    }
    return(
        <body className="login js-fullheight">
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-5">
                        <h2 className="heading-section">Vị
                            ngon trên từng ngón tay</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="login-wrap p-0">
                            <Formik initialValues={initValue}
                                    onSubmit={(values)=>handleLogin(values)}
                                    validationSchema={Yup.object(validateObject)}
                            >
                                <Form className="signin-form">
                                    <div className="form-group">
                                        <Field type="text" name="userName" className="form-control" placeholder="Tên đăng nhập"/>
                                        <ErrorMessage name="userName" component="span" style={{color: "red"}}></ErrorMessage>
                                    </div>
                                    <div className="form-group">
                                        <Field id="password-field" name="password" type="password" className="form-control"
                                               placeholder="Mật khẩu"/>
                                        <span toggle="#password-field"
                                              className="fa fa-fw fa-eye field-icon toggle-password"></span>
                                        <ErrorMessage name="password" component="span" style={{color: "red"}}></ErrorMessage>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="form-control btn btn-primary submit px-3">Đăng
                                            nhập
                                        </button>
                                    </div>
                                    <div className="form-group">
                                        <button onClick={goRegisterPage} className="form-control btn btn-primary submit px-3">Đăng ký
                                        </button>
                                    </div>
                                    <div className="form-group d-md-flex">
                                        <div className="w-50">
                                            <label className="checkbox-wrap checkbox-primary">Ghi nhớ tài khoản
                                                <Field type="checkbox"/>
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="w-50 text-md-right">
                                            <a href="#" style={{color: "#fff"}}>Quên mật khẩu</a>
                                        </div>
                                    </div>
                                </Form>
                            </Formik>

                            <p className="w-100 text-center">&mdash; Hoặc đăng nhập với &mdash;</p>
                            <div className="social d-flex text-center">
                                <a href="#" className="px-2 py-2 mr-md-1 rounded"><span
                                    className="ion-logo-facebook mr-2"></span>
                                    Facebook</a>
                                <a href="#" className="px-2 py-2 ml-md-1 rounded"><span
                                    className="ion-logo-twitter mr-2"></span> Gmail</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </body>
    )
}
export default Login;