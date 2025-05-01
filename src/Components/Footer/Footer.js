import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-light py-4 mt-auto">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          <p className="mb-0 me-2">
            Dev by Ali Alshawaf 
          </p>
          <a
            href="https://github.com/Ali-Alshawaf"
            target="_blank"
            className="text-light">
            <i className="fab fa-github fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
