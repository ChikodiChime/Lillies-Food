import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from 'src/pages/Home';
import About from 'src/pages/About';
import Login from 'src/pages/Login';
import Signup from 'src/pages/Signup';
import Dashboard from './pages/Dashboard';
import Gallery from './pages/Gallery;'
import Recipes from './pages/Recipes';
import Contact from './pages/Contact';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from '../context/userContext';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true

function App() {
  return (
    <UserContextProvider>
   
      <Toaster position='top-right' toastOptions={{duration: 5000}}/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route  path='/About' element={<About />} />
        <Route  path='/Login' element={<Login />} />
        <Route  path='/Signup' element={<Signup />} />
        <Route  path='/Dashboard' element={<Dashboard />} />
        <Route  path='/Recipes' element={<Recipes />} />
        <Route  path='/Gallery' element={<Gallery />} />
        <Route  path='/Contact' element={<Contact />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
