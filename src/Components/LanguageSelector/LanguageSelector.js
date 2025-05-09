import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-dark dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span className={`flag-icon flag-icon-${currentLanguage === "ar" ? "sa" : "us"} me-1`}></span>
        <span>{currentLanguage === "ar" ? "عربي" : "English"}</span>
      </button>
      <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
        <li>
          <a
            className={`dropdown-item ${currentLanguage === "en" ? "active" : ""}`}
            href="#!"
            onClick={() => changeLanguage("en")}
          >
            <span className="flag-icon flag-icon-us me-1"></span>
            <span>English</span>
          </a>
        </li>
        <li>
          <a
            className={`dropdown-item ${currentLanguage === "ar" ? "active" : ""}`}
            href="#!"
            onClick={() => changeLanguage("ar")}
          >
            <span className="flag-icon flag-icon-sa me-1"></span>
            <span>عربي</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSelector;
