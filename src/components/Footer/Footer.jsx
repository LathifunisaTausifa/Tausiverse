import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import { MdMessage ,MdCall } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white'>
      <section className='max-w-[1200px] mx-auto text-white'>
      <div className='grid md:grid-cols-3 py-5'>
        {/* first col */}
        <div className='px-4 py-8' data-aos='zoom-out'>
            <h1 className=' text-xl sm:text-3xl mb-3 text-justify font-bold sm:text-left'>Be ready to Grow</h1>
            <p>Get the <span className='font-bold'>latest news and updates</span> from our team</p>
            <div className='flex items-center h-10 gap-4 mt-2'>
                <input type= 'email' name = 'email' placeholder='Email' className='w-full h-[100%] inline-block focus:outline-none
                focus:border-sky-500 focus:ring-2 focus:ring-sky-500 py-1 px-3 rounded-md bg-gray-800 border-gray-200 border-2'/>
                <button className='bg-blue-400 hover:bg-blue-500 rounded-md px-4 py-2  duration-300'>Subscribe</button>
            </div>
        </div>
        {/* seocnd col */}
        <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ' data-aos='zoom-out'>
        <div >
            <div className='py-8 px-4'>
                <h1 className='font-bold text-xl mb-3'>
                    Quick Links
                </h1>
                <ul className='flex flex-col gap-3'>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>About</a>
                </li>
                <li>
                    <a href='#'>Servicse</a>
                </li>
                <li>
                    <a href='#'>Login</a>
                </li>
               
                </ul>
            </div>
        </div>
        <div >
            <div className='py-8 px-4'>
                <h1 className='font-bold text-xl mb-3'>
                    Importnt Links
                </h1>
                <ul className='flex flex-col gap-3'>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>About</a>
                </li>
                <li>
                    <a href='#'>Servicse</a>
                </li>
                <li>
                    <a href='#'>Login</a>
                </li>
               
                </ul>
            </div>
        </div>
        <div >
            <div className='py-8 px-4'>
                <h1 className='font-bold text-xl mb-3'>
                    Contact Us
                </h1>
              <div className=' space-y-3'>
                <div className='flex items-center gap-2'>
                    <HiLocationMarker/><p>Chennai, India</p>
                </div>
                <div className='flex items-center gap-2'>
                    <MdMessage /><p>Lathi_Tausi</p>
                </div>
                <div className='flex items-center gap-2'>
                    <MdCall /><p>+91 8610472292</p>
                </div>
              </div>
            </div>
        </div>

        </div>
        {/* bottom section */}
        
      </div>
        <div className='hidden sm:block'>
            <div className='flex  items-center justify-between py-6 border-t-2 border-gray-400' > 
            <span>Copyright &copy; 2024 by tausifakhanam212@gmail.com </span>
            <div className='flex items-center gap-4 justify-center pb-4'>
                <a href="#"><FaInstagram className=' text-4xl' /></a>
                <a href="#"><FaLinkedin className=' text-4xl' /></a>
                <a href="#"><FaWhatsapp className=' text-4xl' /></a>
                <a href="#"><FaFacebook className=' text-4xl' />
                </a>
            </div>
            <span className='text-sm text-gray-400'>
                <ul  className='flex gap-3'>
                    <li>Privacy Policy</li>
                    <li>Terms and Conditions</li>
                </ul>
            </span>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
