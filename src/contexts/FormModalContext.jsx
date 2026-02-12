import React, { createContext, useContext, useState } from "react";

const FormModalContext = createContext();

export const useFormModal = () => {
  const context = useContext(FormModalContext);
  if (!context) {
    throw new Error("useFormModal must be used within FormModalProvider");
  }
  return context;
};

export const FormModalProvider = ({ children }) => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isDirectorModalOpen, setIsDirectorModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState(null);
  const [modalHeader, setModalHeader] = useState("Написать директору");

  const openFormModal = () => setIsFormModalOpen(true);
  const closeFormModal = () => {
    setIsFormModalOpen(false);
    setPreselectedService(null);
  };

  const openDirectorModal = (
    serviceValue = null,
    header = "Написать директору"
  ) => {
    setPreselectedService(serviceValue);
    setModalHeader(header);
    setIsDirectorModalOpen(true);
  };
  const closeDirectorModal = () => {
    setIsDirectorModalOpen(false);
    setPreselectedService(null);
    setModalHeader("Написать директору");
  };

  return (
    <FormModalContext.Provider
      value={{
        isFormModalOpen,
        isDirectorModalOpen,
        preselectedService,
        modalHeader,
        openFormModal,
        closeFormModal,
        openDirectorModal,
        closeDirectorModal,
      }}
    >
      {children}
    </FormModalContext.Provider>
  );
};
