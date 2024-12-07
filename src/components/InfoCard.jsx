import React from 'react'


const InfoCard = ({headerTxt, DescTxt, Icon}) => {
  return (
    <div className='bg-white shadow-lg px-[40px] py-[50px] justify-center items-center max-w-[310px] rounded-[10px]' data-aos="fade-up" >

        <div className='bg-[#FEF5F5]   rounded-full flex items-center justify-center w-[80px] h-[80px]  '>
            {Icon && <Icon className="text-[#e84545] text-[32px] " /> }
        </div>

      <p className='text-[24px] text-[#32353A] font-semibold' >
        {headerTxt}
      </p>
      <p className='text-[16px] text-[#32353A]'>
        {DescTxt}
      </p>
    </div>
  )
}

export default InfoCard
