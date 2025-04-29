import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <Link className="navbar-brand ml-2" to="/Home">{t('navbar.bookstore')}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/Home">{t('navbar.home')}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Book">{t('navbar.books')}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">{t('navbar.about')}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">{t('navbar.contact')}</Link>
          </li>
        </ul>
        <Link className="btn btn-outline-dark me-2" to="/Login">{t('navbar.login')}</Link>
        <Link className="btn btn-outline-dark me-2" to="/Register">{t('navbar.register')}</Link>
        <Link className="btn btn-outline-dark me-2" to="/Cart">{t('navbar.cart')}</Link>
        <LanguageSelector/>
      </div>
      
    </nav>
  );
};

export default Navbar;
