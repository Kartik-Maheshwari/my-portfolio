import React, { useEffect, useState } from "react";
import PortfolioItem from "./PortfolioItem/PortfolioItem";

// import "./";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkSquareAlt";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons/faGithubSquare";
import { faUserLock } from "@fortawesome/free-solid-svg-icons/faUserLock";

const Projects = ({ projects }) => {
  const [selected, setSelected] = useState("");
  const [data, setData] = useState([]);
  console.log("Data", data);

  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    let tempList = [];
    console.log("Initial projects \n", projects);

    projects.map(({ category }) => {
      if (!tempList.includes(category)) {
        tempList.push(category);
      }
      console.log("Category: \n", category);

      return null;
    });
    setProjectList(tempList);
  }, [projects]);
  console.log("Projectlist", projectList);
  console.log("Selected", selected);

  useEffect(() => {
    projectList.map((list) => {
      if (selected === "") {
        setData(projects);
      }
      if (selected === list) {
        setData(projects.filter((project) => project.category === list));
      }
      console.log("Projects: ", projects);

      return null;
    });
  }, [selected, projectList, projects]);
  return (
    <section
      data-aos="fade-left"
      className="bg-white flex-col items-center w-full"
      name="portfolio"
      id="portfolio"
    >
      {/* <Heading text="Portfolio" style={{ padding: "3rem" }} /> */}
      <div className="heading-container">
        <h2 className="heading">Projects</h2>
        <span></span>
      </div>
      <div className="m-2 p-0 list-none flex w-[85%] justify-around items-center ">
        {projectList &&
          projectList.map((list) => (
            <PortfolioItem
              title={list}
              key={list}
              active={selected === list}
              setSelected={setSelected}
              id={list}
            />
          ))}
      </div>
      <div className="flex flex-wrap p-0 sm:p-8 justify-center items-center">
        {data.length &&
          data.map((item, index) => (
            <div
              className="flex flex-col justify-center items-center max-w-1/4 w-full mr-8 mt-8 self-auto rounded-xl shadow-md text-white transition-all duration-600 relative bg-white"
              key={index}
            >
              <img
                src="../images/sunrise.jpg"
                className="w-full h-full object-cover opacity-100 rounded-md align-middle"
                alt={item.title}
              />
              <div className="absolute w-full bg-black bg-opacity-60 px-4 py-6 flex transition-all duration-500 ease">
                <div className="flex flex-col justify-center flex-2">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  {item.tagline && (
                    <p className="text-xs text-gray-300">{item.tagline}</p>
                  )}
                </div>
                <div className="flex items-center justify-end flex-1 ">
                  {item.repositoryUrl !== "private" ? (
                    <a href={item.repositoryUrl}>
                      <FontAwesomeIcon
                        icon={faGithubSquare}
                        size="2x"
                        className="cursor-pointer text-white text-opacity-90 hover:text-white hover:scale-100"
                        style={{ marginRight: "0.3em" }}
                        title="Github Repo"
                      />
                    </a>
                  ) : (
                    <a href="#_">
                      <FontAwesomeIcon
                        icon={faUserLock}
                        size="2x"
                        className="cursor-pointer text-white text-opacity-90 hover:text-white hover:scale-100"
                        style={{ marginRight: "0.3em" }}
                        title="Private Repo"
                      />
                    </a>
                  )}

                  {item.liveUrl !== "private" ? (
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faExternalLinkSquareAlt}
                        size="2x"
                        className="icon"
                        title="Live view"
                      />{" "}
                    </a>
                  ) : (
                    <a href="#_" rel="noopener noreferrer">
                      <FontAwesomeIcon
                        icon={faUserLock}
                        size="2x"
                        className="icon"
                        title="Private Link"
                      />{" "}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Projects;
