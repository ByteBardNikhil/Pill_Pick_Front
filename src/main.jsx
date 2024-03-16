import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
 
import NavBar from './Components/NavBar/NavBar.jsx'
import LoginOrSign from './Components/LoginOrSignUp/LoginOrSignUp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <LoginOrSign/>
    <App />
  </React.StrictMode>,
)
