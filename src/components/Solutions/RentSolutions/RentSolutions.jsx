import React, { useState, useEffect } from "react";
import { useFormModal } from "../../../contexts/FormModalContext";

import { Swiper, SwiperSlide } from "swiper/react";

import "./RentSolutions.css";

function rentSolutions({
  rentSolutions,
  title = "Сервер в аренду",
  serviceValue = null,
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);
  const { openDirectorModal } = useFormModal();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 960);
    });
  }, []);

  const TariffsGrid = (
    <div className="rentSolutions__box">
      {rentSolutions?.map((item, index) => (
        <div className="rentSolutions__item" key={index}>
          <div
            className={
              item.name == "Pro"
                ? "rentSolutions__hover-bg active"
                : "rentSolutions__hover-bg"
            }
          >
            <div className="rentSolutions__name">{item.name}</div>
            <div className="rentSolutions__priceOld">
              {item.priceOld}
              <span className="rentSolutions__span"> ₽ / мес</span>
            </div>
            <div className="rentSolutions__price">
              {item.price}
              <span className="rentSolutions__span"> ₽ / мес</span>
            </div>
            {item.priceMonth && (
              <div className="rentSolutions__price-month">
                {item.priceMonth}
                <span className="rentSolutions__span"> руб / мес</span>
              </div>
            )}
          </div>

          <div className="rentSolutions__options-box">
            {[0, 1, 2].map((index) => {
              return item.options[index] ? (
                <div key={index} className="rentSolutions__options">
                  {item.options[index]}
                </div>
              ) : (
                <div key={index} className="rentSolutions__options-null"></div>
              );
            })}
          </div>

          <button
            className="rentSolutions__btn"
            onClick={() => openDirectorModal(serviceValue, "Оставьте заявку")}
          >
            Выбрать тариф
          </button>
        </div>
      ))}
      <p className="rentSolutions__sale">
        Стоимость указана за 1 месяц при условии оплаты тарифа на 12 месяцев со
        скидкой 10%
      </p>
    </div>
  );

  const TariffsSlider = (
    <div className="rentSolutions__box">
      <Swiper
        spaceBetween={30}
        slidesPerView={2.2}
        watchOverflow={true}
        grabCursor={true}
        breakpoints={{
          0: {
            slidesPerView: 1.1,
            spaceBetween: 20,
          },
          440: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          660: {
            slidesPerView: 2.2,
            spaceBetween: 30,
          },
          960: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {rentSolutions?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="rentSolutions__item" key={index}>
              <div
                className={
                  item.name == "Pro"
                    ? "rentSolutions__hover-bg active"
                    : "rentSolutions__hover-bg"
                }
              >
                <div className="rentSolutions__name">{item.name}</div>
                <div className="rentSolutions__priceOld">
                  {item.priceOld}
                  <span className="rentSolutions__span"> ₽ / мес</span>
                </div>
                <div className="rentSolutions__price">
                  {item.price}
                  <span className="rentSolutions__span"> ₽ / мес</span>
                </div>
                {item.priceMonth && (
                  <div className="rentSolutions__price-month">
                    {item.priceMonth}
                    <span className="rentSolutions__span"> руб / мес</span>
                  </div>
                )}
              </div>

              <div className="rentSolutions__options-box">
                {[0, 1, 2].map((index) => {
                  return item.options[index] ? (
                    <div key={index} className="rentSolutions__options">
                      {item.options[index]}
                    </div>
                  ) : (
                    <div
                      key={index}
                      className="rentSolutions__options-null"
                    ></div>
                  );
                })}
              </div>

              <button
                className="rentSolutions__btn"
                onClick={() => openDirectorModal(serviceValue)}
              >
                Выбрать тариф
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="rentSolutions__sale">
        Стоимость указана за 1 месяц при условии оплаты тарифа на 12 месяцев со
        скидкой 10%
      </p>
    </div>
  );

  return (
    <>
      <h2 className="rentSolutions__header">{title}</h2>

      {isMobile ? TariffsSlider : TariffsGrid}
    </>
  );
}

export default rentSolutions;
