import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Cards from '../components/Cards';
import Navbar from '../components/Navbar';

const Jewellery = () => {
  const items = useSelector((store)=>store.products.items)
  // console.log(items)

  
  return (
    <div>
      <div className='bg-slate-900'>
            <Navbar/>
        </div>
        {items && items.length>0? (
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
                    {
                        items.filter((item)=>item.category==='jewelery')
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

export default Jewellery