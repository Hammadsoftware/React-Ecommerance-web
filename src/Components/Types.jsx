import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Initialize AOS
AOS.init();
export function Types() {
  return (
    <div className="w-full lg:h-80 h-fit flex lg:flex-row flex-col justify-center items-center gap-15  pt-10 pb-10">

      <div data-aos="zoom-in-right" data-aos-delay="150" class="w-80 h-52 bg-cover bg-center border rounded bg-[url('src/assets/banner1.jpg')] flex justify-center items-center flex-col pl-36 gap-5" >
       <h1 className="border border-amber-200 rounded w-20 text-center text-amber-200 font font-semibold">60% OFF</h1>
       <h1 className=" text-center ">Wireless Decices</h1>

      </div>

      <div data-aos="zoom-in" data-aos-delay="150" class="w-80 h-52 bg-cover bg-center border rounded bg-[url('src/assets/banner2.jpg')] flex justify-center items-center flex-col pl-36 gap-5" >
       <h1 className="border border-amber-200 rounded w-20 text-center text-amber-200 font font-semibold">60% OFF</h1>
       <h1 className=" text-center ">Wireless Decices</h1>

      </div>

      <div data-aos="zoom-in-left" data-aos-delay="150" class="w-80 h-52 bg-cover bg-center border rounded bg-[url('src/assets/banner3.jpg')] flex justify-center items-center flex-col pl-36 gap-5" >
       <h1 className="border border-amber-200 rounded w-20 text-center text-amber-200 font font-semibold">60% OFF</h1>
       <h1 className=" text-center ">Wireless Decices</h1>

      </div>


    </div>
  );
}
