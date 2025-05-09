import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import "./LoginAndRegister.css";

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
      alert(response.data.message);
      navigate("/login");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="d-flex h-100" dir={isArabic ? "ltr" : "rtl"} style={{ minHeight: "100vh" }}>
      <div className="backgr col-8 d-none d-md-block"></div>

      <div className="col-md-4 d-flex flex-column justify-content-center align-items-center p-4 bg-light">
        <h1 className="text-center mb-4">{t("register.title")}</h1>

        {errorMessage && <p className="text-danger">{errorMessage}</p>}

        <form className="w-100" onSubmit={handleRegister}>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder={t("register.namePlaceholder")}
              name="name"
              value={userData.name}
              onChange={handleChange}
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
              required
            />
          </div>

          <button type="submit" className="btn btn-dark w-100">
            {t("register.buttonText")}
          </button>
        </form>

        <hr className="w-100 my-4" />

        <div>
          <Link to="/Login" className="text-decoration-none">
            {t("register.loginLink")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
