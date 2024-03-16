import React, { useState } from 'react'
import './LoginOrSignUp.css'



const LoginOrSign = () => {
  const [showSignUp, setShowSignUp] = useState(false);


  const toggleSignUp = () => {
    console.log("working");
    setShowSignUp(!showSignUp);
  };
  return (
    <div>
      <div class="container">
        <h2>Login</h2>
        <form action="login.php" method="post">
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
        <div class="oauth-buttons">
          <button class="oauth-button">Login with Google</button>
          <button class="oauth-button">Login with GitHub</button>
        </div>
        <p>Don't have an account?<a href="">Sign Up</a></p>
      </div>
    </div>
  )
}

export default LoginOrSign
