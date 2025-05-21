import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import "./LoginAndRegister.css";
import LanguageSelector from "../../Components/LanguageSelector/LanguageSelector";
import Swal from "sweetalert2";


const Register = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [userData, setUserData] = useState({ name: "", email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post("https://books-store12.runasp.net/api/account/register", userData);
      Swal.fire({
        toast: true,       
        position: "top-end",
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 3000
    });
      navigate("/login");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="container-fluid" dir={isArabic ? "ltr" : "rtl"}>
      <div className="row min-vh-100">

        <div className="col-md-8 d-none d-md-block bg-secondary p-0">
          <div className="backgr w-100 h-100"></div>
        </div>

        <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center p-4">
          <h1 className="text-center mb-4">{t("register.title")}</h1>

          {errorMessage && <p className="text-danger w-100">{errorMessage}</p>}

          <form className="w-100" onSubmit={handleRegister}>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder={t("register.namePlaceholder")}
                name="name"
                value={userData.name}
                onChange={handleChange}
                style={{ textAlign: isArabic ? "right" : "left" }}
                required
              />
            </div>

            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder={t("register.emailPlaceholder")}
                name="email"
                value={userData.email}
                onChange={handleChange}
                style={{ textAlign: isArabic ? "right" : "left" }}
                required
              />
            </div>

            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder={t("register.passwordPlaceholder")}
                name="password"
                value={userData.password}
                onChange={handleChange}
                style={{ textAlign: isArabic ? "right" : "left" }}
                required
              />
            </div>

            <button type="submit" className="btn btn-dark w-100">
              {t("register.buttonText")}
            </button>
          </form>

          <hr className="w-100 my-4" />

          <div className="d-flex justify-content-between align-items-center w-100" dir={isArabic ? "rtl" : "ltr"}>
            <div className="text-start">
              {t("register.Q")}
              <Link to="/Login">
                {t("register.loginLink")}
              </Link>
            </div>

            <div className="text-end">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
