import React, { useState,useEffect } from 'react';
import Cards from '../components/Cards';

const Home = () => {
    const API_URL="https://fakestoreapi.com/products";
    const[products,setProducts]=useState([])

    async function fetchData(){
        try{
            const response=await fetch(API_URL);
            const data=await response.json();
            setProducts(data);
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div>
        {
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
                    {
                        products.map((item)=>(
                            <Cards key={item.id} item={item}/>
                        ))
                    }
                </div>
        }
         
    </div>
  )
}

export default Home
