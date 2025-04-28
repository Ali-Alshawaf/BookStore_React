import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`https://localhost:7029/api/books/${id}`);
                setBook(response.data);
            } catch (error) {
                console.error("Error fetching book details:", error.response?.data || error.message);
            }
        };

        fetchBook();
    }, [id]);

    if (!book) {
        return <div className="container mt-4">Loading book details...</div>;
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={`https://localhost:7029/Images/${book.image}`}
                        className="img-fluid"
                        alt={book.title}
                    />
                </div>
                <div className="col-md-6">
                    <h1 className="mt-3">{book.title}</h1>
                    <h4 className="mt-3"><strong>Price:</strong> ${book.price}</h4>
                    <h4 className="mt-3">{book.description}</h4>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
