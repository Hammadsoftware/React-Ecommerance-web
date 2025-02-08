import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import cat1 from '/assets/cat1.jpg';
import cat2 from '/assets/cat2.jpg';
import cat3 from '/assets/cat3.jpg';
import cat4 from '/assets/cat4.jpg';
import cat5 from '/assets/cat5.jpg';

// Initialize AOS
AOS.init();


export const Catogarey = () => {
  return (
    <>
      <div className='w-full lg:h-96 h-fit bg-gray-200 flex lg:flex-row flex-col justify-center items-center lg:gap-10 gap-15'>
        <div data-aos="zoom-in" data-aos-delay="100" className='flex justify-center items-center flex-col gap-8  h-64'>
          <h3 className='text-blue-800 font-semibold'>Favorites items</h3>
          <h1 className='text-3xl font-semibold pt-5'>Popular Categarey</h1>
          <button className='text-white font-semibold border rounded w-25 bg-blue-800'>View All </button>
        </div>

        <div data-aos="zoom-in" data-aos-delay="100" className='flex   justify-center items-center flex-col gap-1 h-64' >

          <img className='rounded-full h-48' src={cat1} alt="" />
          <h1 className='text-blue-800 font-semibold'>Speaker</h1>
        </div>

        <div data-aos="zoom-in" data-aos-delay="100" className='flex   justify-center items-center flex-col gap-1 h-64' >

          <img className='rounded-full h-48' src={cat2} alt="" />
          <h1 className='text-blue-800 font-semibold'>Speaker</h1>
        </div>

        <div data-aos="zoom-in" data-aos-delay="100" className='flex   justify-center items-center flex-col gap-1 h-64' >

          <img className='rounded-full h-48' src={cat3} alt="" />
          <h1 className='text-blue-800 font-semibold'>Wire</h1>
        </div>

        <div data-aos="zoom-in" data-aos-delay="100" className='flex   justify-center items-center flex-col gap-1 h-64' >

          <img className='rounded-full h-48' src={cat4} alt="" />
          <h1 className='text-blue-800 font-semibold'>DVD</h1>
        </div>

        <div data-aos="zoom-in" data-aos-delay="100" className='flex   justify-center items-center flex-col gap-1 h-64' >

          <img className='rounded-full h-48' src={cat5} alt="" />
          <h1 className='text-blue-800 font-semibold'>Camera</h1>
        </div>
      </div>
    </>
  )
}
