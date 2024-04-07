import React, { useState } from "react";
import { createUser } from "../../Service/UserService";
import './Login.css';
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

import { useNavigate, useParams } from 'react-router-dom';



const Register = () => {

  const navigator = useNavigate(); 

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setError('');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      setError('All fields are required.');
      return;
    }
    if (!validateEmail(formData.email)) {
      setError('Invalid email format.');
      return;
    }
    if (!validatePassword(formData.password)) {
      setError('Password requirements: at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.');
      return;
    }
    if (!validateUsername(formData.username)) {
      setError('Username must contain only letters and spaces.');
      return;
    }
    setError('');
  
    try {
      const response = await createUser(formData);
      setSuccess('User created successfully: ' + response.data);
  
      
     
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 365); 
      
      document.cookie = `username=${formData.username}; expires=${expirationDate.toUTCString()}; path=/`;
      document.cookie = `email=${formData.email}; expires=${expirationDate.toUTCString()}; path=/`;
      navigator('/upload');
    
    
    } catch (error) {
      console.error('Error creating user:', error);
      setError('Error creating user. Please try again later.');
    }
};


  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const validateUsername = (username) => {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(username);
  };

  return (
    <div className="bg-img">
      <div className="content">
        <header>Register</header>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <span className="fa fa-user"></span>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
              placeholder="Enter Username"
            />
          </div>
          <div className="fielda">
            <span className="fa fa-user"></span>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter Email"
            />
          </div>
          <div className="field space">
            <span className="fa fa-lock"></span>
            <input
              type={showPassword ? "text" : "password"}
              className="pass-key"
              required
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter Password"
            />
            <span className="show" onClick={togglePasswordVisibility}>
              {showPassword ? "HIDE" : "SHOW"}
            </span>
          </div>
          <br />
          <div className="field">
            <input type="submit" value="Register" />
          </div>
          {error && <div className="error">{error}</div>}
          {success && <div className="success">{success}</div>}
        </form>
        <div className="login">Or login with</div>
        <div className="links">
          <div className="facebook">
            <i className="fab fa-facebook-f"><span>Google</span></i>
          </div>
          <div className="instagram">
            <i className="fab fa-instagram"><span>Git</span></i>
          </div>
        </div>
        <div className="signup">Already have an account ?
          <Link to="/"> Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
