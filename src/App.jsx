import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainLayout from "./MainLayout";
import ProjectLayout from "./ProjectLayout";
import AllProjects from "./AllProjects";
import WebDesign from "./WebDesign";
import AppDesign from "./AppDesign";
import KidsLearning from "./KidsLearning";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout></MainLayout>}></Route>
        <Route path="projects" element={<ProjectLayout></ProjectLayout>}>
          <Route
            path="allprojects"
            element={<AllProjects></AllProjects>}
          ></Route>
          <Route path="webdesign" element={<WebDesign></WebDesign>}></Route>
          <Route path="appdesign" element={<AppDesign></AppDesign>}></Route>
          <Route
            path="kidslearning"
            element={<KidsLearning></KidsLearning>}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
