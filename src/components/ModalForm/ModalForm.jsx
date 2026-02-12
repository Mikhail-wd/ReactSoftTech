import React from 'react';
import './ModalForm.css';

function ModalForm({ onClose }) {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className='modalForm__overlay' onClick={onClose}>
      <div className='modalForm__container' onClick={stopPropagation}>
        <p className='modalForm__text-title'>Заявка успешно отправлена!</p>
        <p className='modalForm__text'>Мы ценим ваше внимание и интерес к нашей компании.
          Наша команда рассмотрит вашу заявку и свяжется с вами в ближайшее время!</p>
      </div>
    </div>
  );
}

export default ModalForm;
