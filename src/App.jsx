import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Clothing from './pages/Clothing';
import Electronics from './pages/Electronics';
import Jewellery from './pages/Jewellery';
import { useDispatch } from 'react-redux';
import { setProducts } from './redux/Slices/ProductSlice';
import { fetchData } from './Services/api-client';
import FrontPage from './pages/FrontPage';
import { useAuth0 } from "@auth0/auth0-react";
import SingleCard from './pages/SingleCard';


const App = () => {
  const { isAuthenticated } = useAuth0();
  const dispatch=useDispatch();

  useEffect(() => {
    fetchData().then((data)=>{
      dispatch(setProducts(data));
    }).catch((err)=>console.log(err));
  }, []);
  return (
    <div> 
          {/* <Routes> */}
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/cart" element={<Cart />} />
            <Route path="/cloth" element={<Clothing/>} />
            <Route path="/electronics" element={<Electronics/>} />
            <Route path="/jewellery" element={<Jewellery/>} />
            {isAuthenticated ?(<Route path="/" element={<Home/>}/>):(<Route path="/" element={<FrontPage />} />)} */}
            {/* <Route path="/" element={<FrontPage/>}/> */}
            {/* <Route path="/product/:id" element={<SingleCard/>} />
          </Routes> */}

<Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cloth" element={<Clothing/>} />
            <Route path="/electronics" element={<Electronics/>} />
            <Route path="/jewellery" element={<Jewellery/>} />
            <Route path="/" element={<FrontPage/>}/>
            <Route path="/product/:id" element={<SingleCard/>} />
          </Routes>
          
    </div>
  );
};

export default App;

