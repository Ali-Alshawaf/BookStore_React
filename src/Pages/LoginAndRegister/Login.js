import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./LoginAndRegister.css";


const Login = () => {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  return (
    <div className="d-flex h-100" dir={isArabic ? "ltr" : "rtl"} style={{ minHeight: "100vh" }}>
      <div className="backgr col-8 d-none d-md-block"></div>

      <div className="col-md-4 d-flex flex-column justify-content-center align-items-center p-4 bg-light">
        <h1 className="text-center mb-4">{t("login.title")}</h1>

        <form className="w-100">
          <div className="form-group mb-3">

            <input
              type="email"
              className="form-control"
              placeholder={t("login.emailPlaceholder")}
              style={{ textAlign: isArabic ? "right" : "left" }}
              required
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder={t("login.passwordPlaceholder")}
              style={{ textAlign: isArabic ? "right" : "left" }}
              required
            />
          </div>

          <button type="submit" className="btn btn-dark w-100">
            {t("login.buttonText")}
          </button>
        </form>

        <hr className="w-100 my-4" />

        <div>
          <Link to="/Register" className="text-decoration-none">
            {t("login.registerLink")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
