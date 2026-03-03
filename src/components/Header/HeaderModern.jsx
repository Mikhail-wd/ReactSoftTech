import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { useGetMenuQuery } from "../../redux/api";
import { useFormModal } from "../../contexts/FormModalContext";

import ModalModern from "../ModalServices/ModalModern";
import phone from "../../assets/icons/phone.svg";
import email from "../../assets/icons/email.svg";
import telegram from "../../assets/icons/telegram.svg";
import whatsup from "../../assets/icons/whatsup.svg";
import Button from "../Button/Button";
import menuIcon from "../../assets/icons/menu.svg";
import cIcon from "../../assets/icons/c.svg";;
import closeIcon from "../../assets/icons/close.svg";

import { useGetMenuModernQuery } from "../../redux/api";

import "./HeaderModern.css";

import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/utils/useFetchFromStrapi.js";

function activeMenuList(value, menuArray, closeModal, closeModalMenu) {
    const render = menuArray.filter(element => element.code == value)
    if (render.length > 0) {
        return (
            <div
                className="menu-modal__item"
                onClick={() => closeModalMenu}
            >
                <a className="menu-modal__item-title">
                    {render[0].title}
                </a>
                <div className="menu-modal__item-box">
                    {render[0].submenu.length !== 0 ? render[0].submenu.map((element, index) => {
                        return (
                            <Link
                                className="menu-modal__item-link"
                                key={index}
                                to={element.link}
                                onClick={() => closeModal()}
                            >
                                {element.title}
                            </Link>
                        );
                    }) : null}
                </div>
            </div>
        )
    }
}

const HeaderModern = ({ data1 }) => {
    const location = useLocation();
    const { openFormModal } = useFormModal();
    const { data: serviceMenu } = useQuery({
        queryKey: ["serviceMenu"],
        queryFn: () => axiosInstance("services", "populate=all"),
    });

    const api = useGetMenuModernQuery()
    const menuData = api.data?.menuModern;

    const [widthScreen, setWidthScreen] = useState(window.innerWidth);
    const [isMenuOpen, setIsMenuOpen] = useState(widthScreen > 660);
    const [isHoveringServices, setIsHoveringServices] = useState(false);
    const [activeMenu, setActiveMenu] = useState("");
    const [activeMenuLink, setActiveMenuLink] = useState("");
    const actualDate = new Date().getFullYear()


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
        document.getElementsByTagName("body")[0].style.overflowY = "scroll"
        if (path.startsWith("/services")) {
            setActiveMenu("services");
            setActiveMenuLink("/services");
        } else if (path.startsWith("/portfolio")) {
            setActiveMenu("portfolio");
            setActiveMenuLink("/portfolio");
        } else if (path.startsWith("/about")) {
            setActiveMenu("about");
            setActiveMenuLink("/about");
        } else if (path.startsWith("/vacancies")) {
            setActiveMenu("vacancies");
            setActiveMenuLink("/vacancies");
        } else if (path.startsWith("/contacts")) {
            setActiveMenu("contacts");
            setActiveMenuLink("/contacts");
        } else {
            setActiveMenu("");
            setActiveMenuLink("");
        }
    }, [location.pathname]);


    function stopPageScroll(value) {
        if (value) {
            document.getElementsByTagName("body")[0].style.overflowY = "hidden"
        } else {
            document.getElementsByTagName("body")[0].style.overflowY = "scroll"
        }
    }

    const handleMenuToggle = () => {
        if (widthScreen <= 660) {
            setIsMenuOpen(!isMenuOpen);
        }
    };

    const handleModalClose = () => {
        setIsHoveringServices(false);
        document.getElementsByTagName("body")[0].style.overflowY = "scroll"
    };
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__container">
                        <div className="header__logo-box">
                            <Link to={"/"} className="logo" onClick={() => {
                                setIsHoveringServices(false)
                                stopPageScroll(false)
                            }}>
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
                                    <li>
                                        {isHoveringServices && (
                                            <ModalModern
                                                show={isHoveringServices}
                                                onClose={handleModalClose}
                                                setIsHoveringServices={setIsHoveringServices}
                                                activeMenuLink={activeMenuLink}
                                                activeData={menuData.filter(element => element.code == activeMenu)}
                                                activeMenu={activeMenu}
                                                handleMenuToggle={handleMenuToggle}
                                            >
                                                {activeMenuList(activeMenu, menuData, handleMenuToggle, handleModalClose)}
                                            </ModalModern>
                                        )}
                                    </li>
                                    {menuData?.map((element, key) => {
                                        return (
                                            <li className={`menu__item ${activeMenu === element.code ? "active" : ""}`} key={key}>
                                                <Link
                                                    className="menu__link"
                                                    onClick={(e) => {
                                                        setIsHoveringServices(true);
                                                        stopPageScroll(true)
                                                        setActiveMenu(element.code);
                                                    }}
                                                >
                                                    {element.title}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                    <li className={`menu__item ${activeMenu === "contacts" ? "active" : ""}`}>
                                        <Link
                                            to="/contacts"
                                            className="menu__link"
                                            onClick={(e) => {
                                                setActiveMenu("contacts");
                                                setIsHoveringServices(false)
                                                handleMenuToggle()
                                                handleModalClose()
                                            }}
                                        >
                                            Контакты
                                        </Link>
                                    </li>
                                    <li className="menu__item" id="header_phone">
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
                                                    +7 (922) 502-77-82
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
                                    <li className="menu__item" id="header_social">
                                        <div className="menu__item-container-social">
                                            <a href="https://t.me/blog_softtech">
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
                                    <li className="menu__item" id="header_inform">
                                        <div className="menu__item-box-copy">
                                            <img src={cIcon} alt="icon c" className="menu-c__image" />
                                            <span>СофтТек {actualDate} г.</span>
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
                                    </li>
                                </ul>
                            </nav>
                        )}
                    </div>
                    <div className="header__line"></div>
                </div>
            </header >
        </>
    );
};

export default HeaderModern;