import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Book = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get("https://localhost:7029/api/books");
                setBooks(response.data);
            } catch (error) {
                console.error("Error fetching books:", error.response?.data || error.message);
            }
        };
        fetchBooks();
    }, []);

    const addToCart = (book) => {
        console.log(`Book added to cart: ${book.title}`);
        alert(`Added "${book.title}" to cart!`);
    };

    return (
        <div className="container">
        <h1 className="my-4 text-center">Book List</h1>
            <div className="row">
                {books.map((book) => (
                    <div className="col-md-3 mb-4" key={book.id}>
                        <div className="card">
                            <img
                                src={`https://localhost:7029/Images/${book.image}`}
                                className="card-img-top"
                                alt={book.title}
                                style={{ height: "400px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{book.title}</h5>
                                <p className="card-text"><strong>Price:</strong> ${book.price}</p>
                                <button
                                    className="btn btn-light me-2"
                                    onClick={() => addToCart(book)}
                                >
                                    Add to Cart
                                </button>
                                <Link to={`/book/${book.id}`} className="btn btn-dark">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Book;