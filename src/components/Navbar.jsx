import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 0 && !isScrolled) {
      setIsScrolled(true);
    } else if (scrollTop === 0 && isScrolled) {
      setIsScrolled(false);
    }
  };

  return (
    <nav
      className={`w-full py-[20px] px-[8px] flex justify-between items-center fixed top-0 z-10 transition duration-500 ${
        isScrolled ? "bg-[#ffffff]  backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className={` ${isScrolled ? "text-[#000000]" : "text-[#FFFFF]"} text-[24px] font-semibold text-white `}>
        Append <span className="text-[red]">.</span>
      </div>
      <ul className="flex gap-[10px] text-white">
        <li className={`p-[10px] ${isScrolled ? "text-[red]" : "text-[white]"} `}   >Home</li>
        <li className={`p-[10px] opacity-[50%] cursor-pointer hover:opacity-[100%] duration-500 ${isScrolled ? "text-[black]" : "text-white"} `}>About</li>
        <li className={`p-[10px] opacity-[50%] cursor-pointer hover:opacity-[100%] duration-500 ${isScrolled ? "text-[black]" : "text-white"} `}>Services</li>
        <li className={`p-[10px] opacity-[50%] cursor-pointer hover:opacity-[100%] duration-500 ${isScrolled ? "text-[black]" : "text-white"} `}>Portfolio</li>
        <li className={`p-[10px] opacity-[50%] cursor-pointer hover:opacity-[100%] duration-500 ${isScrolled ? "text-[black]" : "text-white"} `}>Pricing</li>
        <li className={`p-[10px] opacity-[50%] cursor-pointer hover:opacity-[100%] duration-500 ${isScrolled ? "text-[black]" : "text-white"} `}>Team</li>
        <li className={`p-[10px] opacity-[50%] cursor-pointer hover:opacity-[100%] duration-500 ${isScrolled ? "text-[black]" : "text-white"} `}>Blog</li>
        <li className={`p-[10px] opacity-[50%] cursor-pointer hover:opacity-[100%] duration-500} relative group ${isScrolled ? "text-[black]" : "text-white"}`}>
          <div className={`flex items-center gap-[2px] `}>
            Dropdown <FaAngleDown />
          </div>
          <ul className="absolute top-[100%] left-0 mt-[10px] bg-white text-black rounded shadow-md w-[150px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-500">
            <li className="p-[10px] hover:bg-gray-200 cursor-pointer">Dropdown 1</li>
            <li className="p-[10px] hover:bg-gray-200 cursor-pointer relative group flex items-center">
              Deep Dropdown <FaAngleDown className="ml-1" />
              <ul className="absolute top-0 left-[100%] mt-0 bg-white text-black rounded shadow-md w-[150px] opacity-0 hover:opacity-100 invisible group-hover:visible transition duration-500">
                <li className="p-[10px] hover:bg-gray-200 cursor-pointer">Deep Dropdown 1</li>
                <li className="p-[10px] hover:bg-gray-200 cursor-pointer">Deep Dropdown 2</li>
                <li className="p-[10px] hover:bg-gray-200 cursor-pointer">Deep Dropdown 3</li>
                <li className="p-[10px] hover:bg-gray-200 cursor-pointer">Deep Dropdown 4</li>
                <li className="p-[10px] hover:bg-gray-200 cursor-pointer">Deep Dropdown 5</li>
              </ul>
            </li>
            <li className="p-[10px] hover:bg-gray-200 cursor-pointer">Dropdown 2</li>
            <li className="p-[10px] hover:bg-gray-200 cursor-pointer">Dropdown 3</li>
            <li className="p-[10px] hover:bg-gray-200 cursor-pointer">Dropdown 4</li>
          </ul>
        </li>
        <li className={`p-[10px] opacity-[50%] cursor-pointer hover:opacity-[100%] ${isScrolled ? "text-[black]" : "text-white"}  duration-500 `}>Contact</li>
      </ul>
      <button className="bg-[#e84545] px-[26px] py-[8px] rounded-[4px] text-white">Get Started</button>
    </nav>
  );
};

export default Navbar;
