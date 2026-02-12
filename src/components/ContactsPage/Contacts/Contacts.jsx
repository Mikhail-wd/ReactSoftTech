import React from "react";

import VkIcon from "../../../assets/icons/vk.svg";
import TelegramIcon from "../../../assets/icons/telegram.svg";

import "./Contacts.css";
import { Link, NavLink } from "react-router-dom";

function Contacts(props) {
  return (
    <>
      <div className="contacts__box">
        <div className="contacts__content-box">
          <p className="contacts__title">Принимаем звонки</p>
          <Link className="contacts__content" to="tel:88001018321">
            8 (800) 10-18-321 - для звонков по РФ
          </Link>
        </div>
        <div className="contacts__content-box">
          <p className="contacts__title">Трудоустройство и стажировка</p>
          <Link
            className="contacts__content"
            to="mailto:office@softtechgroup.ru"
          >
            office@softtechgroup.ru
          </Link>
        </div>
        <div className="contacts__content-box">
          <p className="contacts__title">Трудоустройство и стажировка</p>
          <Link
            className="contacts__content"
            to="mailto:office@softtechgroup.ru"
          >
            office@softtechgroup.ru
          </Link>
        </div>
        <div className="contacts__content-box">
          <p className="contacts__title">Принимаем письма</p>
          <Link
            className="contacts__content"
            to="mailto:office@softtechgroup.ru"
          >
            office@softtechgroup.ru
          </Link>
        </div>
        <div className="contacts__content-box">
          <p className="contacts__title">Бухгалтерские документы</p>
          <Link
            className="contacts__content"
            to="mailto:office@softtechgroup.ru"
          >
            office@softtechgroup.ru
          </Link>
        </div>
      </div>

      <div className="contacts__icon-box">
        <NavLink to="https://vk.com/cygenic_official">
          <img className="contacts__icon" src={VkIcon} alt={"Icon vk"} />
        </NavLink>
        <NavLink to="https://t.me/YourUsername">
          <img
            className="contacts__icon"
            src={TelegramIcon}
            alt={"Icon telegram"}
          />
        </NavLink>
      </div>
    </>
  );
}

export default Contacts;
