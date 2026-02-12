import React from "react";
import { Link } from "react-router-dom";

import CloseIcon from "../../assets/icons/close.svg";

import "./Modal.css";

const Modal = ({ children, closeModal }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="modal" onClick={handleOverlayClick}>
      <div className="modal-container">
        <div className="modal__content">
          <button onClick={closeModal} className="modal__close-bth">
            <img src={CloseIcon} className="modal__close-icon" />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
