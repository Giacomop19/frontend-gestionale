import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/signup/signup';
import Login from './components/login/login'


function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
         
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
