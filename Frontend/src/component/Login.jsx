import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleLoginSubmit = async(e)=>{
    e.preventDefault()
    try{
        const response = await axios.post('http://localhost:8000/login', loginData);
        const {success ,message} = response.data;
        if(success){
            console.log("Login Sucessfully");
        }

        else{
            console.log(message);
        }

    }
    catch(error){
        console.log("error ha",error);
    }

    setLoginData({username:'', password:''})
  }

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
          type="text"
          placeholder="password"
          name="password"
          required
          value={loginData.password}
          onChange={handleLoginChange}
        />
        <button type="submit">Login</button>
        <p>not registered yet? why wait not register</p>
        <Link to="/Register">Register Now</Link>
      </form>
    </div>
  );
};

export default Login;
