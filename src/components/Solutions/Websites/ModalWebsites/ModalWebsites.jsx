import React from 'react';

import CloseIcon from '../../../../assets/icons/close.svg'
import './ModalWebsites.css';

function ModalWebsites({ open, onClose, template }) {
  if (!open) return null;


  return (
    <div className='modalWebsites__overlay'>
      <div className='container'>
      <div className='modalWebsites__content'>
        <div className='modalWebsites__box'>
          <h2 className='modalWebsites__header'>{template.name}</h2>
          <button className='modalWebsites__close' onClick={onClose}>
            <img src={CloseIcon} alt="иконка крестик" />
          </button>
        </div>

          <img className='modalWebsites__templates-img' src={template.templateimg} alt={template.name} />
        </div>
      </div>
    </div>
  );
}

export default ModalWebsites;