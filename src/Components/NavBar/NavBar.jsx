import React from 'react'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <div class="logo">Logo</div>
            <div class="search">
                <input type="text" placeholder="Search" />
                    <span>Pin Code:</span>
                    <input type="text" placeholder="Enter Pin"/>
                    </div>
                    <div class="buttons">
                        <button>Upload</button>
                        <button>Login/Sign Up</button>
                    </div>
                </nav>
                )
}

                export default NavBar
