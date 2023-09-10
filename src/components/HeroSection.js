import React from 'react'
import Typewriter from 'typewriter-effect';
import './Hero.css'


const HeroSection = ({links}) => {
  function genreSelectionHandler(){

  }


  return (
    <div className='flex flex-col gap-y-3 items-center w-full transition-all duration-300'>
        <div className='text-white text-8xl font-[600]'>Kartik Maheshwari</div>
        
        <div className='font-[400] text-white text-6xl flex ml-0 gap-x-3 '>
        <div className='left-0'>I am a</div> 
        <div>
          <Typewriter 
            options={{
              strings: [
                "Software Developer",
                "Freelancer",
                "MERN Stack Developer",
                "Open Source Contributor",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </div>
        </div>

        <div className='text-6xl text-white flex gap-x-4 py-2'>
        {links.map((icon, index) => {
          const Icon = icon.image;
          return(
            <button key={index}
                className="genre-btn hover:text-gray-700 transition-all duration-300"
                onClick={() => genreSelectionHandler(icon.url)}
                style={{}}
            >
                <Icon />
            </button>
          )})}
        </div>
    </div>
    
  )
}

export default HeroSection