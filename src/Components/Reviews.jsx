import React from 'react'
import Slider from "react-slick";
import { IoStar } from "react-icons/io5";
import { FaQuoteLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
// Initialize AOS
AOS.init();
import test1 from "src/assets/test1.jpg"
import test2 from "src/assets/test2.jpg"
import test3 from "src/assets/test3.jpg"
import test4 from "src/assets/test4.jpg"
import test5 from "src/assets/test5.jpg"
export const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const customerReviews = [
    {
      id: 1,
      name: "Amelia",
      image: `${test1}`,
      comment: "Excellent service! I'm really impressed.",
      rating: 5
    },
    {
      id: 2,
      name: "Freya",
      image: `${test2}`,
      comment: "Good quality, but delivery was a bit late.",
      rating: 4
    },
    {
      id: 3,
      name: "Hamza Sheikh",
      image: `${test3}`,
      comment: "Great experience! I will order again.",
      rating: 5
    },
    {
      id: 4,
      name: "Jhon",
      image: `${test4}`,
      comment: "The product was good, but packaging could be better.",
      rating: 3
    },
    {
      id: 5,
      name: "Olivia",
      image: `${test5}`,
      comment: "Amazing! I highly recommend it.",
      rating: 5
    }
  ];
  

  
  return (
    <>
      <div data-aos="zoom-in" data-aos-delay="300" className='pt-10 w-full h-fit flex flex-col justify-center items-center'>
        <h1 className='text-blue-800 font-semibold'>1300+ Customers reviews</h1>
        <h1 className='lg:text-4xl text-3xl font-bold pt-3'>Our Customers Love</h1>
        </div>
        <div className="slider-container">
      <Slider {...settings}>
    
    {customerReviews.map((item, index) => (
      <div data-aos="zoom-in" data-aos-delay="300"  key={index} className="pt-15  w-full flex justify-center items-center">
        <div className=' w-full flex justify-center items-center'>
        <img className="w-32 h-32 object-cover bg-center border rounded-full " src={`${item.image}`} alt={`Slide ${index + 1}`} />
        </div>
      
        <h1 className= 'pt-5 text-2xl font-bold text-center' key={index}>{item.name}</h1>

        
        <div className='pt-1 w-full h-15 gap-2 flex justify-center items-center'>
        <IoStar className='text-blue-900' />
        <IoStar className='text-blue-900' />
        <IoStar className='text-blue-900' />
        <IoStar className='text-blue-900' />
        <IoStar className='text-blue-900' />
        </div>
        <p className='pb-7 text-center text-2xl text-gray-600 '>{item.comment} </p>
        <div className='w-full flex  justify-center items-center'>
        <FaQuoteLeft className='text-5xl text-blue-800 text-center' />
        </div>
      </div>
    
    ))}
  </Slider>
</div> 






     

    </>

  );
}
