import React from "react";
import "./Task.css";

function Task({ project }) {
  return (
    <div className="task__container">
      <div className="container">
        <div className="task__box">
          <div className="project__header-box">
            <h1 className="project__header">Задача</h1>
            <p className="project__text">{project.task}</p>
          </div>

          {/*<div className='task__img-container-2'>*/}
          {/*  {arrImgPortfolioTask.map((item, index) => (*/}
          {/*    (index <= 1) &&*/}
          {/*    <div className='project__img-box' key={index}>*/}
          {/*        <img className='project__img' src={item} alt="" />*/}
          {/*    </div>*/}
          {/*  ))}*/}
          {/*</div>*/}

          {project?.galleryTask && (
            <div className="task__img-container-4">
              {project.galleryTask?.map((item, index) => (
                <div className="project__img-box" key={index}>
                  <img
                    className="project__img"
                    src={import.meta.env.VITE_API_URL + item.url}
                    alt=""
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Task;
