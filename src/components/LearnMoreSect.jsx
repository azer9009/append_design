import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import InfoCard from './InfoCard';
import { FaBuilding } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";
import { BiCommand } from "react-icons/bi";
import { BiBuildingHouse } from "react-icons/bi";
import { FaChartLine } from "react-icons/fa";

const LearnMoreSect = () => {
  return (
    <div className='w-full flex  justify-center items-center py-[50px] bg-[#F9F9F9] ' >
      <div className='flex flex-col max-w-[450px] gap-[7px] ' data-aos="fade-up" >
        <div className=' text-[#e84545] bg-[#F8EFEF] py-[10px] px-[20px] max-w-[110px] rounded-[10px] ' >
            About Us
        </div>
        <p className='text-[#32353A] text-[32px] font-bold ' >Ducimus rerum libero reprehenderit cumque</p>
        <p className='text-[#212529] text-[16px]' >Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque alias maxime. Enim reiciendis minus et rerum hic non. Dicta quas cum quia maiores iure. Quidem nulla qui assumenda incidunt voluptatem tempora deleniti soluta.</p>
        <button className="bg-[#e84545] px-[26px] py-[8px] rounded-[4px] text-white hover:bg-[#fc737c] duration-500 max-w-[150px] flex items-center ">Read More <FaArrowRight  /> </button>
      </div>
      <div className='flex gap-[25px] '  >
        <div className='flex flex-col gap-[15px] mt-[50px] ' >
        <InfoCard headerTxt='Eius provident' DescTxt='Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem' Icon={BiBuildingHouse} ></InfoCard>
        <InfoCard headerTxt='Eius provident' DescTxt='Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem' Icon={FaClipboardCheck} ></InfoCard>
        </div>
        <div className='flex flex-col gap-[15px] ' >
        <InfoCard headerTxt='Eius provident' DescTxt='Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem' Icon={BiCommand} ></InfoCard>
        <InfoCard headerTxt='Eius provident' DescTxt='Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem' Icon={FaChartLine} ></InfoCard>
        </div>
      </div>
    </div>
  )
}

export default LearnMoreSect
