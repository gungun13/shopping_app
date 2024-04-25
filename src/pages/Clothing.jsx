import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Cards from '../components/Cards';

const Clothing = () => {
  const items = useSelector((store)=>store.products)
  // console.log(items)

  
  return (
    <div>
        {items && items.length>0? (
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[60vh]'>
                    {
                        items.filter((item)=>(item.category === "men's clothing" || item.category==="women's clothing"))
                          .map((filtered)=>(
                            <Cards key={filtered.id} item={filtered}/>
                          ))
                        
                    }
                </div>
        ):
        <p>loading...</p>
        }
         
    </div>
  )
}

export default Clothing
