import React, { useState, useEffect } from "react";

import { useGetMenuQuery } from "@/redux/api";
import FormComponent from "@/components/FormComponent/FormComponent";
import Modal from "@/components/Modal/Modal";
import ModalServices from "@/components/ModalServices/ModalServices";
import cIcon from "@/assets/icons/c.svg";
import "./Footer.css";
import "../FormComponent/FormModal.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

export const Footer = ({ data1 }) => {
  const { data } = useGetMenuQuery();

  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(widthScreen > 660);
  const [isHoveringServices, setIsHoveringServices] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [activeMenuLink, setActiveMenuLink] = useState("");
  const [isCallOpen, setIsCallOpen] = useState(false);

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

  const handleMenuToggle = () => {
    if (widthScreen <= 660) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const handleModalClose = () => {
    setIsHoveringServices(false);
  };

  return (
    <div className="footer">
      <div className="container">
        <div className="footer__container">
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
                {data &&
                  data.menu &&
                  Array.isArray(data.menu) &&
                  data.menu.map((item, i) => {
                    return (
                      <div
                        key={i}
                        className="menu-modal__item"
                        onClick={handleModalClose}
                      >
                        <a className="menu-modal__item-title" href={item.link}>
                          {item.title}
                        </a>
                        <div className="menu-modal__item-box">
                          {item.submenu.map((subItem, j) => {
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

          <div className="footer__box" id="item1">
            <Link className="footer__link" to="/">
              <img
                src={import.meta.env.VITE_API_URL + data1?.logo.img.url}
                alt="Логотип"
                className="footer__logo"
              />
            </Link>
            <p className="footer__title">{data1?.logo.title}</p>
          </div>
          <div className="footer__box" id="item2">
            <div className="footer__item">
              <Link
                className="footer__link"
                to="/services"
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                Услуги
              </Link>
            </div>
            <div className="footer__item">
              <Link className="footer__link" to="/portfolio">
                Портфолио
              </Link>
            </div>
            <div className="footer__item">
              <Link className="footer__link" to="/about">
                СофтТек
              </Link>
            </div>
            <div className="footer__item">
              <Link className="footer__link" to="/vacancies">
                Карьера
              </Link>
            </div>
            <div className="footer__item">
              <Link className="footer__link" to="/contacts">
                Контакты
              </Link>
            </div>
          </div>

          <div className="footer__box" id="item3">
            <div className="footer__item">
              <Link className="footer__link" to="/privacy_policy">
                Политика конфиденциальности
              </Link>
            </div>
            <div className="footer__item">
              <Link className="footer__link" to="/user_agreement">
                Пользовательское соглашение
              </Link>
            </div>
            <div className="footer__item">
              <Link className="footer__link" to="/return_policy">
                Условия возврата
              </Link>
            </div>
            <div className="footer__item">
              <Link className="footer__link" to="/requisites">
                Реквизиты
              </Link>
            </div>
          </div>

          <div className="footer__box" id="item4">
            <Button click={(event) => {
              event.preventDefault();
              setIsCallOpen(true);
            }}>
              {data1?.button.text}
            </Button>
            {/* <a
              href="#"
              className="footer__form-btn"
              onClick={(event) => {
                event.preventDefault();
                setIsCallOpen(true);
              }}
            >
              {data1?.button.text}
            </a> */}
          </div>
        </div>

        <div className="footer__container">
          <div className="footer__box-2">
            <p className="footer__text footer__price">{data1?.info}</p>
          </div>

          <div className="footer__box-2">
            <img className="footer__icon" src={cIcon.src} />
            <span className="footer__text">
              СофтТек {new Date().getFullYear()} г.
            </span>
          </div>
        </div>
      </div>
      {isCallOpen && (
        <Modal closeModal={() => setIsCallOpen(false)}>
          <div className="formModal__content">
            <FormComponent
              header="Оставьте заявку"
              showServices={true}
              onFormSubmit={() => setIsCallOpen(false)}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Footer;
