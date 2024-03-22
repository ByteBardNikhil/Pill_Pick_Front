import React from 'react'
import { Link } from 'react-router-dom';



const NavBar = () => {


    function scrollToTop() {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (

        <div>
            <div className="background-image"></div>
            <nav>

                <button class="uploads" onclick="scrollToTop()">Logo</button>


                <form action="" class="search-bar">
                    <input type="search" name="search" pattern=".*\S.*" required />
                    <button class="search-btn" type="submit">
                        <span>Search</span>
                    </button>
                </form>
                <button className="uploads">
                    <Link to="/upload" style={{ color: 'inherit', textDecoration: 'none' }}>Upload</Link>
                </button>

                <button className="uploads">
                    <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login / SignUp</Link>
                </button>

            </nav>
        </div>


    )
}

export default NavBar
