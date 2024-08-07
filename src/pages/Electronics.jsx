import React from 'react'
import { useSelector } from 'react-redux'
import Cards from '../components/Cards';
import Navbar from '../components/Navbar';

const Electronics = () => {
    const items = useSelector((state)=>state.products.items)
    const filteredItems=useSelector((state)=>state.products.filteredItems)
  return (
        <div>
          <div className='bg-slate-900'>
            <Navbar/>
        </div>
        {items.length===0?(
          <p>loading....</p>
        ):(
          filteredItems && filteredItems.length>0 ?(
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
                    {
                        filteredItems.filter((item)=>(item.category === "electronics"))
                          .map((filtered)=>(
                            <Cards key={filtered.id} item={filtered}/>
                          ))
                        
                    }
                </div>
          ):(
            <p>No result found </p>
          )
        )}
      
    </div>
  )
}

export default Electronics
