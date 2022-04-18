import React from "react";

const H1 = (props) => {
  return (
    <div>
      <h1 className="sm:text-xl text-lg font-medium text-white">{props.children}</h1>
    </div>
  );
};

export default H1;
