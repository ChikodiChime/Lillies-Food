import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from 'src/pages/Home';
import About from 'src/pages/About';
import Login from 'src/pages/Login';
import Signup from 'src/pages/Signup';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true

function App() {
  return (

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route  path='/About' element={<About />} />
        <Route  path='/Login' element={<Login />} />
        <Route  path='/Signup' element={<Signup />} />
      </Routes>
  
  );
}

export default App;
