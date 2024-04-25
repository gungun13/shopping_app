import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';
import Clothing from './pages/Clothing';
import Electronics from './pages/Electronics';

const App = () => {

  return (
    <div>
          <div className='bg-slate-900'>
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cloth" element={<Clothing />} />
            <Route path="/electronics" element={<Electronics/>} />
          </Routes>
    </div>
  );
};

export default App;

