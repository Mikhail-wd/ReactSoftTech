import React, { useState } from 'react';

import ModalWebsites from '../ModalWebsites/ModalWebsites'; 

import './ListWebsites.css';

function ListWebsites({ corporateTemplates, onlineShoppingTemplates }) {


  const [isOpen, setIsOpen] = useState(false);
  const [currentTemplate, setCurrentTemplate] = useState(null);

  const openModal = (template) => {
    setCurrentTemplate(template);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ModalWebsites open={isOpen} onClose={closeModal} template={currentTemplate} />
      <h1 className='listWebsites__header'>Купите готовое решение для Вашего бизнеса</h1>

      <div className='listWebsites__box'>

        <div className='listWebsites__box-item'>
          <h3 className='listWebsites__box-title'>Корпоративные сайты</h3>
          <h4 className='listWebsites__box-sub-title'>8 универсальных шаблонов</h4>
          <div className='listWebsites__box-price'>45 990₽</div>

          <div className='listWebsites__list'>
            {corporateTemplates.map((template, index) => (
              <div className='listWebsites__item' key={index} onClick={() => openModal(template)}>
                <div className='listWebsites__img-box'>
                  <img className='listWebsites__item-img' src={template.img} alt={template.name} />

                </div>
                <p className='listWebsites__item-text'>{template.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='listWebsites__box-item'>
          <h3 className='listWebsites__box-title'>Интернет-магазины</h3>
          <h4 className='listWebsites__box-sub-title'>6 универсальных шаблонов</h4>
          <div className='listWebsites__box-price'>64 990₽</div>
          <div className='listWebsites__list'>
            {onlineShoppingTemplates.map((template, index) => (
              <div className='listWebsites__item' key={index} onClick={() => openModal(template, index)}>
                <div className='listWebsites__img-box'>
                  <img className='listWebsites__item-img' src={template.img} alt={template.name} />
                </div>
                <p className='listWebsites__item-text' >{template.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}

export default ListWebsites;