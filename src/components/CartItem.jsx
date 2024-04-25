import React from 'react'
import { useDispatch } from 'react-redux';
import { decreaseQty, remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { updateQty } from '../redux/Slices/CartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity || 1)

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart")
  }
  const incrementQuantity = () => {
    dispatch(updateQty({ id: item.id, quantity: quantity + 1 }));
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      dispatch(decreaseQty({ id: item.id, quantity: quantity - 1 }));
      setQuantity(quantity - 1);
    }
    else {
      removeFromCart();
    }
  };

  return (
    <div className="flex items-center justify-between border-b border-gray-500 py-4 h-50">
      <div className="flex items-center gap-4">
        <div><img src={item.image} alt={item.title} className="w-20 h-22 rounded-md mr-4" /></div>
        <div>
          <h1 className="text-black-700 font-semibold text-lg">{item.title}</h1>
          <p className="text-gray-500 font-semibold text-md text-left mt-2">{item.description.split(" ").slice(0, 15).join(" ") + "..."}</p>
          <div className='flex justify-between items-center mt-2'>
            <p className="text-green-600 font-bold">${item.price}</p>
            <div>
              <div className='flex gap-1'>
                <button className='bg-gray-300 hover:bg-gray-400 text-black font-bold text-2xl mt-1 py-0.6 px-2.5 rounded-lg' onClick={decrementQuantity}>-</button>
                <p className='py-2 px-2'>{quantity}</p>
                <button className='bg-gray-300 hover:bg-gray-400 text-black font-bold text-lg mt-1 py-0.6 px-2.5 rounded-lg' onClick={incrementQuantity}>+</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CartItem

