import React, { useState,useEffect } from 'react';
import Cards from '../components/Cards';
import { setProducts } from '../redux/Slices/ProductSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
const Home = () => {
    const items = useSelector((state)=>state.products);


  return (
    <div>
        {items && items.length>0? (
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
                    {
                        items.map((item)=>(
                            <Cards key={item.id} item={item}/>
                        ))
                    }
                </div>
        ):
        <p>loading...</p>
        }
         
    </div>
  )
}

export default Home
