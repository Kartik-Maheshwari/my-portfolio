import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
  let courses = props.courses;
  const [likedCourses, setLikedCourses] = useState([]);
  let allCourses = [];
  let category = props.category;

  //function for converting data into array
  function getCourses() {
    if (category === "All") {
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-9 mt-auto ">
      {getCourses().map((course) => {
        return (
          <Card
            course={course}
            key={course.id}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );
};

export default Cards;
