import React from 'react';
import shipping from "../assets/shipping.png";
import parsel from "../assets/parsel.png";
import payment from "../assets/payment.png";

export const Services = () => {
  return (
    <>
      <div className='flex justify-center items-center lg:flex-row flex-col gap-20 pt-20 pb-20'>

        <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-center'>
          <img className='w-24' src={shipping} alt="Shipping" />
          <h1 className='text-2xl font-semibold p-2'>Worldwide Shipping</h1>
          <h3 className='text-blue-800'>Our service is very reliable</h3>
        </div>

        <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-center'>
          <img className='w-24' src={parsel} alt="Parcel" />
          <h1 className='text-2xl font-semibold p-2'>Return Policy</h1>
          <h3 className='text-blue-800'>Our service is very reliable</h3>
        </div>

        <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-center'>
          <img className='w-24' src={payment} alt="Payment" />
          <h1 className='text-2xl font-semibold p-2'>Payment</h1>
          <h3 className='text-blue-800'>100% Secure Payment</h3>
        </div>

      </div>
    </>
  );
};
