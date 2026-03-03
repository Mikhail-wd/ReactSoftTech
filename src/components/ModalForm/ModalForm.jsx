import React from 'react';
import CloseIcon from "../../assets/icons/close.svg";
import Button from "../../components/Button/Button"
import './ModalForm.css';

function ModalForm({ onClose }) {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  function redirectTelegram() {
    window.open("https://t.me/blog_softtech", "_blank")
  }

  return (
    <div className='modalForm__overlay' onClick={()=>onClose()}>
      <div className='modalForm__container' onClick={stopPropagation}>
        <button onClick={()=>onClose()} className="modal__close-bth-alter">
          <img src={CloseIcon} className="modal__close-icon" />
        </button>
        <p className='modalForm__text-title'>Заявка успешно отправлена!</p>
        <p className='modalForm__text'>Мы ценим ваше внимание и интерес к нашей компании.
          Наша команда рассмотрит вашу заявку и свяжется с вами в ближайшее время!</p>
        <p>Присоединяйтесь к нам в Телеграм</p>
        <Button click={()=>redirectTelegram()}>Перейти</Button>
      </div>
    </div>
  );
}

export default ModalForm;
