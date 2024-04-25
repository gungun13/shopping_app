import React from 'react'
import { useSelector } from 'react-redux'
import Cards from '../components/Cards';

const Electronics = () => {
    const items = useSelector((state)=>state.products)
  return (
        <div>
        {items && items.length>0? (
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[60vh]'>
                    {
                        items.filter((item)=>(item.category === "electronics"))
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

export default Electronics
