import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import axios from 'axios';
import Swal from "sweetalert2";

axios.defaults.withCredentials = true;

const Navbar = ({ user, setUser }) => {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = () => {
        const storedUser = localStorage.getItem("user");
        setUser(storedUser ? JSON.parse(storedUser) : null);
    };

    fetchUser();

    window.addEventListener("storage", fetchUser);

    return () => window.removeEventListener("storage", fetchUser);
}, [setUser]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/home");
    Swal.fire({
      toast: true,           
      position: "top-end",
      icon: "success",
      title: "Logged out successfully!",
      showConfirmButton: false,
      timer: 1500
  });
  };

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

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
            {user ? (
              <div className="dropdown">
                <button
                  className="btn btn-outline-light me-2 dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-user me-1"></i>Welcome, {user.username}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                    <Link className="dropdown-item" to="/">
                      {t('navbar.MyAccount')}
                    </Link>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      {t('navbar.Logout')}
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <Link className="btn btn-outline-light me-2" to="/Login">
                  <i className="fas fa-sign-in-alt me-1"></i> {t('navbar.login')}
                </Link>
                <Link className="btn btn-outline-light me-2" to="/Register">
                  <i className="fas fa-user-plus me-1"></i> {t('navbar.register')}
                </Link>
              </>
            )}
            <Link className="btn btn-outline-light me-2" to="/Cart">
              <i className="fas fa-shopping-cart me-1"></i> {t('navbar.cart')}
            </Link>
            <button className="btn btn-dark ms-auto me-2" onClick={toggleTheme}>
              <i className={theme === "dark" ? "fas fa-sun" : "fas fa-moon"}></i>
            </button>
            <div className="me-2">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;