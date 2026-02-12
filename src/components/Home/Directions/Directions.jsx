import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Link} from 'react-router-dom';

import bgImg1 from '/images/directions-bg-1.svg';
import bgImg2 from '/images/directions-bg-2.svg';
import bgImg3 from '/images/directions-bg-3.png';
import bgImg4 from '/images/directions-bg-4.png';


import ArrowBtnIcon from '../../../assets/icons/arrow-slider.svg';
import ArrowBackIcon from '../../../assets/icons/arrow-right-black.svg';

import Modal from '../../Modal/Modal';

import './Directions.css'

function Directions({menu}) {

    const [showModal, setShowModal] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(null);

    const handleClick = (item, index) => {
        setCurrentSlide({item, index});
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const arrImg = [bgImg1, bgImg2, bgImg3, bgImg4];

    let imgIndex = 0;

    return (
        <div className='directions__container'>

            <h2 className='directions__header'>Ключевые направления</h2>

            <div className='swiper-container'>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={4}
                    watchOverflow={true}
                    grabCursor={true}
                    className={'swiper__directions'}
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
                    {menu?.menu.map((item, index) => {
                        if (
                            item.title === 'Разработка' ||
                            item.title === 'Внедрение и интеграция' ||
                            item.title === 'Готовые решения' ||
                            item.title === 'Офисное и торговое оборудование'
                        ) {
                            return (
                                <SwiperSlide onClick={() => handleClick(item, index)} key={index}
                                             className="swiper-slide directions__slide">
                                    <p className="directions__slide-text">{item.title}</p>
                                    <img src={arrImg[imgIndex++]} alt="bg img" className="directions__bg-img"/>

                                    <div className='directions__slide-btn'>
                                        <img src={ArrowBtnIcon} alt="arrow img" className="directions__slide-arrow"/>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                        return null;
                    })}
                </Swiper>
                {showModal &&

                    <Modal closeModal={closeModal}>

                        <p className='modal__header'>Выберите интересующую вас услугу</p>
                        <ul className='modal__list'>
                            {currentSlide.item.submenu.map((menuItem, index) =>
                                <li className='modal__item' key={index}>
                                    <Link className='modal__item-link' to={menuItem.link}>{menuItem.title}</Link>
                                    <img src={ArrowBackIcon} alt="иконка стрелки вправо"/>
                                </li>
                            )}
                        </ul>
                    </Modal>
                }

            </div>

        </div>
    );
}

export default Directions;
