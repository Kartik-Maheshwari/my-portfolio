import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";

// import { AppWrap, MotionWrap } from "../../wrapper";
// import { client, urlFor } from "../../client";
// import "./Skills.scss";
import { skills, experience } from "../config/data";

const Skills = () => {
  // const [skills, setSkills] = useState([]);
  // const [experience, setExperience] = useState();

  const skillVariants = {
    view: {
      x: [-15, 0],
      opacity: [0, 1],
      transition: {
        x: {
          type: "spring",
          stiffness: "10",
        },
        duration: 2.75,
        ease: "easeInOut",
      },
    },
    hover: {
      y: -7,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      y: -7,
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  // useEffect(() => {
  //   const skillsQuery = '*[_type=="skills"] | order(proficiency desc)';
  //   const experienceQuery = '*[_type=="experiences"] | order(year desc)';
  //   client.fetch(skillsQuery).then((skillsData) => {
  //     setSkills(skillsData);
  //   });
  //   client.fetch(experienceQuery).then((experienceData) => {
  //     setExperience(experienceData);
  //   });
  // }, []);
  return (
    <div className="flex flex-col w-full items-center">
      <h2 className="text-5xl font-extrabold  text-black capitalize lg:text-6xl">
        Skills <span className="text-[#313bac]">&</span> Experience
      </h2>
      <div className="max-w-[80%] mt-12 flex lg:max-w-[60%]">
        <motion.div className="flex-1 flex flex-wrap justify-center md:justify-start items-center md:items-start md:mr-0 md:mt-4">
          {skills.map((skill, index) => (
            <motion.div
              variants={skillVariants}
              whileInView="view"
              whileHover="hover"
              whileTap="tap"
              className="flex flex-col justify-center items-center m-4 transition duration-300 ease-in-out"
              key={skill.name + "-" + index}
            >
              <div className="w-20 h-20 md:w-[90px] md:h-[90px] 2xl:w-36 2xl:h-36 rounded-full bg-white flex justify-center items-center">
                <img
                  className="w-1/2 h-1/2 object-contain"
                  src={skill.icon}
                  alt={skill.name}
                />
              </div>
              <p className="font-semibold my-2">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="flex flex-col justify-start items-start md:mt-8">
          {experience?.map((exp) => (
            <motion.div
              className="w-full flex flex-row justify-start items-start my-4"
              key={exp.year}
            >
              <div className="mr-12 md:mr-4">
                <p className="font-bold text-blue-900">{exp.year}</p>
              </div>
              <motion.div className="flex-1">
                {exp?.works?.map((work) => (
                  <React.Fragment key={work.name}>
                    <motion.div
                      whileInView={{
                        opacity: [0, 1],
                        x: [-100, 5, 0],
                      }}
                      transition={{
                        duration: 1,
                      }}
                      className="app__skills-exp-work flex flex-col justify-start items-start mb-4 cursor-pointer"
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="font-medium">{work.name}</h4>
                      <p className="text-gray-500 mt-1">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="blue-900"
                      className="max-w-300 bg-white shadow-md rounded-lg p-4 text-gray-500 text-center leading-loose opacity-100 lg:max-w-500 lg:text-lg lg:leading-normal"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// export default AppWrap(
//   MotionWrap(Skills, "app__skills"),
//   "skills",
//   "app__whitebg"
// );
export default Skills;
