import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/Slices/CartSlice';
import { toast } from "react-hot-toast";
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { payNow } from '../Services/payment.js';

const SingleCard = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(product));
        toast.success("Item Added to Cart");
    };

    const removeFromCart = () => {
        dispatch(remove(product.id));
        toast.error("Item removed from cart");
    };

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
            setLoading(false);
        };
        getProduct();
    }, [id]);

    const ShowProduct = () => {
        return (
            <div className="flex flex-row justify-center py-20">
                <div className="w-1/4">
                    <img src={product.image} alt={product.title} height="300px" width="300px" className="rounded shadow-md" />
                </div>
                <div className="w-1/2 pl-10">
                    <h4 className="text-transform: uppercase text-xl font-bold my-3">{product.category}</h4>
                    <h1 className="text-3xl font-bold my-3">{product.title}</h1>
                    <p className="text-lg my-3">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star text-yellow-400"></i>
                    </p>
                    <h3 className="text-2xl font-bold my-3">$ {product.price}</h3>
                    <p className="text-lg">{product.description}</p>
                    {
                        cart.some((i) => i.id === product.id) ? //to find out particular item is present in the array or not 
                            (<button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-5 my-5"
                                 onClick={removeFromCart}>Remove Item</button>) :

                            (<button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-5 my-5"
                                 onClick={addToCart}>Add Item</button>)
                    }
                    <button onClick={()=>payNow(`${product.price}`)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        Buy Now
                    </button>
                </div>
            </div>
        );
    };

    return (
        <>
        <div className='bg-slate-900'>
            <Navbar/>
        </div>
        <div>
            {
                loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="container mx-auto p-4">
                        <div className="flex flex-row justify-center">
                            <ShowProduct />
                        </div>
                    </div>
                )
            }
        </div>
        </>
    );

};

export default SingleCard;

