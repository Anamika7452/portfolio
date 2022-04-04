import React from "react";

const H3 = (props) => {
  return (
    <div className="bg-black h-screen ">
      <h1 className="text-lg text-gray-400 font-medium">{props.children}</h1>
    </div>
  );
};

export default H3;
