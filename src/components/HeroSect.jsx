import React from 'react'
import Navbar from './Navbar'
import Aos from 'aos'
import 'aos/dist/aos.css';

Aos.init({
  duration: 800, 
  easing: 'ease-in-out', 
  once: true, 
});

const HeroSect = () => {
  return (
    <main>

    <section className='w-full bg-gray-700 opacity-[90%] h-screen bg-[url("../img/hero-bg.jpg")] bg-cover bg-center bg-blend-overlay bg-no-repeat '>
      <Navbar/>

      <div className='flex flex-col gap-[5px] justify-center w-full h-screen justify-center px-[300px] pb-[120px] '  >
        <p className='text-white text-[44px] font-bold ' data-aos="fade-up" >Welcome to Our Website
        </p>
        <p className='text-white text-[20px] opacity-[80%]  'data-aos="fade-up" data-aos-duration="1000" >We are team of talented designers making websites with Bootstrap</p>
        <div className="relative w-full max-w-md" data-aos="fade-up" data-aos-duration="1200" >
        <input 
        type="text"
        className="bg-white rounded-[5px] w-full py-[20px] pr-[100px] pl-[12px] border focus:outline-none my-[10px]"
        
        />
      <button  data-aos-duration="1400" className="bg-[#e84545] px-[15px] py-[8px] rounded-[4px] text-white absolute right-2 top-1/2 transform -translate-y-1/2">
        Subscribe
      </button></div>


      </div>
    </section>
        </main>
  )
}

export default HeroSect
