import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Filter from "./Filter";
import { filterData, prodata } from "./prjectdata";
import Spinner from "./Spinner";
import { motion } from "framer-motion";
import "./pro.css";

const ProjectSection = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let data = prodata[0].data;
      setCourses(data);
    } catch (error) {
      console.error("Something Went Wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen mt-36 flex flex-col w-full max-h-[80vh]">
      <div className="">
        <motion.div
          whileInView={{
            opacity: [0, 1],
            scale: [0.5, 1],
            transition: {
              duration: 1,
            },
          }}
        >
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </motion.div>
        <div className="w-11/12 max-w-[1800px] mx-auto flex justify-center items-center max-h-[80vh] project-section">
          {loading ? (
            <Spinner />
          ) : (
            <Cards courses={courses} category={category} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
