import React from "react";
import TaskComponent from "./Task/Task";
import SolutionComponent from "./Solution/Solution";
import ResultComponent from "./Result/Result";
import TechnologiesComponent from "./Technologies/Technologies";
import DiscussComponent from "./Discuss/Discuss";

import BannerComponent from "./BannerProject/BannerProject";

import "./Project.css";

function Project({ project }) {
  return (
    <div className="project__container">
      <section className="project__banner">
        <BannerComponent project={project} />
      </section>

      {project?.task && (
        <section className="project__task">
          <TaskComponent project={project} />
        </section>
      )}

      {(project?.decision || project?.decisionCard?.length > 0) && (
        <section className="project__solution">
          <SolutionComponent project={project} />
        </section>
      )}

      {project?.result && (
        <section className="project__result">
          <ResultComponent project={project} />
        </section>
      )}

      {project?.teches.length > 0 && (
        <section className="project__technologies">
          <TechnologiesComponent project={project} />
        </section>
      )}

      <section className="project__discuss">
        <DiscussComponent project={project} />
      </section>
    </div>
  );
}

export default Project;
