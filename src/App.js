import React from 'react';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';

import Register from './Pages/LoginAndRegister/Register';
import Login from './Pages/LoginAndRegister/Login';
import Cart from './Pages/Cart/Cart';
import Book from './Pages/Book/Book';
import BookDetail from './Pages/Book/BookDetail';
import AddBook from './Pages/Book/AddBook';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import Contact from './Pages/Contact/Contact'



function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh",marginTop:"80px" }}>
      <BrowserRouter>
      
        <Header />
        <main >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Book" element={<Book />} />
            <Route path="/AddBook" element={<AddBook />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/book/:id" element={<BookDetail />} />



          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}


export default App;