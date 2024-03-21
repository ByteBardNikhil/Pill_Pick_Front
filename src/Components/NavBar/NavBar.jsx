import React from 'react'
import { Link } from 'react-router-dom';



const NavBar = () => {

    function on(){
        console.log("Runing");

    }
    return (
        
       <div>
        <div className="background-image"></div>
         <nav>
            
            <div class="logo">Logo</div>
            <form action="" class="search-bar">
	        <input type="search" name="search" pattern=".*\S.*" required/>
	         <button class="search-btn" type="submit">
	           	<span>Search</span>
	                     </button>
                     </form>
                     <div class="uploads"> <Link to="upload">Upload</Link></div>
                    
                </nav>
       </div>
                
           
)
}

export default NavBar
