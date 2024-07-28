import React from 'react'
import Mountain from '../../assets/moonsurface.png'

const Hero = () => {
  return (
    <div className=' bg-black/20 h-full text-white relative z-50'>
      <div className='flex justify-center items-center h-full p-4'>
        <div className='container grid sm:grid-cols-2 gap-4'>
        <div className=' space-y-4 lg:pr-36'>
          <h1 data-aos="fade-up" className=' font-bold text-5xl uppercase'>
            Orbit the Earth
          </h1>
          <p data-aos="fade-up" data-aos-delay='300' className=''>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</p>
          <button data-aos="fade-up" data-aos-delay='500' className='bg-blue-400 hover:bg-blue-500 rounded-md px-4 py-2  duration-300'>Know More</button></div>
          <div></div></div>
      </div>
      {/* img section */}
      <div>
                <img src={Mountain} alt="mountain" className='absolute bottom-0 right-0 w-full brightness-50 z-10'/>
                {/* bottom blur gradient */}
                <div className='absolute bottom-0 w-full z-30  bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:h-[60px]'></div>
            </div>
    </div>
  )
}

export default Hero
