
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Register from './Components/Log/Register'
import Login from './Components/Log/Login'
import NavBar from './Components/NavBar/NavBar';
import Upload from './Components/Upload/Upload';
import Text from './Components/Text/Text';
import DisplayMedicine from './Components/Text/DisplayMedicine';

function App() {
    return(
        <BrowserRouter>
        <NavBar/>
          
        <Routes >
        
        

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="upload" element={<Upload />}/>
        <Route path="/text" element={<Text />} />
        <Route path="/medicinedetail" element={<DisplayMedicine />} />


        

        </Routes>  
        
        </BrowserRouter>
    );
  
}

export default App
