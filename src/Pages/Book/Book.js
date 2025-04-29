import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Book = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);
    const { t } = useTranslation();

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
        setCart([...cart, book]);
        alert(t("book.successMessage")); // Translated success message
    };

    return (
        <div className="container">
            <h1 className="my-4 text-center">{t("book.title")}</h1>
            <div className="row">
                {books.map((book) => (
                    <div className="col-md-3 mb-4" key={book.id}>
                    <div className="card h-100 d-flex flex-column">
                        <img
                            src={`https://localhost:7029/Images/${book.image}`}
                            className="card-img-top"
                            alt={book.title}
                            style={{ height: "400px", objectFit: "cover" }}
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{book.title}</h5>
                            <p className="card-text">
                                <strong>{t("book.price")}:</strong> ${book.price}
                            </p>
                            <div className="mt-auto"> {/* This pushes buttons to the bottom */}
                                <button className="btn btn-light me-2" onClick={() => addToCart(book)}>
                                    {t("book.addToCart")}
                                </button>
                                <Link to={`/book/${book.id}`} className="btn btn-dark">
                                    {t("book.viewDetails")}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                ))}
            </div>
        </div>
    );
};

export default Book;
