import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cards from '../components/Cards';
import Navbar from '../components/Navbar';
import { Select, Option } from "@material-tailwind/react";
import { sortProducts } from '../redux/Slices/ProductSlice';
import { setProducts } from '../redux/Slices/ProductSlice';

const Clothing = () => {
  const dispatch=useDispatch();
  const [sort, setSort] = useState('');
  const items = useSelector((store) => store.products.items)

  const sortIt = (e) => {
    const sortBy = e.target.value;
    setSort(sortBy);
    dispatch(sortProducts(sortBy))
  }


  return (
    <div>
      <div className='bg-slate-900'>
        <Navbar />
      </div>

      <div className="max-w-sm mx-auto mt-5">
        <select id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          defaultValue=""
          onChange={sortIt}
        >
          <option value="" disabled hidden>
            Sort By
          </option>
          <option value="Low to high">Price : Low to High</option>
          <option value="High to low">Price : High to Low</option>
          <option value="Rating">Rating</option>
        </select>
      </div>

      {items && items.length > 0 ? (
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
          {
            items.filter((item) => (item.category === "men's clothing" || item.category === "women's clothing"))
              .map((filtered) => (
                <Cards key={filtered.id} item={filtered} />
              ))

          }
        </div>
      ) :
        <p>loading...</p>
      }

    </div>
  )
}

export default Clothing
