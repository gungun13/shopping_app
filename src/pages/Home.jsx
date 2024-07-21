import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from '../components/SliderItem';
import { setProducts } from '../redux/Slices/ProductSlice';
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
    const dispatch=useDispatch();
    const items = useSelector((state) => state.products.items);
    const filtered=useSelector((state)=>state.products.filteredItems);

    const { user} = useAuth0();
    console.log("current user",user);

    useEffect(()=>{
        dispatch(setProducts(items));
    },[items])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const getRandomItems = (items,num) => {
        const randomItems = [];
        for (let i = 0; i <num; i++) {
            const randomItem = items[Math.floor(Math.random() * items.length)];
            randomItems.push(randomItem);
        }
        return randomItems;
    };

    const randomItems = getRandomItems(items,5);

    return (
        <div className='container mx-auto '>
            <div className='bg-slate-900'>
                <Navbar/>
            </div>
            <div className="slider-container px-8 pt-6 bg-gray-200">
                <Slider {...settings}>
                    {randomItems.map((item) => (
                        item && item.id && ( // Check if item has an id before rendering
                            <div key={item.id}>
                                <SliderItem item={item} />
                            </div>
                        )
                    ))}
                </Slider>
            </div>
            
            {items.length===0?
            (<p>Loading...</p>):(filtered && filtered.length > 0 ? (
                <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
                    {
                        filtered.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>
            ):(
                <p>No result found</p>
            )
            )}

            
        </div>
    )
}

export default Home;


