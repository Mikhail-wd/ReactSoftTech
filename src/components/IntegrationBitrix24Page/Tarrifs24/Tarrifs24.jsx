import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "./Tarrifs24.css";
import { useFormModal } from "../../../contexts/FormModalContext";

function Tarrifs24({ tarrifs, serviceValue = null }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 660);
  const { openDirectorModal } = useFormModal();
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 660);
    });
  }, []);

  const TariffsGrid = (
    <div className="tarrifs__box">
      {tarrifs.map((item, index) => (
        <div className="tarrifs__item" key={index}>
          <div className="tarrifs__name">{item.name}</div>
          <div className="tarrifs__priceOld">
            {item.priceOld}
            <span className="tarrifs__span"> ₽ / мес</span>
          </div>
          <div className="tarrifs__price">
            {item.price}
            <span className="tarrifs__span"> ₽ / мес</span>
          </div>
          <div className="tarrifs__memory">
            {item.memory}
            <span className="tarrifs__span">Гб</span>
          </div>
          <div className="tarrifs__users">
            {item.users}
            <span className="tarrifs__span"> пользователей</span>
          </div>

          <button
            onClick={() => openDirectorModal(serviceValue, "Оставьте заявку")}
            className="tarrifs__btn"
          >
            Выбрать тариф
          </button>
        </div>
      ))}
    </div>
  );

  const TariffsSlider = (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      watchOverflow={true}
      grabCursor={true}
      breakpoints={{
        0: {
          slidesPerView: 1, // строго одна карточка
          spaceBetween: 20,
        },
        660: {
          slidesPerView: 2.2,
          spaceBetween: 20,
        },
        960: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
    >
      {tarrifs.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="tarrifs__item" key={index}>
            <div className="tarrifs__name">{item.name}</div>
            <div className="tarrifs__priceOld">
              {item.priceOld}
              <span className="tarrifs__span"> ₽ / мес</span>
            </div>
            <div className="tarrifs__price">
              {item.price}
              <span className="tarrifs__span"> ₽ / мес</span>
            </div>
            <div className="tarrifs__memory">
              {item.memory}
              <span className="tarrifs__span">Гб</span>
            </div>
            <div className="tarrifs__users">
              {item.users}
              <span className="tarrifs__span"> пользователей</span>
            </div>
            <button
              onClick={() => openDirectorModal(serviceValue, "Оставьте заявку")}
              className="tarrifs__btn"
            >
              Выбрать тариф
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <>
      <h2 className="tarrifs__header">Тарифы</h2>
      <div className="tarrifs__text-box">
        <p className="tarrifs__text">
          Выберите тариф, подходящий под потребности Вашего бизнеса
        </p>
        <a
          href={"https://www.bitrix24.ru/prices/"}
          className="tarrifs__text-underline"
        >
          Подробное <span className="tarrifs__text-bold">сравнение</span>{" "}
          тарифов
        </a>
      </div>
      {isMobile ? TariffsSlider : TariffsGrid}
    </>
  );
}

export default Tarrifs24;
