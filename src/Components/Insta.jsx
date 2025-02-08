import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

export const Insta = () => {
  const image=[
   {

    img: "src/assets/insta-1.jpg",
    id : 1
    
   },
   {

    img: "src/assets/insta-2.jpg",
    id : 2
    
   },
   {

    img: "src/assets/insta-3.jpg",
    id : 3
    
   },
   {

    img: "src/assets/insta-4.jpg",
    id : 4
    
   },
   {

    img: "src/assets/insta-5.jpg",
    id : 5
    
   },
   {

    img: "src/assets/insta-6.jpg",
    id : 6
    
   },
   
  ]
  return (
    <>
    <div  className='w-full mt-15 h-auto bg-sky-50'>

    <div data-aos="zoom-in" data-aos-delay="200" className='pt-20 flex flex-col justify-center items-center gap-3'>
     <h1 data-aos="zoom-in" data-aos-delay="200" className='font-semibold text-blue-800 text-2xl'>Our Instagram Shop</h1>
    <h1 data-aos="zoom-in" data-aos-delay="200" className='lg:text-5xl text-2xl font-bold '>Follow On Instagram</h1>
    </div>

 <div data-aos="zoom-in" data-aos-delay="200" className='w-full pt-40 pb-30 flex lg:flex-row flex-col gap-7 justify-center items-center ' >
  {
    image.map((item)=>(
      <img className='w-54 h-60 bg-center bg-cover rounded' key={item.id} src={item.img} alt={item.id} />
    ))

  }
  
 </div>
 <div className='pt-10 pb-15 flex justify-center items-center gap-3'>
  <button data-aos="zoom-in" data-aos-delay="200" className=' bg-blue-800 text-white font-semibold text-center border rounded w-36 h-10  hover:bg-blue-900'>#ElectronicsShop</button>
 </div>

    </div>
    
    </>
  );
}
