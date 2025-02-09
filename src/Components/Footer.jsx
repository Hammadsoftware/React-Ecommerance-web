import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';
import client3 from '../assets/client3.png';
import client4 from '../assets/client4.png';
import client5 from '../assets/client5.png';
import client6 from '../assets/client6.png';
import google from '../assets/google.jpg';
import apple from '../assets/apple.jpg';
import pay1 from '../assets/pay1.jpg';
import pay2 from '../assets/pay2.jpg';
import pay3 from '../assets/pay3.jpg';
import pay4 from '../assets/pay4.jpg';
AOS.init();
export const Footer = () => {
  

  return (
    <>
      <div className='pl-10 bg-blue-700 w-full lg:h-20 h-60 grid lg:grid-cols-6 grid-cols-2 justify-center items-center gap-5 '>
        <div>
          <img data-aos="zoom-in" className='lg:w-30 w-25 lg:h-15 h-10 bg-cover bg-center ' src={client1} alt="" />
        </div>
        <div>
          <img data-aos="zoom-in" className='lg:w-30 w-25 lg:h-15 h-10  bg-cover bg-center ' src={client2} alt="" />
        </div>
        <div>
          <img data-aos="zoom-in" className='lg:w-30 w-25 lg:h-15 h-10  bg-cover bg-center ' src={client3} alt="" />
        </div>
        <div>
          <img data-aos="zoom-in" className='lg:w-30 w-25 lg:h-15 h-10  bg-cover bg-center ' src={client4} alt="" />
        </div>
        <div>
          <img data-aos="zoom-in" className='lg:w-30 w-25 lg:h-15 h-10  bg-cover bg-center ' src={client5} alt="" />
        </div>
        <div>
          <img data-aos="zoom-in" className='lg:w-30 w-25 lg:h-15 h-10  bg-cover bg-center ' src={client6} alt="" />
        </div>

      </div>
      {/* <div className='Container w-screen flex justify-center items-start lg:flex-row flex-col gap-20 bg-blue-50 pt-20 pb-10'>

      <div data-aos="zoom-in" className='p-3 lg:w-96 w-full h-96 flex flex-col justify-center items-start gap-2 bg-blue-50' >
        <h1 className='font-semibold text-blue-800 text-2xl'>.Shop</h1>
        <p className='text-gray-600 text center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nemo, modi veniam, voluptate totam inventore nesciunt, libero voluptatem vitae commodi officiis sunt rerum illo. Architecto tenetur a laborum neque consequatur!</p>
        <h1 className='lg:text-5xl text-2xl font-bold '>Download Our APP</h1>

        <div data-aos="zoom-in" className='flex gap-4'>
          <img src="src/assets/google.jpg" alt="" />
          <img src="src/assets/apple.jpg" alt="" />
        </div>

      </div>

      <div data-aos="zoom-in" className='p-3 lg:w-96 w-full  flex flex-col gap-4   bg-blue-50'>
        <h1 className=' lg:text-3xl text-2xl font-bold '>Useful Links</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
      </div>

      <div data-aos="zoom-in" className=' p-3 lg:w-96 w-full  flex flex-col gap-4  bg-blue-50'>
        <h1 className=' lg:text-3xl text-2xl font-bold '>Useful Links</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
      </div>

      </div>
     */}
     <div className="container w-screen flex justify-center items-start lg:flex-row flex-col gap-10 bg-blue-50 pt-20 pb-10 px-4">
  {/* Column 1: About and App Download */}
  <div
    data-aos="zoom-in"
    className="p-3 lg:w-96 w-full flex flex-col justify-center items-start gap-4 bg-blue-50"
  >
    <h1 className="font-semibold text-blue-800 text-2xl">.Shop</h1>
    <p className="text-gray-600">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nemo, modi veniam, voluptate totam inventore nesciunt, libero voluptatem vitae commodi officiis sunt rerum illo. Architecto tenetur a laborum neque consequatur!
    </p>
    <h1 className="lg:text-5xl text-2xl font-bold">Download Our App</h1>
    <div data-aos="zoom-in" className="flex gap-4">
      <img src={google} alt="Google Play Store" className="w-32 cursor-pointer" />
      <img src={apple} alt="Apple App Store" className="w-32 cursor-pointer" />
    </div>
  </div>

  {/* Column 2: Useful Links */}
  <div
    data-aos="zoom-in"
    className="p-3 lg:w-96 w-full flex flex-col gap-4 bg-blue-50"
  >
    <h1 className="lg:text-3xl text-2xl font-bold">Useful Links</h1>
    <a href="/home" className="text-gray-600 hover:text-blue-800">
      Home
    </a>
    <a href="/products" className="text-gray-600 hover:text-blue-800">
      Products
    </a>
    <a href="/services" className="text-gray-600 hover:text-blue-800">
      Services
    </a>
    <a href="/about" className="text-gray-600 hover:text-blue-800">
      About Us
    </a>
    <a href="/contact" className="text-gray-600 hover:text-blue-800">
      Contact
    </a>
  </div>

  {/* Column 3: Additional Links */}
  <div
    data-aos="zoom-in"
    className="p-3 lg:w-96 w-full flex flex-col gap-4 bg-blue-50"
  >
    <h1 className="lg:text-3xl text-2xl font-bold">More Links</h1>
    <a href="/blog" className="text-gray-600 hover:text-blue-800">
      Blog
    </a>
    <a href="/faq" className="text-gray-600 hover:text-blue-800">
      FAQ
    </a>
    <a href="/privacy" className="text-gray-600 hover:text-blue-800">
      Privacy Policy
    </a>
    <a href="/terms" className="text-gray-600 hover:text-blue-800">
      Terms & Conditions
    </a>
    <a href="/careers" className="text-gray-600 hover:text-blue-800">
      Careers
    </a>
  </div>
</div>
  

   <div data-aos="zoom-in" className=' w-full flex justify-center items-center  bg-blue-50 gap-5 pt-5 border-t-1' >
        <img className='lg:w-20 w-9' src={pay1} alt="" />
        <img className='lg:w-20 w-9' src={pay2} alt="" />
        <img className='lg:w-20 w-9' src={pay3} alt="" />
        <img className='lg:w-20 w-9' src={pay4} alt="" />
      </div>

      <div data-aos="zoom-in" className=' w-full flex flex-col justify-center items-center gap-2 pt-10  bg-blue-50 pb-20'>

      <h1 className=' lg:text-2xl text-2xl font-bold '>Subscribe Newsletter</h1>
      <input className='lg:w-66 w-64 bg-white pl-2 h-15 border rounded mt-5' type="text" placeholder='Enter valid Email' />
      <button className=' btn text-white bg-blue-700 border rounded lg:w-66 w-64 h-15 font-semibold  hover:bg-blue-900'>SUBMIT</button>
      
      </div>

  


      <div data-aos="zoom-in" className='flex justify-center  bg-blue-50 pb-6'>
        <h3 className='text-gray-600 text-bold' >2025 Powered Hammad Tariq</h3>
      </div>


    </>
  );
}
