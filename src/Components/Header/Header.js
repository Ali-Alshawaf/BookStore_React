import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow" dir={isArabic ? "rtl" : "ltr"}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-white me-3" to="/Home">
          {t('navbar.bookstore')}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Home">
                {t('navbar.home')}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Book">
                {t('navbar.books')}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/About">
                {t('navbar.about')}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Contact">
                {t('navbar.contact')}
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center ms-lg-3">
            <Link className="btn btn-outline-light me-2" to="/Login">
              <i className="fas fa-sign-in-alt me-1"></i> {t('navbar.login')}
            </Link>
            <Link className="btn btn-outline-light me-2" to="/Register">
              <i className="fas fa-user-plus me-1"></i> {t('navbar.register')}
            </Link>
            <Link className="btn btn-outline-light me-2" to="/Cart">
              <i className="fas fa-shopping-cart me-1"></i> {t('navbar.cart')}
            </Link>
          </div>

          <div className="ms-lg-3">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
