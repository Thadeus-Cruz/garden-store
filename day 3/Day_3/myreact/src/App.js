import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/App.css';
import Login from './components/login';
import Signup from './components/signup';
import FlowerGarden from './components/garden';
import Dashboard from './components/dashboard';
import AboutUs from './components/aboutus';

function App() {
  return (
    <div >
      {/* <FlowerGarden/> */}
      <Router>
      {/* <FlowerGarden/> */}
        <div >
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
