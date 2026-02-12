import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import './Partners.css';

function Partners({arr}) {


    return (
        <>
            <h1 className='partnersEquipment__header'>Наши партнеры</h1>
            <div className='partnersEquipment__list'>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3.2}
                    watchOverflow={true}
                    grabCursor={true}

                    breakpoints={{
                        0: {
                            slidesPerView: 1.2,
                            spaceBetween: 20
                        },
                        440: {
                            slidesPerView: 2.2,
                            spaceBetween: 20
                        },
                        660: {
                            slidesPerView: 2.2,
                            spaceBetween: 30
                        },
                        960: {
                            slidesPerView: 3.2,
                            spaceBetween: 30
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                            grabCursor: false,
                            allowTouchMove: false,
                        }

                    }}
                >
                    {arr?.map((item, index) => {
                        console.log(arr)
                        return (<SwiperSlide key={index} className={'partnersEquipment__slide'}>

                                <div className='partnersEquipment__item' key={index}>

                                    <div className='partnersEquipment__name'>{item.name}</div>
                                    <img className='partnersEquipment__img' src={item.logo} alt=""/>

                                </div>
                            </SwiperSlide>
                        )
                    })
                    }
                </Swiper>
            </div>

        </>
    );
}

export default Partners;
