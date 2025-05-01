import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Book = () => {
    const [books, setBooks] = useState([]);
    const { t } = useTranslation();

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get("https://book-store12.runasp.net/api/books");
                setBooks(response.data);
            } catch (error) {
                console.error("Error fetching books:", error.response?.data || error.message);
            }
        };
        fetchBooks();
    }, []);

    const addToCart = (book) => {
        const existingBook = cart.find((item) => item.id === book.id);

        if (existingBook) {
            const updatedCart = cart.map((item) =>
                item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        } else {
            const updatedCart = [...cart, { ...book, quantity: 1 }];
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        }

        alert(t("book.successMessage"));
    };

    return (
        <div className="container">
            <h1 className="my-4 text-center">{t("book.title")}</h1>
            <hr />
            <div className="row">
                {books.map((book) => (
                    <div className="col-md-3 mb-4" key={book.id}>
                        <div className="card h-100 d-flex flex-column">
                            <img
                                src={`https://book-store12.runasp.net/Images/${book.image}`}
                                className="card-img-top"
                                alt={book.title}
                                style={{ height: "400px", objectFit: "cover" }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{book.title}</h5>
                                <p className="card-text">
                                    <strong>{t("book.price")}:</strong> ${book.price}
                                </p>
                                <div className="mt-auto">
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
