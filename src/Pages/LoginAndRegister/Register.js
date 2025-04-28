import React, { useState } from "react";
import "./LoginAndRegister.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await fetch("https://localhost:7029/api/account/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, email: email, password: password}),
      });

      if (response.ok) {
        alert("Registration successful!");
      } else {
        const errorMessage = await response.text();
        alert(`Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Registration failed", error);
      alert("Failed to register. Please try again later.");
    }
  };

  return (
    <div className="con">
      <h1 className="Title">Register</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="submit" onClick={handleRegister}>Register</button>


      <hr className="Line" />
      
      <div className="flex-container">
        <a href="Login" className="link">Login</a>
      </div>
    </div>
  );
};

export default Register;