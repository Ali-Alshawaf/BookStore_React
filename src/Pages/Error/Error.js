import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="container bg-light text-center py-5">
            <h1 className="display-1 text-danger">404</h1>
            <h3 className="lead mb-3"><strong>Page not found</strong></h3>
            <Link to="/" className="btn btn-dark">
                <i className="fas fa-arrow-left me-1"></i> Return to Home
            </Link>

        </div>
    );
}

export default Error;