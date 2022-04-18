import React from "react";
import H3 from "./H3";
import { Link } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <div className="bg-black p-20 sm:p-40 flex sm:flex-row flex-col border-2 border-pink-500">
        <div className="sm:mx-0 mx-auto">
          <div className=" absolute left-30 sm:left-36 bg-gray-900 shadow-xl rounded-full w-44 h-44 sm:w-80 sm:h-80"></div>
          <img
            className=" relative rounded-full object-cover
 overflow-hidden w-40 h-40 sm:w-72 sm:h-72"
            src="https://cdn.discordapp.com/attachments/920684397563351081/960509205696090112/image_1649073587.418.jpg"
          ></img>
        </div>
        <div className="">
          <div className=" mt-10 sm:mt-0 sm:ml-36 space-y-10">
            <H3>WELCOME TO MY WORLD</H3>
            <h1 className="sm:text-5xl text-3xl font-extrabold text-white flex flex-col">
              Hi, I’m Anamika
              <span className=" mt-4 text-red-500">Web Designer.</span>
              <span className="mt-4 mb-10 text-gray-900">based in INDIA.</span>
            </h1>
            <Link to="/projects">
              <div className=" hover:bg-pink-500 px-10 py-5 border border-white flex items-start space-x-10 justify-center rounded-full ">
                <H3>My Projects</H3>
              </div>
            </Link>
          </div>
        </div>
        <hr className="border-2 m-2 border-black"></hr>
      </div>
    </div>
  );
}

export default MainLayout;
