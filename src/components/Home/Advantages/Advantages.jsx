import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Link} from 'react-router-dom';

import MoreIcon from '../../../assets/icons/more.svg';

import 'swiper/swiper-bundle.css';
import './Advantages.css';

function Advantages({header, advantagesArr, countItem}) {

    return (
        <div className='advantages__container'>
            <h2 className='advantages__header'>{header}</h2>
            <Link to="/about" className="advantages__header-link">
                <h2 className='advantages__sub-header'>Узнать больше о компании</h2>
                <img src={MoreIcon} alt="more icon" className="advantages__more-icon"/>
            </Link>
            <div className='swiper-container'>

                <Swiper
                    spaceBetween={30}
                    slidesPerView={4}
                    className={'swiper__advantages'}
                    watchOverflow={true}
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
                    {advantagesArr?.map((advantage, index) => (
                        <SwiperSlide key={index} className="swiper-slide advantages__slide">
                            <h2 className="advantages__slide-title">{advantage.title}</h2>
                            <p className="advantages__slide-text">{advantage.description}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Advantages;
