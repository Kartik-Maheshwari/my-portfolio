import React from 'react'
import Typewriter from 'typewriter-effect';
import './Hero.css'


const HeroSection = ({links}) => {
  function genreSelectionHandler(){

  }


  return (
    <div className='flex flex-col gap-y-3 items-center w-full'>
        <div className='text-white text-7xl font-[600]'>Kartik Maheshwari</div>
        
        <div className='font-[400] text-white text-5xl flex ml-0 gap-x-3 '>
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

        <div className='text-4xl text-white flex gap-x-4 py-2'>
        {links.map((icon, index) => {
          const Icon = icon.image;
          return(
            <button key={index}
                className="genre-btn"
                onClick={() => genreSelectionHandler(icon.url)}
            >
                <Icon />
            </button>
          )})}
        </div>
    </div>
    
  )
}

export default HeroSection