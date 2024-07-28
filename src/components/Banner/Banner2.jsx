import React from 'react'
import Satellite2 from '../../assets/satelite2.jpg'

const Banner2 = () => {
  return (
    <div className='bg-black text-white pb-12 relative z-50'>
     <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-center'>
            
            <div className='space-y-3 xl:pr-36 p-4 border-b-2 border-l-2 border-b-sky-900 border-l-sky-900'>
                <p data-aos='fade-up' className='text-sky-800'>Our Mission</p>
                <p data-aos='fade-up' data-aos-delay='300' className=' uppercase text-5xl'>Rapdicast</p>
                <p data-aos='fade-up' data-aos-delay='500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <button data-aos='fade-up' data-aos-delay='700' className='bg-blue-400 hover:bg-blue-500 rounded-md px-4 py-2  duration-300'>Know More</button>
            </div>
            <div>
            <img data-aos='zoom-in' src={Satellite2} alt="Satellite"  className='w-full sm:w-[80%] mx-auto object-cover max-h-[350px]'/>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Banner2
