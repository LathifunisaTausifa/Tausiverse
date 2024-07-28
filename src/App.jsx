import React from 'react'
import bgVideo from '../src/assets/earth-bg.mp4'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Banner1 from './components/Banner/Banner1'
import Banner2 from './components/Banner/Banner2'
import Footer from './components/Footer/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  React.useEffect(()=>{
    Aos.init({
      duration: 1200,
      easing: 'ease-in-out',
    })
  })
  return (
    <div>
      <div className='h-[700px]  relative'>
     
        <video
          autoPlay loop muted className='fixed right-0 top-0 w-full h-[700px] object-cover z-[-1]'>
          <source src={bgVideo} type='video/mp4' />
        </video>
        <Navbar />
        <Hero />
      </div>
      {/* service card */}
      <Services />
      <Banner1 />
      <Banner2 />
      <Footer />
    </div>
  )
}

export default App
