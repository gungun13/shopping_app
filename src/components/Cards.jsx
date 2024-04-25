import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add,remove } from '../redux/Slices/CartSlice';
import {toast} from "react-hot-toast";

const Cards = ({item}) => {
    const {cart}= useSelector((state)=>state);
    const dispatch=useDispatch();

    const addToCart=()=>{
        dispatch(add(item));
        toast.success("Item Added to Cart")
    }
    const removeFromCart=()=>{
        dispatch(remove(item.id));
        toast.error("item removed from cart")
    }
  return (
    <div className='flex flex-col items-center justify-between hover:scale-105 transition duration-300 ease-in gap-3 p-5 mt-10 ml-5 border rounded-xl border-gray-400 shadow-md '>
        <div>
            <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{item.title}</p>
        </div>
        <div>
            <p className='w-40 text-gray-500 font-normal text-[13px] text-left'>{item.description.split(" ").slice(0,8).join(" ")+"..."}</p>
        </div>
        <div className='h-[180px]'>
            <img src={item.image} className='h-full w-full'/>
        </div>
        <div className='flex justify-between gap-12 items-center w-full mt-5'>
            <div>
                <p className='text-green-600 font-semibold'>${item.price}</p>
            </div>
            {
            cart.some((i)=>i.id===item.id)? //to find out particular item is present in the array or not 
            (<button className="text-gray-700 border-2 border-gray-700 rounded-full 
            font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white
            transition duration-300 ease-in" onClick={removeFromCart}>Remove Item</button>) :

            (<button className="text-gray-700 border-2 border-gray-700 rounded-full 
            font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white
            transition duration-300 ease-in" onClick={addToCart}>Add Item</button>)
            }
        </div>
       
    </div>
  )
}

export default Cards
