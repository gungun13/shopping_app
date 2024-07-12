import React, { useState } from 'react'
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";
import { searchProducts } from '../redux/Slices/ProductSlice';
import { useAuth0 } from "@auth0/auth0-react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Navbar = () => {
  const { logout } = useAuth0();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const takeSearchValue = (e) => {
    const searchValue = e.target.value;
    dispatch(searchProducts(searchValue));
  }

  return (
    <div>
      <nav className='flex justify-between items-center h-20 container mx-auto relative z-50 text-xl'>
        <NavLink to="/home">
          <div className='ml-5'>
            <img src={logo} className='h-14' />
          </div>
        </NavLink>

        <div className="relative flex-1 mx-4 md:mx-0 max-w-xs md:max-w-sm lg:max-w-sm xl:max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="search" className="block w-full pl-10 pr-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                 placeholder="Search" required onChange={takeSearchValue} />
        </div>

        {/* Mobile menu button */}
        <div className='md:hidden mr-5'>
          <button className='text-2xl bg-white rounded px-1 py-1' onClick={() => setIsMobileMenuOpen(prevState => !prevState)}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop menu */}
        <div className='hidden md:flex items-center font-medium text-slate-100 mr-5 space-x-6'>
          <NavLink to="/home">
            <p className='hover:text-gray-400 '>Home</p>
          </NavLink>

          <div className='relative'>
            <button
              className='flex items-center gap-1 hover:text-gray-400'
              onMouseOver={() => setIsDropDownOpen(true)}
              onMouseLeave={() => setIsDropDownOpen(false)}>
              Categories
              {!isDropDownOpen ? (<IoMdArrowDropdown />) : (<IoMdArrowDropup />)}
            </button>
            {isDropDownOpen && (
              <div className='bg-slate-900 absolute top-7 flex flex-col p-3 rounded-b-lg'
                onMouseOver={() => setIsDropDownOpen(true)}
                onMouseLeave={() => setIsDropDownOpen(false)}>
                <NavLink to="/cloth">
                  <p className='hover:text-slate-400 rounded mb-1 mt-2'>Clothes</p>
                </NavLink>
                <NavLink to="/electronics">
                  <p className='hover:text-slate-400 rounded mb-1'>Electronics</p>
                </NavLink>
                <NavLink to="/jewellery">
                  <p className='hover:text-slate-400 rounded mb-1'>Jewellery</p>
                </NavLink>
              </div>
            )}
          </div>

          <button className='hover:text-gray-400 ' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>

          <NavLink to="/cart" className='hover:text-gray-400 '>
            <div className='relative'>
              <FaShoppingCart className='text-2xl' />
              {cart.length > 0 &&
                <span className='absolute -top-1 -right-2 bg-green-600 text-sm w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>
                  {cart.reduce((acc, curr) => {
                    const quantity = curr.quantity || 1;
                    return acc + quantity;
                  }, 0)}
                </span>}
            </div>
          </NavLink>
        </div>

        {/* Mobile menu */}
        <ul className={`md:hidden pb-12 absolute bg-gray-800 z-[-1] left-0 w-full pl-9 text-white space-y-5 py-4 transition-all duration-500 ease-in ${isMobileMenuOpen ? 'top-20' : 'top-[-490px]'}`}>
          <li>
            <NavLink to="/home" onClick={() => setIsMobileMenuOpen(false)}>
              <p>Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cloth" onClick={() => setIsMobileMenuOpen(false)}>
              <p>Clothes</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/electronics" onClick={() => setIsMobileMenuOpen(false)}>
              <p>Electronics</p>
            </NavLink>
          </li>
          <li>
            <button onClick={() => {
              logout({ logoutParams: { returnTo: window.location.origin } });
              setIsMobileMenuOpen(false);
            }}>
              Log Out
            </button>
          </li>
          <li>
            <NavLink to="/cart" onClick={() => setIsMobileMenuOpen(false)}>
              <div className='relative'>
                <FaShoppingCart className='text-2xl' />
                {cart.length > 0 &&
                  <span className='absolute -top-1 -right-2 bg-green-600 text-sm w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>
                    {cart.reduce((acc, curr) => {
                      const quantity = curr.quantity || 1;
                      return acc + quantity;
                    }, 0)}
                  </span>}
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;



