import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Technologies.css";

function Technologies({ project }) {
  return (
    <>
      <div className="container">
        <div className="technologies__container">
          <div className="project__header-box">
            <h1 className="project__header">Технологии</h1>
            {/*<p className='project__text'>{project.task.text}</p>*/}
          </div>
          <div className="technologies__box">
            <div className="swiper-container">
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                grabCursor={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  440: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  660: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  960: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    grabCursor: false,
                    allowTouchMove: false,
                  },
                }}
              >
                {project.teches.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    className="swiper-slide technologies__slide"
                  >
                    {item.img ? (
                      <img
                        className="technologies__img"
                        src={import.meta.env.VITE_API_URL + item.img.url}
                        alt={`Логотип ${item.name}`}
                      />
                    ) : (
                      <div className="technologies__text">{item.name}</div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Technologies;
