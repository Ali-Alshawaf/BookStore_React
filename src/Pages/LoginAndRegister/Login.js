import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

const Login = ({ setUser }) => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === "ar";
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://books-store12.runasp.net/api/account/login", { 
                email: username, 
                password: password 
            });
            localStorage.setItem("user", JSON.stringify(response.data));
            setUser(response.data); 
            Swal.fire({
              toast: true,       
              position: "top-end",
              icon: "success",
              title: "Logged in successfully!",
              showConfirmButton: false,
              timer: 1500
          });
                      navigate("/home");
        } catch (error) {
            alert("Login failed");
        }
    };

    return (
        <div className="container-fluid" dir={isArabic ? "ltr" : "rtl"}>
            <div className="row min-vh-100">
                <div className="col-md-8 d-none d-md-block bg-secondary p-0">
                    <div className="backgr w-100 h-100"></div>
                </div>
                <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center p-4">
                    <h1 className="text-center mb-4">{t("login.title")}</h1>
                    <form className="w-100" onSubmit={handleLogin}>
                        <div className="form-group mb-3">
                            <input type="email" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)}
                                placeholder={t("login.emailPlaceholder")} style={{ textAlign: isArabic ? "right" : "left" }} required />
                        </div>
                        <div className="form-group mb-3">
                            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}
                                placeholder={t("login.passwordPlaceholder")} style={{ textAlign: isArabic ? "right" : "left" }} required />
                        </div>
                        <button type="submit" className="btn btn-dark w-100">{t("login.buttonText")}</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
