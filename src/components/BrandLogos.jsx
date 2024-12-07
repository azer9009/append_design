import React from 'react'
import BL1 from '../img/brand_logo1.png'
import BL2 from '../img/brand_logo2.png'
import BL3 from '../img/brand_logo3.png'
import BL4 from '../img/brand_logo4.png'
import BL5 from '../img/brand_logo5.png'
import BL6 from '../img/brand_logo6.png'


const BrandLogos = () => {
  return (
    <div className="w-full flex justify-center gap-[120px] py-[25px] items-center shadow-lg ">
    <img
      src={BL1} alt="" data-aos="fade-up" data-aos-duration="600" className="w-[120px] h-[50px] grayscale hover:grayscale-0  transform  duration-300"
    />
    <img
      src={BL2}  alt=""  data-aos="fade-up" data-aos-duration="600"  className="w-[120px] h-[50px] grayscale hover:grayscale-0  transform  duration-300"
    />
    <img
      src={BL3} alt="" data-aos="fade-up" data-aos-duration="600"  className="w-[120px] h-[50px] grayscale hover:grayscale-0  transform  duration-800"
    />
    <img
      src={BL4}  alt="" data-aos="fade-up" data-aos-duration="600" className="w-[120px] h-[50px] grayscale hover:grayscale-0  transform  duration-300"
    />
    <img
      src={BL5} alt="" data-aos="fade-up" data-aos-duration="600" className="w-[120px] h-[50px] grayscale hover:grayscale-0  transform  duration-300"
    />
    <img
      src={BL6}   alt="" data-aos="fade-up" data-aos-duration="600" className="w-[120px] h-[50px] grayscale hover:grayscale-0  transform  duration-300"
    />
  </div>
  
  )
}

export default BrandLogos
