import React from "react";
import { Link } from "react-router-dom";
import "./LoginAndRegister.css";
import { useTranslation } from "react-i18next";

const Register = () => {
    const { t, i18n } = useTranslation();

    // Check if the active language is Arabic
    const isArabic = i18n.language === "ar";

    return (
        <div className="cont" dir={isArabic ? "ltr" : "rtl"}>
            <div className="background-section"></div>

            <div className="form-section">
                <h1 className="text-center">{t("register.title")}</h1>
                <input
                    type="text"
                    placeholder={t("register.namePlaceholder")}
                    style={{ textAlign: isArabic ? "right" : "left" }}
                />
                <input
                    type="email"
                    placeholder={t("register.emailPlaceholder")}
                    style={{ textAlign: isArabic ? "right" : "left" }}
                />
                <input
                    type="password"
                    placeholder={t("register.passwordPlaceholder")}
                    style={{ textAlign: isArabic ? "right" : "left" }}
                />
                <button className="submit btn-dark">
                    {t("register.buttonText")}
                </button>
                <hr className="Line" />
                <div className="Links">
                    <Link to="/Login" className="link">
                        {t("register.loginLink")}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
