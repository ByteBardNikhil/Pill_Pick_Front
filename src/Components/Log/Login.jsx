import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {getUser} from '../../Service/UserService'
import './Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;

    try {
      const userData = await getUser(email); 
      console.log('User data:', userData);

       
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 365); 
      
      document.cookie = `username=${formData.username}; expires=${expirationDate.toUTCString()}; path=/`;
      document.cookie = `email=${formData.email}; expires=${expirationDate.toUTCString()}; path=/`;
      navigator('/upload');
    
       
    } catch (error) {
      // Handle errors, e.g., display error message to the user
      console.error('Error fetching user data:', error);
    }
  };
  
  
  
  
  
  
  
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-img">
      <Helmet>
        <script>
          {/* Add any script if needed */}
        </script>
      </Helmet>
      <div className="content">
        <header>Login</header>
        <form action="#">
          <div className="field">
            <span className="fa fa-user"></span>
            <input type="text" name="email" required placeholder="Enter Email"/>
          </div>
          <div className="field space">
            <span className="fa fa-lock"></span>
            <input
              type={showPassword ? "text" : "password"}
              className="pass-key"
              required
              name="password"
              placeholder="Enter Password"
            />
            <span className="show" onClick={togglePasswordVisibility}>
              {showPassword ? "HIDE" : "SHOW"}
            </span>
          </div>
          <div className="pass">
            <a href="#">Forgot Password ?</a>
          </div>
          <div className="field">
            <input type="submit" value="LOGIN"/>
          </div>
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
        <div className="signup">Don't have an account?
          <Link to="/register"> SignUp</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
