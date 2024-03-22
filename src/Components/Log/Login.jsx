import React,{useState} from "react"

import { Helmet } from "react-helmet"
import './Login.css'
import register from "./Register"
import { Link } from "react-router-dom"


const Login =()=>{
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


return(
  

<div class="bg-img">
  <Helmet>
        <script>
        
         
        </script>
      </Helmet>
      <div class="content">
        <header>Login</header>
        <form action="#">
          <div class="field">
            <span class="fa fa-user"></span>
            <input type="text" name="" required="" placeholder="Enter Email"/>
          </div>
          <div class="field space">
            <span class="fa fa-lock"></span>
            <input
              type={showPassword ? "text" : "password"}
              className="pass-key"
              required=""
              name=""
              placeholder="Enter Password"
            />
            <span className="show" onClick={togglePasswordVisibility}>
              {showPassword ? "HIDE" : "SHOW"}
            </span>
          </div>
          <div class="pass">
            <a href="#">Forgot Password ?</a>
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
        <div class="signup">Don't have account ?
         <Link to="/register"> SignUp</Link>
        </div>
      </div>
    </div>
)
}
    export default Login