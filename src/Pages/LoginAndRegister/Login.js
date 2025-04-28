import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginAndRegister.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = async () => {
    try {
      const response = await fetch("https://localhost:7029/api/account/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        alert("Login successful!");
        navigate("/Book"); 
      } else {
        const errorMessage = await response.text();
        alert(`Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Login failed", error);
      alert("Failed to login. Please try again later.");
    }
  };

  return (
    <div className="con">

<h1 className="Title">Login</h1>
            
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button className="form-group btn-dark" onClick={handleLogin}>Login</button>


            <hr className="Line" />
            <div className="flex-container">
                <div className="Links">
                    <a href="Register" className="link">Register</a>
                </div>
            </div>
            </div>

   
  );
};

export default Login;
