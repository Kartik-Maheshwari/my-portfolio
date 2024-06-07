import React from "react";
import Typewriter from "typewriter-effect";
import "./Hero.css";

const HeroSection = ({ links }) => {
  function genreSelectionHandler(url) {
    window.open(url, "_blank");
  }

  return (
    <div className="flex flex-col gap-y-3 items-center w-full transition-all duration-300">
      <div className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold text-center">
        Kartik Maheshwari
      </div>

      <div className="font-normal text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl flex items-center mt-2">
        <div className="mr-2">I am a</div>
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

      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white flex gap-x-4 py-2">
        {links.map((icon, index) => {
          const Icon = icon.image;
          return (
            <button
              key={index}
              className="genre-btn hover:text-gray-700 transition-all duration-300"
              onClick={() => genreSelectionHandler(icon.url)}
              style={{}}
            >
              <Icon />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection;
