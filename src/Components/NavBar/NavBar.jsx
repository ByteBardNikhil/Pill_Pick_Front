import React from 'react'



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
                     <div class="uploads"><button onClick={on}>Upload</button></div>
                    <div class="buttons">
                       
                         <div><button>Login/Sign Up</button></div>
                    </div>
                </nav>
       </div>
                
           
)
}

export default NavBar
