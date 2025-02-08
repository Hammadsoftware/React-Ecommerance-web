import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// ✅ Import images correctly
import insta1 from "../assets/insta1.jpg";
import insta2 from "../assets/insta2.jpg";
import insta3 from "../assets/insta3.jpg";
import insta4 from "../assets/insta4.jpg";
import insta5 from "../assets/insta5.jpg";
import insta6 from "../assets/insta6.jpg";

export const Insta = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const image = [
    { img: insta1, id: 1 },
    { img: insta2, id: 2 },
    { img: insta3, id: 3 },
    { img: insta4, id: 4 },
    { img: insta5, id: 5 },
    { img: insta6, id: 6 },
  ];

  return (
    <div className="w-full mt-15 h-auto bg-sky-50">
      <div data-aos="zoom-in" data-aos-delay="200" className="pt-20 flex flex-col justify-center items-center gap-3">
        <h1 className="font-semibold text-blue-800 text-2xl">Our Instagram Shop</h1>
        <h1 className="lg:text-5xl text-2xl font-bold">Follow On Instagram</h1>
      </div>

      <div className="w-full pt-40 pb-30 flex lg:flex-row flex-col gap-7 justify-center items-center">
        {image.map((item) => (
          <img className="w-54 h-60 bg-center bg-cover rounded" key={item.id} src={item.img} alt={`Instagram Image ${item.id}`} />
        ))}
      </div>

      <div className="pt-10 pb-15 flex justify-center items-center gap-3">
        <button className="bg-blue-800 text-white font-semibold text-center border rounded w-36 h-10 hover:bg-blue-900">
          #ElectronicsShop
        </button>
      </div>
    </div>
  );
};
