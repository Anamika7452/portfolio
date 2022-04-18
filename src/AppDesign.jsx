import React from "react";
import Card from "./Card";
import H1 from "./H1";

const AppDesign = (props) => {
  return (
    <div>
      <div className="border border-white my-5 w-fit p-2 rounded-lg">
        <H1>App Design</H1>
      </div>
      <div className="flex sm:flex-row flex-col sm:items-start items-center sm:space-x-20">
        <Card
          title="App Design"
          src="https://cdn.discordapp.com/attachments/920684397563351081/960544062212042782/Screenshot_2022-04-04_194847.png"
        >
          Tic Tac Toe App
        </Card>
        <Card
          src="https://cdn.discordapp.com/attachments/920684397563351081/960549869557252187/Screenshot_2022-04-04_201142.png "
          title="App Design"
        >
          Todo App
        </Card>
      </div>
    </div>
  );
};

export default AppDesign;
