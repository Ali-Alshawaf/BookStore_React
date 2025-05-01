import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./LoginAndRegister.css";


const Register = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <div className="d-flex h-100" dir={isArabic ? "ltr" : "rtl"} style={{ minHeight: "100vh" }}>
      <div className="backgr col-8 d-none d-md-block"></div>

      <div className="col-md-4 d-flex flex-column justify-content-center align-items-center p-4 bg-light">
        <h1 className="text-center mb-4">{t("register.title")}</h1>

        <form className="w-100">
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder={t("register.namePlaceholder")}
              style={{ textAlign: isArabic ? "right" : "left" }}
              required
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder={t("register.emailPlaceholder")}
              style={{ textAlign: isArabic ? "right" : "left" }}
              required
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder={t("register.passwordPlaceholder")}
              style={{ textAlign: isArabic ? "right" : "left" }}
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
