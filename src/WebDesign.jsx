import React from "react";
import Card from "./Card";
import H1 from "./H1";

const WebDesign = (props) => {
  return (
    <div>
      <div className="border border-white my-5 w-fit p-2 rounded-lg">
        <H1>Web Design</H1>
      </div>
      <div className="flex sm:flex-row flex-col sm:items-start items-center  sm:space-x-20">
        <Card
          title="Web Design"
          src="https://cdn.discordapp.com/attachments/920684397563351081/960537547723911219/unknown.png"
        >
          CodeYogiApp-Clone
        </Card>
        <Card
          src="https://cdn.discordapp.com/attachments/920684397563351081/960550241948540948/Screenshot_2022-04-04_201319.png"
          title="Web Design"
        >
          Resposive design
        </Card>
      </div>
    </div>
  );
};

export default WebDesign;
