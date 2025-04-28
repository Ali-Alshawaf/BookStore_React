import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <Link className="navbar-brand ml-2" to="/Home">Book Store</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/Home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Book">Books</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">Contact</Link>
          </li>
        </ul>
        <button className="btn btn-outline-dark me-2" type="button"><Link className="nav-link" to="/Login">Login</Link>
        </button>
        <button className="btn btn-outline-dark me-2" type="button"><Link className="nav-link" to="/Register">Register</Link>
        </button>
        <button className="btn btn-outline-dark me-2" type="button">Cart</button>
      </div>
    </nav>
  );
};

export default Navbar;
