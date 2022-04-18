import React from "react";
import Projects from "./Projects";
import { Outlet } from "react-router-dom";

const ProjectLayout = (props) => {
  return (
    <div className="bg-black p-10 border-2 h-screen border-pink-500">
      <div>
        <Projects></Projects>
      </div>
      <div className="mt-20">
        <Outlet />
      </div>
      <h1 class="sm:text-3xl mt-5 sm:mt-0 text-2xl ml-20 sm:ml-0 text-white font-bold sm:absolute bottom-10 right-10">
        Made with ❤️ at CodeYogi 😜
      </h1>
    </div>
  );
};

export default ProjectLayout;
