import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart")
  }

  return (
    <div className="flex items-center justify-between border-b border-gray-500 py-4 h-50">
      <div className="flex items-center gap-4">
        <div><img src={item.image} alt={item.title} className="w-20 h-22 rounded-md mr-4" /></div>
        <div>
        <h1 className="text-black-700 font-semibold text-lg">{item.title}</h1>
        <p className="text-gray-500 font-semibold text-md text-left mt-2">{item.description.split(" ").slice(0, 15).join(" ") + "..."}</p>
        <div className='flex justify-between items-center mt-2'>
          <p className="text-green-600 font-bold">${item.price}</p>
          <div className="cursor-pointer text-red-500" onClick={removeFromCart}>
            <MdDelete className="w-6 h-5" />
          </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default CartItem

