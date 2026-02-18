import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { useGetMenuQuery } from "../../redux/api";
import { useFormModal } from "../../contexts/FormModalContext";

import ModalServices from "../ModalServices/ModalServices";

import logo from "../../assets/icons/logo-desktop.svg";
import phone from "../../assets/icons/phone.svg";
import email from "../../assets/icons/email.svg";
import telegram from "../../assets/icons/telegram.svg";
import whatsup from "../../assets/icons/whatsup.svg";
import youtube from "../../assets/icons/youtube.svg";
import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";
import cIcon from "../../assets/icons/c.svg";

import reRoute from "../../utils/support";

import "./Header.css";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/utils/useFetchFromStrapi.js";
import Button from "../Button/Button";

const Header = ({ data1 }) => {
  const location = useLocation();
  const { openFormModal } = useFormModal();
  const { data: serviceMenu } = useQuery({
    queryKey: ["serviceMenu"],
    queryFn: () => axiosInstance("services", "populate=all"),
  });
  const serviceMenuData = serviceMenu?.data;

  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(widthScreen > 660);
  const [isHoveringServices, setIsHoveringServices] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [activeMenuLink, setActiveMenuLink] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setWidthScreen(window.innerWidth);
      if (window.innerWidth > 660) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const path = location.pathname;

    if (path.startsWith(reRoute("/services"))) {
      setActiveMenu("services");
      setActiveMenuLink(reRoute("/services"));
    } else if (path.startsWith(reRoute("/portfolio"))) {
      setActiveMenu("portfolio");
      setActiveMenuLink(reRoute("/portfolio"));
    } else if (path.startsWith(reRoute("/about"))) {
      setActiveMenu("about");
      setActiveMenuLink(reRoute("/about"));
    } else if (path.startsWith(reRoute("/vacancies"))) {
      setActiveMenu("vacancies");
      setActiveMenuLink(reRoute("/vacancies"));
    } else if (path.startsWith(reRoute("/contacts"))) {
      setActiveMenu("contacts");
      setActiveMenuLink(reRoute("/contacts"));
    } else {
      setActiveMenu("");
      setActiveMenuLink("");
    }
  }, [location.pathname]);

  const handleMenuToggle = () => {
    if (widthScreen <= 660) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const handleModalClose = () => {
    setIsHoveringServices(false);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__container">
            <div className="header__logo-box">
              <Link to={reRoute("/")} className="logo">
                <img
                  src={import.meta.env.VITE_API_URL + data1?.logo.img.url}
                  alt="logo icon"
                  className="logo__image"
                />
              </Link>
              {isMenuOpen ? (
                <button className="btn_close" onClick={handleMenuToggle}>
                  <img
                    src={closeIcon}
                    alt="close icon"
                    className="menu-btn__image"
                  />
                </button>
              ) : (
                <button className="btn_burger" onClick={handleMenuToggle}>
                  <img
                    src={menuIcon}
                    alt="menu icon"
                    className="menu-btn__image"
                  />
                </button>
              )}
            </div>
            {isMenuOpen && (
              <nav className="menu">
                <ul className="menu__list">
                  <li
                    className={`menu__item ${activeMenu === "services" ? "active" : ""
                      }`}
                  >
                    <Link
                      className="menu__link"
                      onClick={(e) => {
                        setIsHoveringServices(true);
                        setActiveMenu("services");
                        setActiveMenuLink(reRoute("/services"));
                      }}
                    >
                      Услуги
                    </Link>
                    {isHoveringServices && (
                      <ModalServices
                        show={isHoveringServices}
                        onClose={handleModalClose}
                        setIsHoveringServices={setIsHoveringServices}
                        activeMenuLink={activeMenuLink}
                        activeMenu={activeMenu}
                        handleMenuToggle={handleMenuToggle}
                      >
                        <div className="menu__modal-container">
                          <div className="menu-modal__content-box ">
                            {serviceMenuData?.map((item, i) => {
                              return (
                                <div
                                  key={i}
                                  className="menu-modal__item"
                                  onClick={handleModalClose}
                                >
                                  <a className="menu-modal__item-title">
                                    {item.name}
                                  </a>
                                  <div className="menu-modal__item-box">
                                    {item?.serviceSub.map((subItem, j) => {
                                      return (
                                        <Link
                                          className="menu-modal__item-link"
                                          key={j}
                                          to={subItem.link}
                                        >
                                          {subItem.title}
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </ModalServices>
                    )}
                  </li>
                  <li
                    className={`menu__item ${activeMenu === "portfolio" ? "active" : ""
                      }`}
                  >
                    <Link
                      onClick={(e) => {
                        setActiveMenu("portfolio");
                        setActiveMenuLink(reRoute("/portfolio"));

                        if (widthScreen <= 660) {
                          setIsMenuOpen(false);
                        }
                      }}
                      to={reRoute("/portfolio")}
                      className="menu__link"
                    >
                      Портфолио
                    </Link>
                  </li>
                  <li
                    className={`menu__item ${activeMenu === "about" ? "active" : ""
                      }`}
                  >
                    <Link
                      onClick={(e) => {
                        setActiveMenu("about");
                        setActiveMenuLink(reRoute("/about"));
                        if (widthScreen <= 660) {
                          setIsMenuOpen(false);
                        }
                      }}
                      to={reRoute("/about")}
                      className="menu__link"
                    >
                      СофтТек
                    </Link>
                  </li>
                  <li
                    className={`menu__item ${activeMenu === "vacancies" ? "active" : ""
                      }`}
                  >
                    <Link
                      onClick={(e) => {
                        setActiveMenu("vacancies");
                        setActiveMenuLink(reRoute("/vacancies"));
                        if (widthScreen <= 660) {
                          setIsMenuOpen(false);
                        }
                      }}
                      to={reRoute("/vacancies")}
                      className="menu__link"
                    >
                      Вакансии
                    </Link>
                  </li>
                  <li
                    className={`menu__item ${activeMenu === "contacts" ? "active" : ""
                      }`}
                  >
                    <Link
                      onClick={(e) => {
                        setActiveMenu("contacts");
                        setActiveMenuLink(reRoute("/contacts"));

                        if (widthScreen <= 660) {
                          setIsMenuOpen(false);
                        }
                      }}
                      to={reRoute("/contacts")}
                      className="menu__link"
                    >
                      Контакты
                    </Link>
                  </li>
                  <li className="menu__item">
                    <div className="menu__item-container">
                      <div className="menu__item-box">
                        <img
                          src={phone}
                          alt="phone icon"
                          className="menu__icon"
                        />
                        <Link
                          className="menu__item-box--text"
                          to="tel:+73242332834"
                        >
                          +7 (922) 50-27-782
                        </Link>
                      </div>
                      <div className="menu__item-box">
                        <img
                          src={email}
                          alt="email icon"
                          className="menu__icon"
                        />
                        <Link
                          className="menu__item-box--text"
                          to="mailto:info@info@mail.ru"
                        >
                          office@softtechgroup.ru
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="menu__item">
                    <div className="menu__item-container-social">
                      <a href="https://t.me/rm_yuldashev">
                        <img
                          src={telegram}
                          alt="social logo telegram"
                          className="menu__social-icon"
                        />
                      </a>
                      <a href="https://api.whatsapp.com/send/?phone=79225027782&text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%21+%EF%BF%BD+%D0%9C%D0%B5%D0%BD%D1%8F+%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82&type=phone_number&app_absent=0">
                        <img
                          src={whatsup}
                          alt="social logo whatsup"
                          className="menu__social-icon"
                        />
                      </a>
                    </div>
                  </li>
                  <li className="menu__item">
                    <div className="menu__item-box">
                      <img src={cIcon} alt="icon c" className="menu-c__image" />
                      <span>СофтТек 2023 г.</span>
                    </div>
                  </li>
                  <li className="menu__item">
                    <Button click={() => {
                        openFormModal();
                        if (widthScreen <= 660) {
                          setIsMenuOpen(false);
                        }
                      }}>
                      Оставить заявку
                    </Button>
                    {/* <button
                      onClick={() => {
                        openFormModal();
                        if (widthScreen <= 660) {
                          setIsMenuOpen(false);
                        }
                      }}
                      className="menu__link menu__link--cta"
                    >
                      Оставить заявку
                    </button> */}
                  </li>
                </ul>
              </nav>
            )}
          </div>
          <div className="header__line"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
