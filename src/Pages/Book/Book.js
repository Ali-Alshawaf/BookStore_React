import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

const Book = ({ cart, setCart }) => {
  const [books, setBooks] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("https://books-store12.runasp.net/api/Books");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error.response?.data || error.message);
      }
    };
    fetchBooks();
  }, []);

  const addToCart = (book) => {
    const existingBook = cart.find((item) => item.id === book.id);

    let updatedCart;
    if (existingBook) {
      updatedCart = cart.map((item) =>
        item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...book, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: t("book.successMessage"),
      showConfirmButton: false,
      timer: 3000
    });
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
                src={`https://books-store12.runasp.net/Images/${book.image}`}
                className="card-img-top"
                alt=""
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">{book.title}</h5>
                <p className="card-text text-center">
                  <strong>{t("book.price")}:</strong><span className="symbol">&#xea;</span>{book.price}
                </p>
                <div className="mt-auto d-flex justify-content-center">
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
