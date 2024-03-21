import React from "react"

import './Login.css'
import NavBar from "../NavBar/NavBar"
import { Link } from "react-router-dom"
import login from "./Login" 

const Register =()=>{

return(
    <><NavBar/>
    
    
 

<div class="bg-img">
      <div class="content">
        <header>Register</header>
        <form action="#">
          <div class="field">
            <span class="fa fa-user"></span>
            <input type="text" required="" placeholder="Email or Phone"/>
          </div>
          <div class="field space">
            <span class="fa fa-lock"></span>
            <input type="password" class="pass-key" required=""  placeholder="Password"/>
            <span class="show">SHOW</span>
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
            <i class="fab fa-facebook-f"><span>Facebook</span></i>
          </div>
          <div class="instagram">
            <i class="fab fa-instagram"><span>Instagram</span></i>
          </div>
        </div>
        <div class="signup">Already have account?
       <Link to="/">Login</Link>
        </div>
      </div>
    </div>
    </>
)
}
    export default Register