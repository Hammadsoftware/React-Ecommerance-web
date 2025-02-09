import React from 'react'
import { products } from '../export'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { TiHeartFullOutline } from "react-icons/ti";
AOS.init();
export const Productgrid = () => {
  

  return (
    <>
      <div  className='w-full h-fit bg-slate-100 lg:px-20 px-5 flex flex-col justify-center items-center text-center gap-5 py-10'>
        {/* Heading Section */}
        <div data-aos="zoom-in">
          <h1 className='font-semibold text-blue-800 text-2xl'>Browse Collections</h1>
          <h1>Trending Items</h1>
        </div>

        {/* Product Grid */}
        <div data-aos="zoom-in" className='w-full min-h-[600px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pt-20 pb-20'>
          {products.map((item, index) => (
        
            <div key={index} className='flex flex-col justify-center items-center bg-white p-4 shadow-md rounded-lg h-[400px] hover:bg-blue-100'>
            
              <img className='' src={item.img} alt="Product Image" />
              <h1 className='font-semibold text-blue-800'>{item.name}</h1>
              <h3>{item.price}</h3>
              <button className='btn text-white bg-blue-700 border rounded w-20 mt-4 font-semibold  '>Buy</button>


            </div>
          ))}
         
        </div>
        <div className='w-full h-36 flex justify-center items-center'>
          <button className='btn text-white bg-blue-700 border rounded w-30 h-10 font-semibold  hover:bg-blue-900'>View All</button>
          </div>
        
      </div>
    </>
  )
}
