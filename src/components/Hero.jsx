import React from 'react'
import HeroImage from '../assets/hero-image.png'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16 min-h-screen flex flex-col justify-center items-center'>
        <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            Hello, I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 h-20 w-full'>Abullah Khan Suri</span>
        </h1>
        <p className='mt-4 text-lg text-gray-200'>
        I am a Computer Science student at NYU, specializing in software development and artificial intelligence
        </p>
        <div className='mt-8 space-x-4'>
            <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}

            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact Me</button>
            <button
            onClick={() => window.open('https://docs.google.com/document/d/1Ml3o9_OrSPTBe9HwkWUVUpWB36Vrghzp2jIOm4aHtys/preview', '_blank', 'noopener,noreferrer')}
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
        </div>

    </div>
  )
}

export default Hero