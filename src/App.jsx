
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Register from './Components/Log/Register'
import Login from './Components/Log/Login'
import NavBar from './Components/NavBar/NavBar';
import Upload from './Components/Upload/Upload';

function App() {
    return(
        <BrowserRouter>
        <NavBar/>
          
        <Routes >
        <Route path="" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="upload" element={<Upload />}/>
        </Routes>  
        
        </BrowserRouter>
    );
  
}

export default App
