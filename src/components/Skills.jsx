import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

// import { AppWrap, MotionWrap } from "../../wrapper";
// import { client, urlFor } from "../../client";
import "./Skills.css";
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
        duration: 1,
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
      <div className="w-full flex items-center justify-center ">
        <h2 className="head-text text-center">
          Skills <span>&</span> Experience
        </h2>
      </div>
      <div className="app__skills-container justify-center items-center ml-[10%]">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              variants={skillVariants}
              whileInView="view"
              whileHover="hover"
              whileTap="tap"
              className="app__skills-item app__flex"
              key={skill.name + "-" + index}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experience?.map((exp) => (
            <motion.div className="app__skills-exp-item" key={exp.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{exp.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
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
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="bold-text text-shadow-outline-white">
                        {work.name}
                      </h4>
                      <p className="text-xl text-gray-900">{work.company}</p>
                    </motion.div>
                    <Tooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#313bac"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip>
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
