import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Pages/LoginAndRegister/Register';
import Login from './Pages/LoginAndRegister/Login';
import Cart from './Pages/Cart/Cart';
import Book from './Pages/Book/Book';
import BookDetail from './Pages/Book/BookDetail';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Checkout from './Pages/Checkout/Checkout';
import Error from './Pages/Error/Error';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <BrowserRouter>
      <Header user={user} setUser={setUser} />

      <Routes>
        <Route path="/Login" element={<Login setUser={setUser} />} />
        <Route path="/Register" element={<Register />} />

        <Route path="/*" element={
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", marginTop: "80px" }}>
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Book" element={<Book />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/About" element={<About />} />
                <Route path="/Checkout" element={<Checkout />} />
                <Route path="/book/:id" element={<BookDetail />} />
                <Route path="/*" element={<Error />} />
              </Routes>
            </main>
          </div>
        } />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
