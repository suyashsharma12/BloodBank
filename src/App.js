// App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './component/main/Home';
import Login from './component/Login';
import Register from './component/Register';
import Contact from './component/Contact';
import Search from './component/Search';
import RegisterCamp from './component/RegisterCamp';
import Signup from './component/Signup';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Contact" element={<Contact />} />
        <Route exact path="/Search" element={<Search />} />
        <Route  path="/RegisterCamp" element={<RegisterCamp />} />
        <Route  path="/Signup" element={<Signup />} />
    
       
    
        
      </Routes>
    </Router>
  );
};

export default App;
