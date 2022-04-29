import React from "react";
import H3 from "./H3";
import { Link } from "react-router-dom";
const Projects = (props) => {
  return (
    <div className="px-4 py-5 border border-white flex items-start space-x-4 justify-center rounded-full ">
      <Link to="/">
        <div className=" hover:bg-pink-500 sm:p-2 rounded-md">
          <H3>Home Page</H3>
        </div>
      </Link>
      <Link to="/projects/allprojects">
        <div className=" hover:bg-pink-500 sm:p-2 rounded-md">
          <H3>All Projects</H3>
        </div>
      </Link>
      <Link to="/projects/webdesign">
        <div className=" hover:bg-pink-500 sm:p-2 rounded-md">
          <H3>Web Design</H3>
        </div>
      </Link>
      <Link to="/projects/appdesign">
        <div className=" hover:bg-pink-500 sm:p-2 rounded-md">
          <H3>App Design</H3>
        </div>
      </Link>
      <Link to="/projects/kidslearning">
        <div className=" hover:bg-pink-500 sm:p-2 rounded-md">
          <H3>Kids Learning</H3>
        </div>
      </Link>
    </div>
  );
};

export default Projects;
