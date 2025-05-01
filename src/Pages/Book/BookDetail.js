import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const { t } = useTranslation();

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`https://book-store12.runasp.net/api/books/${id}`);
                setBook(response.data);
            } catch (error) {
                console.error("Error fetching book details:", error.response?.data || error.message);
            }
        };

        fetchBook();
    }, [id]);

    if (!book) {
        return <div className="container mt-4">{t("bookDetails.loading")}</div>;
    }

    const addToCart = (book) => {
        const savedCart = localStorage.getItem("cart");
        const cart = savedCart ? JSON.parse(savedCart) : [];
    
        const existingBook = cart.find((item) => item.id === book.id);
    
        if (existingBook) {
            const updatedCart = cart.map((item) =>
                item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        } else {
            const updatedCart = [...cart, { ...book, quantity: 1 }];
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        }
    
        alert(t("book.successMessage")); 
    };
    

    return (
        <div className="container mt-4 mb-4">
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={`https://book-store12.runasp.net/Images/${book.image}`}
                        className="img-fluid"
                        alt={book.title}
                    />
                </div>
                <div className="col-md-6">
                    <h1 className="mt-3">{book.title}</h1>
                    <h4 className="mt-3">
                        <strong>{t("bookDetails.price")}:</strong> ${book.price}
                    </h4>
                    <h4 className="mt-3">{book.description}</h4>
                    <button className="btn btn-dark mt-3" onClick={()=>addToCart(book)}>
                        {t("bookDetails.addToCart")}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
