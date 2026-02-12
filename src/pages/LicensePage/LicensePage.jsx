import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import ModalForm from "../../components/ModalForm/ModalForm";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import "./LicensePage.css";

function LicensePage() {
  const [modalOpen, setIsModalOpen] = useState(false);
  const [chatId] = useState("-1001820850326");

  const sendMessage = async (values, resetForm) => {
    const token = import.meta.env.VITE_APP_TELEGRAM_BOT_TOKEN;
    const text = `Лицензионное соглашение СофтТек

Фамилия: ${values.lastName}

Имя: ${values.firstName}

Отчество: ${values.middleName}

Компания: ${values.company}

ИНН: ${values.inn}

${values.agreement ? "✅ Согласие с лицензионным соглашением" : ""}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
          text
        )}`
      );
      const data = await response.json();

      if (data.ok) {
        setIsModalOpen(true);
        resetForm();
      } else {
        console.error("Failed to send message", data);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const validationSchema = Yup.object({
    lastName: Yup.string().required("Обязательное поле"),
    firstName: Yup.string().required("Обязательное поле"),
    middleName: Yup.string().required("Обязательное поле"),
    company: Yup.string().required("Обязательное поле"),
    inn: Yup.string()
      .matches(/^\d{10}$|^\d{12}$/, "ИНН должен содержать 10 или 12 цифр")
      .required("Обязательное поле"),
    agreement: Yup.boolean()
      .oneOf([true], "Необходимо согласие с лицензионным соглашением")
      .required("Необходимо согласие с лицензионным соглашением"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    sendMessage(values, resetForm);
    setSubmitting(false);
  };

  return (
    <div className="licensePage__container">
      <title>Лицензия СофтТек – Условия использования</title>
      <meta
        name="description"
        content="Официальное лицензионное соглашение с компанией СофтТек. Ознакомьтесь с условиями использования программного обеспечения и сервисов."
      />
      <meta
        name="keywords"
        content="лицензия, соглашение, СофтТек, условия использования, ПО, программное обеспечение"
      />
      {modalOpen && <ModalForm onClose={() => setIsModalOpen(false)} />}

      <BreadCrumbs text={"Лицензионное соглашение"} />

      <div className="container">
        <h1 className="licensePage__header">Лицензионное соглашение СофтТек</h1>
        <p className="licensePage__subtitle">
          Ознакомьтесь с содержанием Лицензионного соглашения
        </p>

        <div className="licensePage__document-container">
          <iframe
            src="https://docs.google.com/document/d/1lv9mu4jo4De_-wU8I8TQnU93VURfKHnxfPkHU_R1cHk/preview"
            className="licensePage__document"
            title="Лицензионное соглашение"
          />
        </div>

        <div className="licensePage__form-container">
          <Formik
            initialValues={{
              lastName: "",
              firstName: "",
              middleName: "",
              company: "",
              inn: "",
              agreement: false,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="licensePage__form">
                <div className="licensePage__form-row">
                  <div className="licensePage__form-field">
                    <Field
                      type="text"
                      name="lastName"
                      className="licensePage__form-input"
                      placeholder="Фамилия"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="licensePage__form-error"
                    />
                  </div>

                  <div className="licensePage__form-field">
                    <Field
                      type="text"
                      name="firstName"
                      className="licensePage__form-input"
                      placeholder="Имя"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="licensePage__form-error"
                    />
                  </div>
                </div>

                <div className="licensePage__form-row">
                  <div className="licensePage__form-field">
                    <Field
                      type="text"
                      name="middleName"
                      className="licensePage__form-input"
                      placeholder="Отчество"
                    />
                    <ErrorMessage
                      name="middleName"
                      component="div"
                      className="licensePage__form-error"
                    />
                  </div>

                  <div className="licensePage__form-field">
                    <Field
                      type="text"
                      name="company"
                      className="licensePage__form-input"
                      placeholder="Компания"
                    />
                    <ErrorMessage
                      name="company"
                      component="div"
                      className="licensePage__form-error"
                    />
                  </div>
                </div>

                <div className="licensePage__form-field">
                  <Field
                    type="text"
                    name="inn"
                    className="licensePage__form-input"
                    placeholder="ИНН"
                  />
                  <ErrorMessage
                    name="inn"
                    component="div"
                    className="licensePage__form-error"
                  />
                </div>

                <div className="licensePage__form-agreement">
                  <label className="licensePage__form-checkbox-label">
                    <Field
                      type="checkbox"
                      name="agreement"
                      className="licensePage__form-checkbox"
                    />
                    <span className="licensePage__form-checkbox-text">
                      Нажимая на кнопку "Отправить", я подтверждаю корректность
                      внесённых мною данных и выражаю согласие с данным
                      Лицензионным соглашением.
                      <span style={{ color: "red" }}> *</span>
                    </span>
                  </label>
                  <ErrorMessage
                    name="agreement"
                    component="div"
                    className="licensePage__form-error"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="licensePage__form-btn"
                >
                  Отправить
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default LicensePage;
