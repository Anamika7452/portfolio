import React from "react";
import Card from "./Card";
import H1 from "./H1";

const AllProjects = (props) => {
  return (
    <div>
      <div className="border border-white w-fit my-5 p-2 rounded-lg">
        <H1>All Projects</H1>
      </div>
      <div className="flex sm:flex-row flex-col sm:items-start items-center sm:space-y-0 space-y-7 sm:justify-between sm:space-x-10">
        <Card
          title="Web Design"
          src="https://cdn.discordapp.com/attachments/920684397563351081/960537547723911219/unknown.png"
        >
          CodeYogiApp-Clone
        </Card>
        <Card
          title="App Design"
          src="https://cdn.discordapp.com/attachments/920684397563351081/960544062212042782/Screenshot_2022-04-04_194847.png"
        >
          Tic Tac Toe App
        </Card>
        <Card
          title="Kids Learning"
          src="https://cdn.discordapp.com/attachments/920684397563351081/960548206742241340/Screenshot_2022-04-04_200459.png"
        >
          Unit Convertor
        </Card>
        <Card
          src="https://cdn.discordapp.com/attachments/920684397563351081/960550241948540948/Screenshot_2022-04-04_201319.png"
          title="Web Design"
        >
          Resposive design
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

export default AllProjects;
