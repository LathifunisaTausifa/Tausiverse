import React from 'react'
import logo from '../../assets/logo.png'


const Navbar = () => {
  return (
    <div data-aos='fade-down' className='fixed top-0 right-0 w-full z-50 py-4 sm:py-4 bg-black/10 backdrop-blur-sm'>
    <div className='container'>
    <div className='flex justify-between items-center '>
        <div className='flex gap-4 text-white items-center text-2xl font-bold'>
            <img src={logo} alt = 'logo' className='w-10'/><span>Tausiverse</span>
        </div>
        <div className='text-white hidden md:block '>
            <ul className='flex py-4 gap-8 sm:py-0 text-xl font-semibold '>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>About</a>
                </li>
                <li>
                    <a href='#'>Gallaxy</a>
                </li>
                <li>
                    <a href='#'>Satellite</a>
                </li>
            </ul>
        </div>
        <div>
            <button className='text-white border-2 border-white px-3 py-1 rounded-md hidden md:block '>Login</button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Navbar
