import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Filter from "./Filter";
import { filterData, prodata } from "./prjectdata";
// import { toast } from "react-toastify";
import Spinner from "./Spinner";

const ProjectSection = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  //so yaha par ham api call useEffect ki help se karnege kuki hame har UI render par kuch naya data chahiye.

  //for hiding the loader
  useEffect(() => {
    setCourses(prodata[0].data);
  }, []);

  return (
    <div className="min-h-screen mt-36 flex flex-col w-full max-h-[500px]">
      <div className="">
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="w-11/12 max-w-[1800px] mx-auto flex justify-center items-center max-h-[800px] overflow-scroll">
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
