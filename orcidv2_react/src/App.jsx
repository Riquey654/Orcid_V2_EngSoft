
import './App.css';
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from './Header_Footer/Header';
import Footer from './Header_Footer/Footer';

import HomePage from './pages/HomePage';
import OwnUserPage from './pages/OwnUserPage';

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path="/" element={<HomePage/>}/>
        <Route path="/ownUserPage" element={<OwnUserPage/>}/>

      </Routes>


      <Footer/>
      
    </div>
  );
}

export default App;
