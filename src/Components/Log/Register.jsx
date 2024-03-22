import React,{useState}from "react"
import { Helmet } from "react-helmet"
import './Login.css'
import NavBar from "../NavBar/NavBar"
import { Link } from "react-router-dom"
import login from "./Login" 

const Register =()=>{const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

return(
 
    
    
 

<div class="bg-img">
      <div class="content">
        <header>Register</header>
        <form action="#">
          <div class="field">
            <span class="fa fa-user"></span>
            <input type="text" name="" required="" placeholder="Name"/>
          </div>
          <div class="fielda">
            <span class="fa fa-user"></span>
            <input type="text" name="" required="" placeholder="Email or Phone"/>
          </div>
          <div class="field space">
          <span class="fa fa-lock"></span>
            <input
              type={showPassword ? "text" : "password"}
              className="pass-key"
              required=""
              name=""
              placeholder="Password"
            />
            <span className="show" onClick={togglePasswordVisibility}>
              {showPassword ? "HIDE" : "SHOW"}
            </span>
          </div>
          <div class="pass">
            <a href="#">Forgot Password?</a>
          </div>
          <div class="field">
            <input type="submit" value="LOGIN"/>
          </div>
        </form>
        <div class="login">Or login with</div>
        <div class="links">
          <div class="facebook">
            <i class="fab fa-facebook-f"><span>Google</span></i>
          </div>
          <div class="instagram">
            <i class="fab fa-instagram"><span>Git</span></i>
          </div>
        </div>
        <div class="signup">Already have account?
       <Link to="/">Login</Link>
        </div>
      </div>
    </div>
    
)
}
    export default Register