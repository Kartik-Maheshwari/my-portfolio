import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
// import { toast } from 'react-toastify';

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      //pehele se like hua pada hai
      //to ham filter out kardenge prev state me se unn id jo jiss id ke equal current id na ho.
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      // toast.warning("Like Removed");
    } else {
      //pehele se liked nahi hai ye course
      //insert karna hai ye course liked course me
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
      // toast.success("Like Successfully");
    }
  }
  return (
    <div className="w-[300px] bg-blue-950 bg-opacity-80 rounded-ms overflow-hidden rounded-md">
      <div className="relative">
        <img src={course.image.url}></img>
        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 -bottom-3 grid place-items-center">
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="text-white mt-2">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
