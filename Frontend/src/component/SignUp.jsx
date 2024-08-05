import axios from "axios";
import React, { useState } from "react";
import {Link} from "react-router-dom"

const SignUp = () => {
  const [register, setRegister] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://login-h4lz.onrender.com/register", register);
      const { message } = response.data;

      if (response.status === 201) {
        setMessage("Registered Successfully");
      } else {
        setMessage(message);
      }
    } catch (err) {
      console.error(err);
      setMessage("An error occurred during registration. Please try again.");
    }

    setRegister({username:'', password:''})
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          required
          value={register.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          value={register.password}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>already registered</p>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default SignUp;
