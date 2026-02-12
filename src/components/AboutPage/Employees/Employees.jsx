import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Employees.css";

function Employees({ employees }) {
  return (
    <>
      <h2 className="employees__header">{employees.title || <Skeleton />}</h2>

      <div className="employees__box">
        <div className="swiper-container">
          <Swiper
            slidesPerView={9}
            spaceBetween={-25}
            grabCursor={true}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              440: {
                slidesPerView: 3,
              },
              660: {
                slidesPerView: 6,
              },
              960: {
                slidesPerView: 9,
              },
              1200: {
                slidesPerView: 9,
                // spaceBetween: 0,
                grabCursor: false,
                allowTouchMove: false,
              },
            }}
          >
            {employees.Employee.map((item, index) => {
              return (
                <SwiperSlide key={index} className="employees__item">
                  <img
                    src={import.meta.env.VITE_API_URL + item.img.url}
                    alt={"Фото сотрудника"}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Employees;
