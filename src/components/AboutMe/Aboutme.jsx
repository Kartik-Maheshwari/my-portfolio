import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Aboutme = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-14 ">
      <div className="text-4xl" data-aos="fade-left">
        About Me
      </div>
      <div className="shadow-md flex items-center justify-center p-12 gap-12 overflow-hidden w-full">
        <div className="flex-1 h-80 border-2 border-gray-900 flex justify-center items-center rounded-2xl transition-all duration-1000 ease-in">
          Child One
        </div>
        <div className="flex-1 h-80 border-2 border-gray-900 flex justify-center items-center rounded-2xl transition-all duration-1000 ease-in">
          Child Two
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
