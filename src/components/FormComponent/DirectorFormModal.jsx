import React from "react";
import Modal from "../Modal/Modal";
import FormComponent from "./FormComponent";
import "./FormModal.css";

function DirectorFormModal({
  isOpen,
  onClose,
  preselectedService = null,
  header = "Написать директору",
}) {
  if (!isOpen) return null;

  return (
    <Modal closeModal={onClose}>
      <div className="formModal__content">
        <FormComponent
          header={header}
          onFormSubmit={onClose}
          showServices={true}
          preselectedService={preselectedService}
        />
      </div>
    </Modal>
  );
}

export default DirectorFormModal;
