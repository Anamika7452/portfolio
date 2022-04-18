import React from "react";
import { Link } from "react-router-dom";
import H1 from "./H1";
import H3 from "./H3";

const Card = (props) => {
  return (
    <div className="shadow-md sm:space-y-2">
      <img
        className="w-60 h-60 sm:w-80 sm:h-40 object-center"
        src={props.src}
      ></img>
      <H3>{props.title}</H3>
      <H1>{props.children}</H1>
    </div>
  );
};

export default Card;
