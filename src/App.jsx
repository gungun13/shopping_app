import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';
import Clothing from './pages/Clothing';
import Electronics from './pages/Electronics';
import { useDispatch } from 'react-redux';
import { setProducts } from './redux/Slices/ProductSlice';
import { fetchData } from './Services/api-client';

const App = () => {
  const dispatch=useDispatch();

  useEffect(() => {
    // async function fetchData() {
    //   try {
    //     const response = await fetch("https://fakestoreapi.com/products");
    //     const data = await response.json();
    //     // console.log("Fetched data:", data);
    //     dispatch(setProducts(data));
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    fetchData().then((data)=>{
      dispatch(setProducts(data));
    }).catch((err)=>console.log(err));
  }, []);
  return (
    <div>
          <div className='bg-slate-900'>
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cloth" element={<Clothing/>} />
            <Route path="/electronics" element={<Electronics/>} />
          </Routes>
    </div>
  );
};

export default App;

