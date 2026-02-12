import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ArroDownIcon from "@/assets/icons/arrow-down.svg";
import "./WhatCanWeDo.css";

function WhatCanWeDo({ menu }) {
  if (!menu?.length) return null;

  const [activeMenu, setActiveMenu] = useState(() =>
    new Array(menu?.length).fill(false)
  );
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [activeItem, setActiveItem] = useState(null);

  const toggleList = (index) => {
    if (windowWidth <= 660) {
      setActiveMenu((activeMenus) =>
        activeMenus.map((active, i) => (i === index ? !active : active))
      );
    }
  };

  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
    toggleList(index);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth <= 660) {
      setActiveMenu(new Array(menu?.length).fill(false));
    } else {
      setActiveMenu(new Array(menu?.length).fill(true));
    }
  }, [windowWidth, menu?.length]);

  const renderMenuItem = (index, item) => (
    <div key={index} className="menu-modal__item-whatCanWeDo">
      <div
        className="menu-modal__item-title-box"
        onClick={() => handleItemClick(index)}
      >
        <p
          className={`menu-modal__item-title ${
            activeItem === index ? "active" : ""
          }`}
        >
          {item.name}
        </p>
        <img
          className={`menu-modal__item-title-icon ${
            activeItem === index ? "rotated" : ""
          }`}
          src={ArroDownIcon.src}
          alt=""
        />
      </div>
      {(windowWidth > 660 || activeMenu[index]) && (
        <div className="menu-modal__item-box">
          {item.serviceSub.map((subItem, j) => (
            <Link
              className="menu-modal__item-link"
              key={`${index}-${j}`}
              to={subItem.link}
            >
              {subItem.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      <h2 className="whatCanWeDo__header">Что мы умеем</h2>
      <p className="whatCanWeDo__sub-header">
        Компания СофтТек ведет полный цикл реализации: от технического задания
        до поддержки и размещения на сервере. Наша деятельность включает в себя
        разработку программного обеспечения (сайты, приложения и ПО) а также
        поддержку (модернизация продуктов, работа с текстом и изображениями) и
        продвижение (контекстная реклама и SEO). СофтТек станет для вас тем
        самым единственным подрядчиком, с которым вы сможете решать все вопросы
        в режиме одного окна.
      </p>

      <div className="whatCanWeDo__box">
        {menu?.map((item, index) => renderMenuItem(index, item))}
      </div>
    </>
  );
}

export default WhatCanWeDo;
