import React, { useState } from "react";

export const Header = () => {
  // State to manage navbar visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle navbar visibility
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Array of navigation items
  const navItems = [
    { link: "Home", path: "home" },
    { link: "Products", path: "products" },
    { link: "Services", path: "services" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="text-blue-800 font-bold text-xl">.Shop</div>

          {/* Hamburger Menu Button (for mobile) */}
          <button
            onClick={toggleNavbar}
            className="text-blue-800 focus:outline-none lg:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Navbar Links */}
          <div
            className={`${isOpen ? "block" : "hidden"} lg:flex lg:items-center w-full lg:w-auto`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-0">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.path}`}
                    className="text-blue-800 hover:bg-blue-700 border-none w-20 text-center rounded hover:text-white  block py-2 lg:py-0"
                    onClick={() => setIsOpen(false)} // Close navbar on mobile after clicking a link
                  >
                    {item.link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};