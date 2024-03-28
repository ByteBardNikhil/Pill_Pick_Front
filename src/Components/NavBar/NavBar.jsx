import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';


const NavBar = () => {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Function to extract cookie value by name
    const getCookie = (name) => {
        const cookies = document.cookie.split('; ');
        for (let cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split('=');
            if (cookieName === name) {
                return cookieValue;
            }
        }
        return null;
    };
    const navigator = useNavigate(); // Get the navigation function

    // Get the username from the cookie
    const username = getCookie('username');

    // Function to handle logout
    const handleLogout = () => {
        // Remove the username cookie
        document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

        navigator('/upload');
        // Redirect to the login page or perform any other necessary actions
    };

    return (
        <div>
            <div className="background-image"></div>
            <nav>
                <button className="uploads" onClick={scrollToTop}>Logo</button>
                <form action="" className="search-bar">
                    <input type="search" name="search" pattern=".*\S.*" required />
                    <button className="search-btn" type="submit">
                        <span>Search</span>
                    </button>
                </form>
                <button className="uploads">
                    <Link to="/upload" style={{ color: 'inherit', textDecoration: 'none' }}>Upload</Link>
                </button>
                {username ? (
                    <>
                        <button className="uploads">{username}</button>
                        <button className="uploads" onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <button className="uploads">
                        <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login / SignUp</Link>
                    </button>
                )}
            </nav>
        </div>
    );
}

export default NavBar;
