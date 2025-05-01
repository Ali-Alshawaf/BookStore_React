import React, { useState } from "react";
import axios from "axios";

const AddBook = () => {
    const [bookData, setBookData] = useState({
        title: "",
        price: "",
        description: "",
    });
    const [file, setFile] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookData({ ...bookData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const uploadFile = async () => {
        const formData = new FormData();
        formData.append("FormFile", file);
        formData.append("Image", file?.name);
        formData.append("Title", bookData.title);
        formData.append("Price", bookData.price);
        formData.append("Description", bookData.description);

        try {
            const response = await axios.post("https://book-store12.runasp.net/api/books", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log(response.data);
            alert("Book added successfully!");
        } catch (error) {
            console.error("Error uploading book:", error.response?.data || error.message);
            alert("Failed to upload book. Please check your input.");
        }
    };

    return (
        <div class="container">
            <form>
                <div class="form-group">
                    <label>
                        Title:
                        <input class="form-control" type="text" name="title" value={bookData.title} onChange={handleInputChange} required />
                    </label>
                </div>

                <div class="form-group">
                    <label>
                        Price:
                        <input class="form-control" type="number" name="price" value={bookData.price} onChange={handleInputChange} required />
                    </label>
                </div>

                <div class="form-group">
                    <label>
                        Description:
                        <textarea class="form-control" name="description" value={bookData.description} onChange={handleInputChange} required />
                    </label>
                </div>

                <div class="form-group">
                    <label>
                        Image:
                        <input class="form-control" type="file" onChange={handleFileChange} required />
                    </label>
                </div>

                <div class="form-group">
                    <button class="btn-dark" type="button" onClick={uploadFile}>
                        Upload Book
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddBook;
