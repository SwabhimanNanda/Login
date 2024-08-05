import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate(); // Get the navigate function

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://login-h4lz.onrender.com/login', loginData);
      const { success, message } = response.data;

      if (success) {
        console.log(success.message);
        navigate('/'); // Redirect to home page
      } else {
        console.log(message);
      }
    } catch (error) {
      console.log("Error:", error);
    }

    setLoginData({ username: '', password: '' });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="text"
          placeholder="username"
          name="username"
          required
          value={loginData.username}
          onChange={handleLoginChange}
        />
        <input
          type="password"
          placeholder="password" // Changed from text to password for security
          name="password"
          required
          value={loginData.password}
          onChange={handleLoginChange}
        />
        <button type="submit">Login</button>
        <p>Not registered yet? Why wait? Register now:</p>
        <Link to="/register">Register Now</Link> {/* Fixed case for consistency */}
      </form>
    </div>
  );
};

export default Login;
