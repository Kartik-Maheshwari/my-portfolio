import React from "react";
import { useState, useRef, useEffect } from "react";

const Aboutme = () => {
  //   const [isIntersecting, setIsIntersecting] = useState(false);
  //   const ref = useRef(null);

  //   useEffect(() => {
  //     const observer = new IntersectionObserver(
  //       ([entry]) => {
  //         setIsIntersecting(entry.isIntersecting);
  //       },
  //       { rootMargin: "-300px" }
  //     );
  //     console.log(isIntersecting);
  //     observer.observe(ref.current);

  //     return () => observer.disconnect();
  //   }, [isIntersecting]);

  //   useEffect(() => {
  //     if (isIntersecting) {
  //       ref.current.querySelectorAll("div").forEach((el) => {
  //         el.classList.add("slide-in");
  //       });
  //     }
  //   }, [isIntersecting]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-16 ">
      <div className="text-4xl">About Me</div>
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
