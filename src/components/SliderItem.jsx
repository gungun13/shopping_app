import React from 'react';

const SliderItem = ({ item }) => {
  return (
      <div className="bg-white container p-2 mx-auto ">
        <div className="border rounded-md shadow-md p-4">
          <div className="flex justify-center items-center gap-20 my-5">
            <div>
              <h1 className="text-black-700 font-semibold text-lg">{item.title.split(" ").slice(0, 3).join(" ")}</h1>
              <p className="text-gray-500 font-semibold text-md text-left mt-2">{item.description.split(" ").slice(0, 5).join(" ") + "..."}</p>
              <div className='flex justify-between items-center mt-2'>
                <p className="text-green-600 font-bold">${item.price}</p>
                <p className='text-green-600 font-bold'>NO COST EMI</p>
              </div>
            </div>
            <div><img src={item.image} alt={item.title} className="w-20 h-22 rounded-md mr-4" /></div>
          </div>
        </div>
      </div>
  );
};

export default SliderItem;



