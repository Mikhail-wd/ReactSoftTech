import React from "react";
import Modal from "../Modal/Modal";
import FormComponent from "./FormComponent";
import "./FormModal.css";

function FormModal({ isOpen, onClose, showServices = false }) {
  if (!isOpen) return null;

  return (
    <Modal closeModal={onClose}>
      <div className="formModal__content">
        <FormComponent
          header="Оставьте заявку"
          onFormSubmit={onClose}
          showServices={showServices}
        />
      </div>
    </Modal>
  );
}

export default FormModal;
