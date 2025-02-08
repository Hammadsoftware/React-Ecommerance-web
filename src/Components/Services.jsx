import React from 'react'

export const Services = () => {
  return (
    <>
    <div className='flex justify-center items-center lg:flex-row flex-col gap-20 pt-20 pb-20'>

     <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-center '>
       <img className='w-30 ' src="src/assets/shipping.png" alt="" />
       <h1 className='text-2xl font-semibold p-2' >Worldwide Shipping</h1>
       <h3 className='text-blue-800'> Our services is very reliable</h3>
     </div>

     <div  data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-center '>
       <img className='w-30 ' src="src/assets/return.png" alt="" />
       <h1 className='text-2xl font-semibold p-2' >Return Policiy</h1>
       <h3 className='text-blue-800'> Our services is very reliable</h3>
     </div>

     <div  data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-center '>
       <img className='w-30 ' src="src/assets/payment.png" alt="" />
       <h1 className='text-2xl font-semibold p-2' >Payment</h1>
       <h3 className='text-blue-800'> 100% Scure payment</h3>
     </div>


    </div>
    
    </>
  )
}
