import React from "react";

import MoreIcon from "../../../../assets/icons/more.svg";

import "./BannerProject.css";
import { Link } from "react-router-dom";

function BannerProject({ project }) {
  const style = {
    backgroundImage: `linear-gradient( rgba(0,0,0,0.4), rgba(0,0,0,0.25)), url("${
      import.meta.env.VITE_API_URL + project.banner?.url
    }")`,
  };

  return (
    <div className="bannerProject__container">
      <div className="bannerProject__img-banner" style={style} />

      <div className="bannerProject__client-container">
        <div className="bannerProject__box">
          <img
            className="bannerProject__img-logo"
            src={import.meta.env.VITE_API_URL + project.logo.url}
            alt={`Логотип клиента ${project.title}`}
          />

          <Link className="bannerProject__link-box" to={project.link}>
            <span className="bannerProject__link">Посмотреть результат</span>
            <img className="bannerProject__link-icon" src={MoreIcon} alt="" />
          </Link>
        </div>

        <div className="bannerProject__box">
          <div className="bannerProject__box-text">
            <span className="bannerProject__text">Клиент</span>
            <span className="bannerProject__text-name">{project.title}</span>
          </div>

          <div className="bannerProject__box-text">
            <span className="bannerProject__text">Сфера бизнеса</span>
            <span className="bannerProject__text-name">{project.title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerProject;
