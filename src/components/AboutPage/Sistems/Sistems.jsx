import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import './Sistems.css';

function Sistems({data}) {
    return (
        <>
            <h2 className='sistems__header'>{data.title}</h2>
            <p className='sistems__sub-header'>{data.desc}</p>

            <div className='sistems__box'>
                <div className='swiper-container'>

                    <Swiper
                        className={'swiper__sistems'}
                        slidesPerView={4}
                        spaceBetween={30}
                        grabCursor={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            440: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            660: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            960: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 0,
                                grabCursor: false,
                                allowTouchMove: false,
                            }

                        }}
                    >
                        {data.worksystem.map((item, index) => (
                            <SwiperSlide key={index} className="swiper-slide sistems__slide">
                                <h2 className="sistems__slide-title">{item.title}</h2>
                                <p className="sistems__slide-text">{item.desc}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default Sistems;
