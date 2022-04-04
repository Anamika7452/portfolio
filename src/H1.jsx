import React from "react";

const H1 = (props) => {
  return (
    <div className="bg-black h-screen ">
      <h1 className="text-xl font-medium text-white">{props.children}</h1>
    </div>
  );
};

export default H1;
