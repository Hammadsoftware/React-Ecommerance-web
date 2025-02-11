
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import headset from "../assets/headset.jpg";
import dslr from "../assets/dslr.jpg";
import earbuds from "../assets/earbuds.jpg";

export const Hero = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  console.log(headset, dslr, earbuds);

  return (
    <div className="slider-container">
      <Slider {...settings}>
      <div 
  className="bg-blue-600 w-full h-screen bg-cover bg-center flex flex-col justify-center bg-[url('src/assets/headset.jpg')]"
  
  >


          <div className="w-full h-[600px] flex flex-col justify-center items-start lg:pl-44 pl-12 gap-4">
            <h1 data-aos="zoom-in" className="text-amber-300 font-bold lg:text-[20px] text-[12px] border rounded lg:w-96 w-48 text-center">
              Get upto Discounts 80% off
            </h1>
            <h1 data-aos="zoom-in" className="text-white font-bold lg:text-[100px] text-[60px]">
              HEADSET <br /> WIRELESS
            </h1>
            <h1 data-aos="zoom-in" className="text-white text-2xl font-bold">
              100% Trusted <span className="text-amber-200 font-bold">Electronics Gadgets</span>
            </h1>
            <button className="text-black text-2xl font-semibold text-center border rounded border-amber-200 hover:bg-amber-300 bg-amber-200 w-64 h-11">
              Online Collection
            </button>
          </div>
        </div>

        {/* DSLR Slide */}
        <div
          className="w-full min-h-screen bg-cover bg-center flex flex-col justify-center bg-[url('src/assets/headset.jpg')]"  >
          <div className="w-full h-[600px] flex flex-col justify-center items-start lg:pl-44 pl-12 gap-4">
            <h1 data-aos="zoom-in" className="text-amber-300 font-bold lg:text-[20px] text-[12px] border rounded lg:w-96 w-48 text-center">
              Get upto Discounts 80% off
            </h1><img src="/assets/headset.jpg" alt="Headset" />

            <h1 data-aos="zoom-in" className="text-white font-bold lg:text-[100px] text-[60px]">
              DSLR 360 <br /> CAMERA
            </h1>
            <h1 data-aos="zoom-in" className="text-white text-2xl font-bold">
              100% Trusted <span className="text-amber-200 font-bold">Electronics Gadgets</span>
            </h1>
            <button className="text-black text-2xl font-semibold text-center border rounded border-amber-200 bg-amber-200 w-64 h-11">
              Online Collection
            </button>
          </div>
        </div>

        {/* Earbuds Slide */}
        <div  className="w-full min-h-screen flex flex-col justify-center bg-[url('src/assets/headset.jpg')]n"  >

          <div className="w-full h-[600px] flex flex-col justify-center items-start lg:pl-44 pl-12 gap-4">
            <h1 data-aos="zoom-in" className="text-amber-300 font-bold lg:text-[20px] text-[12px] border rounded lg:w-96 w-48 text-center">
              Get upto Discounts 80% off
            </h1>
            <h1 data-aos="zoom-in" className="text-white font-bold lg:text-[100px] text-[60px]">
              EARBUDS <br /> WIRELESS
            </h1>
            <h1 data-aos="zoom-in" className="text-white text-2xl font-bold">
              100% Trusted <span className="text-amber-200 font-bold">Electronics Gadgets</span>
            </h1>
            <button className="text-black text-2xl font-semibold text-center border rounded border-amber-200 bg-amber-200 w-64 h-11">
              Online Collection
            </button>
          </div>
        </div>

      </Slider>
    </div>
  );
};
