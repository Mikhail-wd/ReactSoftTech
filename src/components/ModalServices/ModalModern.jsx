import React, { useEffect } from 'react';
import ArrowBackIcon from '../../assets/icons/arrow-back.svg'
import { Link } from 'react-router-dom';
import './ModalModern.css';

const ModalModern = ({ children, show, onClose, setIsHoveringServices, activeMenuLink, activeData, activeMenu, handleMenuToggle }) => {

  // Do not render anything if show is false
  if (!show) {
    return null;
  }
  
  return (
    <div onClick={onClose} className="menu__modal">
      <div className='menu-modal__container'>
        <div className="menu-modal__content">
          <Link to={activeMenuLink} className="menu-modal__content-back">
            <img src={ArrowBackIcon} alt="Arrow back icon" className="menu-modal__icon-back" />
            <div className="menu-modal__content-back-text">Меню</div>
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalModern;