import React from "react";
import { Link } from "react-router-dom";
import "./LoginAndRegister.css";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t, i18n } = useTranslation();

  // Check if the active language is Arabic
  const isArabic = i18n.language === "ar";

  return (
    <div className="cont" dir={isArabic ? "ltr" : "rtl"}>
      <div className="background-section"></div>

      <div className="form-section">
        <h1 className="text-center">{t("login.title")}</h1>
        <input
          type="email"
          placeholder={t("login.emailPlaceholder")}
          style={{ textAlign: isArabic ? "right" : "left" }}
        />
        <input
          type="password"
          placeholder={t("login.passwordPlaceholder")}
          style={{ textAlign: isArabic ? "right" : "left" }}
        />
        <button className="submit btn-dark">{t("login.buttonText")}</button>
        <hr className="Line" />
        <div className="Links">
          <Link to="/Register" className="link">
            {t("login.registerLink")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
