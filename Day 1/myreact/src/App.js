import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './login';
import Signup from './signup';
import backgroundVideo from './video.mp4';

function App() {
  return (
    <div className="App">
      <video src={backgroundVideo} autoPlay loop muted className='background-video'></video>
      <div className='App-header'>
        <Login />
        {/* <Signup/> */}
      </div>
    </div>
  );
}

export default App;
