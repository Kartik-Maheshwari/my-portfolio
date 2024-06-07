import { FaGithub, FaLinkedin } from "react-icons/fa";
import aboutImage from "../components/AboutMe/KTM.png";

import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodechef,
  SiHackerrank,
} from "react-icons/si";

const links = [
  {
    image: FaGithub,
    url: "https://github.com/kirti-poddar151",
  },
  {
    image: FaLinkedin,
    url: "https://leetcode.com/kirti_poddar151/",
  },
  {
    image: SiLeetcode,
    url: "https://www.instagram.com/kirti_poddar151/",
  },
  {
    image: SiGeeksforgeeks,
    url: "https://www.linkedin.com/in/kirti-poddar/",
  },
  {
    image: SiCodechef,
    url: "https://twitter.com/kirtipoddar10",
  },
  {
    image: SiHackerrank,
    url: "https://auth.geeksforgeeks.org/user/kirtipoddar151/practice/",
  },
];
const skills = [
  { name: "ReactJs", icon: "../images/Reactlogo.png" },
  { name: "Node.js", icon: "../images/node.png" },
  { name: "HTML", icon: "../images/htmllogo.png" },
  { name: "MongoDB", icon: "../images/mongo.png" },
  { name: "Python", icon: "../images/python.png" },
  { name: "Redux", icon: "../images/Redux.png" },
  { name: "Git", icon: "../images/git.png" },
  { name: "Graphql", icon: "../images/Graph.png" },
  { name: "JavaScript", icon: "../images/JSlogo.png" },
  { name: "CSS", icon: "../images/csslogo.png" },
];

const experience = [
  {
    year: "2023",
    works: [
      {
        name: "Reacj Js Developer",
        company: "Cognizant",
        desc: "Learned sometging",
      },
      {
        name: "Learned Full Stack",
        company: "Cognizant",
        desc: "Learned sometging",
      },
    ],
  },
  {
    year: "2022",
    works: [
      {
        name: "Learned Basics of Web Development",
        company: "Cognizant",
        desc: "Learned sometging",
      },
      {
        name: "Machine Learning",
        company: "Cognizant",
        desc: "Learned sometging",
      },
    ],
  },
  {
    year: "2021",
    works: [
      {
        name: "Image Processing",
        company: "Cognizant",
        desc: "Learned sometging",
      },
    ],
  },
];

const about = {
  show: true,
  heading: "About Me",
  imageLink: aboutImage,
  imageSize: 375,
  message:
    "My name is Kirti Poddar. I'll be graduating from VIT Bhopal University in 2024 with a Bachelor's degree in Computer Science and Engineering. I am a self-driven and motivated Computer Science student. I have ability to work in team environments, and strong attention to detail. I am looking for an IT-related internship with a forward-moving company.",
  resume:
    "https://drive.google.com/file/d/1oczWBYU3q6xtEf2yqPEG_1Tg3QzHgsrr/view?usp=sharing",
};
export { links, skills, experience, about };
