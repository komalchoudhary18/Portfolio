import React from 'react'
import HeroImage from '../assets/hero-imgage.png'

const Hero = () => {
  return (
    <div className='py-16 text-center text-white bg-black'>
        <img src={HeroImage} alt="" 
        className='object-cover w-48 h-48 mx-auto mb-8 transition-transform duration-300 transform rounded-full hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Komal Kumari</span>
            , Frontend Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            I specialize in building modern and responsive web applications.
        </p>
        <div className='mt-8 space-x-4'>
            <button
            className='px-4 py-2 text-white transition-transform duration-300 transform rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105'>Contact With Me</button>
            <button
            className='px-4 py-2 text-white transition-transform duration-300 transform rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:scale-105'>Resume</button>
        </div>

    </div>
  )
}

export default Hero