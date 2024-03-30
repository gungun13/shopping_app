import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
    const { cart } = useSelector((state) => state);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        setAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart]);

    return (
        <div className="mx-auto px-4 py-8 max-w-6xl">
            {cart.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        {cart.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>
                    <div className=" flex flex-col justify-between p-4 ml-12 ">
                        <div>
                            <div className="text-green-700 font-bold text-lg">YOUR CART</div>
                            <div className="text-green-700 font-bold mb-2 text-3xl">SUMMARY</div>
                            <p className="text-gray-700 font-bold text-xl"><span className="text-gray-500 font-semibold text-xl">Total Items:</span> {cart.length}</p>
                        </div>
                        <div>
                            <p className="text-green-700 font-bold mb-2 text-2xl"><span className="text-gray-700 font-semibold text-2xl">Total Amount:</span> ${amount.toFixed(2)}</p>
                            <button className="bg-green-600 text-white px-24 py-2 rounded-md hover:bg-green-700">Checkout Now</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className=" flex flex-col justify-center items-center mt-12">
                    <h1 className="text-3xl font-bold mb-4">Cart Empty</h1>
                    <NavLink to="/" className="text-blue-500 hover:underline">
                        <button className="bg-green-600 text-lg text-white px-6 py-2 rounded-md hover:bg-green-700">Shop Now</button>
                    </NavLink>
                </div>
            )}
        </div>
    );
}

export default Cart;

