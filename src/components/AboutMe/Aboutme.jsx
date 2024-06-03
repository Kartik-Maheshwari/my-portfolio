import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { motion } from "framer-motion";

// const Aboutme = ({ heading, message, link, imgSize, resume }) => {
//   const profilePicUrl = link;
//   <div className="hidden lg:flex lg:w-1/2 justify-center items-center"></div>;
//   return (
//     // <div className="py-3 m-0">
//     //   <div className="container mx-auto px-4 lg:px-0 py-5">
//     //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
//     //       <div className="hidden lg:flex lg:w-1/2 mx-auto justify-center items-center">
//     //         <img
//     //           className="border border-gray-400 rounded-full"
//     //           src={profilePicUrl}
//     //           alt="profilepicture"
//     //           width={imgSize}
//     //           height={imgSize}
//     //         />
//     //       </div>
//     //       <div className="flex flex-col justify-center items-center lg:text-left">
//     //         <h2 className="text-4xl lg:text-5xl font-bold mb-5 lg:mb-8">
//     //           {heading}
//     //         </h2>
//     //         <p className="text-lg lg:text-xl text-center lg:text-left">
//     //           {message}
//     //         </p>
//     //         {resume && (
//     //           <p className="mt-4 lg:mt-6 text-lg lg:text-xl">
//     //             <a
//     //               className="btn btn-outline-dark btn-lg border border-black text-black px-5 py-2"
//     //               href={resume}
//     //               target="_blank"
//     //               rel="noreferrer noopener"
//     //               role="button"
//     //               aria-label="Resume/CV"
//     //             >
//     //               Resume
//     //             </a>
//     //           </p>
//     //         )}
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//     <div className="py-3 m-0">
//       <div className="container mx-auto px-4 lg:px-0 py-5">
//         <div className="flex flex-col lg:max-w-7xl lg:flex-row lg:items-center lg:justify-between lg:space-x-8">
//           <div className="hidden lg:flex lg:w-1/2 mx-auto justify-center items-center">
//             <img
//               className="border border-gray-400 rounded-full"
//               src={profilePicUrl}
//               alt="profilepicture"
//               width={imgSize}
//               height={imgSize}
//             />
//           </div>
//           <div className="flex flex-col items-center justify-center lg:justify-start lg:w-1/2 text-center lg:text-left">
//             <h2 className="text-4xl lg:text-5xl font-bold mb-5 lg:mb-8">
//               {heading}
//             </h2>
//             <p className="text-lg lg:text-xl lg:text-justify">{message}</p>
//             {resume && (
//               <p className="mt-4 lg:mt-6 text-lg lg:text-xl">
//                 <a
//                   className="btn btn-outline-dark btn-lg border border-black text-black px-5 py-2"
//                   href={resume}
//                   target="_blank"
//                   rel="noreferrer noopener"
//                   role="button"
//                   aria-label="Resume/CV"
//                 >
//                   Resume
//                 </a>
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const Aboutme = ({ heading, message, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = useState("");

  useEffect(() => {
    setProfilePicUrl(link);
  }, [link]);

  const imageVariant = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
    whileInView: {
      opacity: [0, 1],
      scale: [0.5, 1], // start from scale 0.5 and go to 1
      transition: {
        duration: 1, // adjust duration as needed
      },
    },
  };

  const textVariant = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div className="py-3 m-0">
      <div className="container mx-auto px-4 lg:px-0 py-5">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <motion.div
            className="hidden lg:flex mx-auto justify-center items-center"
            initial="hidden"
            animate="visible"
            // whileInView={{
            //   opacity: [0, 1],
            //   scale: [0.5, 1], // start from scale 0.5 and go to 1
            //   transition: {
            //     duration: 1, // adjust duration as needed
            //   },
            // }}
            whileInView={{
              opacity: [0, 1],
              y: [-100, 5, 0],
            }}
            transition={{
              duration: 1.5,
            }}
          >
            <div className="relative">
              <img
                className="absolute animate-dots bottom-4 right-0 z-9"
                src="./images/dots.png"
                alt=""
              />
              <img
                className="absolute animate-cube-rotate bottom--4 right-0 z-9"
                src="./images/cube.png"
                alt=""
              />
              <img
                className="absolute animate-circle bottom-0 left-0 z-9"
                src="./images/circle.png"
                alt=""
              />
              <img
                className="absolute animate-zigzag top-6 left--1.2 z-9"
                src="./images/zigzags.png"
                alt=""
              />
              <img
                className="absolute shakeEffectPlus left-1/2 top--3.2 z-9"
                src="./images/plus.png"
                alt=""
              />
              <img
                className="border border-gray-400  rounded-[15%] bg-[#f19f4d]"
                src={profilePicUrl}
                alt="profilepicture"
                width={imgSize}
                height={imgSize}
              />
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col p-5 items-center "
            initial="hidden"
            animate="visible"
            whileInView={{
              opacity: [0, 1],
              x: [-100, 5, 0],
            }}
            transition={{
              duration: 1.5,
            }}
          >
            <div className="lg:text-left lg:w-full">
              <h2 className="text-4xl lg:text-5xl font-bold mb-5 lg:mb-8 lg:text-left text-[#d9d9d9]">
                {heading}
                <motion.div className="will-change-auto mt-1 bg-black h-1"></motion.div>
              </h2>
            </div>
            <motion.div
              whileInView={{
                opacity: [0, 1],
                y: [100, 5, 0],
              }}
              transition={{
                duration: 2,
              }}
            >
              <p className="text-lg font-medium lg:text-2xl  text-center lg:text-justify lg:max-w-2xl  text-[#d9d9d9]">
                {message}
              </p>
              {resume && (
                <p className="mt-4 lg:mt-6 text-lg text-center lg:text-xl">
                  <a
                    className="inline-block px-5 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
                    href={resume}
                    target="_blank"
                    rel="noreferrer noopener"
                    role="button"
                    aria-label="Resume/CV"
                  >
                    Resume
                  </a>
                </p>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
