import React from 'react'

const RedButton = ({children, Icon}) => {
  return (
    <button  data-aos-duration="1400" className="bg-[#e84545] px-[15px] py-[8px] rounded-[4px] text-white absolute right-2 top-1/2 transform -translate-y-1/2">
        {children}
       {Icon && <Icon/>}
      </button>
  )
}

export default RedButton
