import React from "react";
import Card from "./Card";
import H1 from "./H1";

const KidsLearning = (props) => {
  return (
    <div>
      <div className="border border-white my-5 w-fit p-2 rounded-lg">
        <H1>Kids Learning</H1>
      </div>
      <div className="flex sm:flex-row flex-col sm:items-start items-center sm:space-x-20">
        <Card
          title="Kids Learning"
          src="https://cdn.discordapp.com/attachments/920684397563351081/960548206742241340/Screenshot_2022-04-04_200459.png"
        >
          Unit Convertor
        </Card>
      </div>
    </div>
  );
};

export default KidsLearning;
