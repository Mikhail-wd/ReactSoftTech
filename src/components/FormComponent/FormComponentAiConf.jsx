import React, { useRef, useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import IMask from "imask";
import ModalForm from "../../components/ModalForm/ModalForm";

import "./FormComponentAiConf.css";
import { NavLink } from "react-router-dom";

function FormComponentAiConf({ header, text }) {
  const [chatId, setChatId] = useState("-1001820850326");
  const [modalOpen, setIsModalOpen] = useState(false);

  const sendMessage = async (values, resetForm) => {
    const token = import.meta.env.VITE_APP_TELEGRAM_BOT_TOKEN;
    const message = `
Новая заявка:
Имя: ${values.name}
Фамилия: ${values.surname}
Телефон: ${values.phone}
${values.email ? `Почта: ${values.email}` : ""}
${values.company ? `Компания: ${values.company}` : ""}
${values.hosting ? "✅ Хочу месяц хостинга бесплатно" : ""}
${values.ailearning ? "✅ Хочу обучиться ИИ" : ""}
${values.agreement ? "✅ Согласие на обработку персональных данных" : ""}
    `.trim();

    // Отправляем сообщение в Telegram (в фоне)
    fetch(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
        message
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          setIsModalOpen(true);
          resetForm();
        } else {
          console.error("Failed to send message", data);
        }
      })
      .catch((error) => {
        console.error("Error sending message", error);
      });
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Обязательное поле"),
    surname: Yup.string().required("Обязательное поле"),
    phone: Yup.string()
      .matches(
        /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
        "Формат телефона +7 (xxx) xxx-xx-xx"
      )
      .required("Обязательное поле"),
    email: Yup.string().email("Некорректный email"),
    company: Yup.string(),
    hosting: Yup.boolean(),
    ailearning: Yup.boolean(),
    agreement: Yup.boolean()
      .oneOf([true], "Необходимо согласие на обработку персональных данных")
      .required("Необходимо согласие на обработку персональных данных"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    sendMessage(values, resetForm);
    setSubmitting(false);
  };

  const MyInputField = ({ ...props }) => {
    const [field, meta, helpers] = useField(props);
    const inputRef = useRef();

    useEffect(() => {
      const maskOptions = {
        mask: "+{7} (000) 000-00-00",
      };
      const mask = IMask(inputRef.current, maskOptions);
      mask.on("accept", () => helpers.setValue(mask.value));

      return () => {
        mask.destroy();
      };
    }, [helpers]);

    return (
      <input
        {...field}
        ref={inputRef}
        className="form__form-input"
        placeholder="Телефон"
      />
    );
  };

  return (
    <div className="form__container">
      {modalOpen && <ModalForm onClose={() => setIsModalOpen(false)} />}

      <div className="form__header-section">
        <div className="form__header-content">
          <p className="form__form-title">{header}</p>
          <p className="form__form-text">{text}</p>
        </div>
        <div className="form__gift-image">
          <img src="/images/gif.jpg" alt="Подарок" className="form__gift-img" />
        </div>
      </div>
      <div className="form__aibox">
        <Formik
          initialValues={{
            name: "",
            surname: "",
            phone: "",
            email: "",
            company: "",
            hosting: false,
            ailearning: false,
            agreement: false,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, submitForm, errors, touched, values }) => (
            <Form className="form__form">
              <label className="form__form-label">
                <Field
                  type="text"
                  name="name"
                  className="form__form-input"
                  placeholder="Имя"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="form__form-error"
                />
              </label>

              <label className="form__form-label aiconf">
                <Field
                  type="text"
                  name="surname"
                  className="form__form-input"
                  placeholder="Фамилия"
                />
                <ErrorMessage
                  name="surname"
                  component="div"
                  className="form__form-error"
                />
              </label>

              <label className="form__form-label">
                <MyInputField type="tel" name="phone" />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="form__form-error"
                />
              </label>

              <label className="form__form-label">
                <Field
                  type="email"
                  name="email"
                  className="form__form-input"
                  placeholder="Почта"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="form__form-error"
                />
              </label>

              <label className="form__form-label">
                <Field
                  type="text"
                  name="company"
                  className="form__form-input"
                  placeholder="Компания"
                />
                <ErrorMessage
                  name="company"
                  component="div"
                  className="form__form-error"
                />
              </label>
              <label className="form__form-label form__form-label--checkbox">
                <Field
                  type="checkbox"
                  name="hosting"
                  className="form__form-checkbox"
                />
                <span className="form__form-checkbox-label">
                  Хочу месяц хостинга бесплатно
                </span>
                <ErrorMessage
                  name="hosting"
                  component="div"
                  className="form__form-error"
                />
              </label>

              <label className="form__form-label form__form-label--checkbox">
                <Field
                  type="checkbox"
                  name="ailearning"
                  className="form__form-checkbox"
                />
                <span className="form__form-checkbox-label">
                  Хочу обучиться ИИ
                </span>
                <ErrorMessage
                  name="ailearning"
                  component="div"
                  className="form__form-error"
                />
              </label>

              <div className="form__form-label">
                <label
                  className="form__form-label--checkbox"
                  style={{ marginBottom: 0 }}
                >
                  <Field
                    type="checkbox"
                    name="agreement"
                    className="form__form-checkbox"
                  />
                  <span className="form__form-checkbox-label">
                    Отправляя заявку, я выражаю согласие на обработку моих
                    персональных данных в соответствии с{" "}
                    <NavLink to="/privacy_policy" className="form__form-link">
                      Политикой конфиденциальности
                    </NavLink>{" "}
                    и{" "}
                    <NavLink to="/user_agreement" className="form__form-link">
                      Пользовательским соглашением
                    </NavLink>
                    <span style={{ color: "red" }}> *</span>
                  </span>
                </label>
                <ErrorMessage
                  name="agreement"
                  component="div"
                  className="form__form-error"
                />
              </div>
              <a
                href="https://docs.google.com/document/d/15Sao62sptrDJMbZW24fFdCxg36uOwoFy9hG19ll-1E0/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={async (e) => {
                  // Предотвращаем открытие ссылки по умолчанию
                  e.preventDefault();

                  // Отправляем форму и проверяем валидацию
                  await submitForm();

                  // Проверяем, есть ли ошибки после валидации
                  const validationErrors = await validationSchema
                    .validate(values, { abortEarly: false })
                    .catch((err) => err);

                  // Если нет ошибок валидации, открываем ссылку
                  if (!validationErrors.errors) {
                    window.open(
                      "https://docs.google.com/document/d/15Sao62sptrDJMbZW24fFdCxg36uOwoFy9hG19ll-1E0/edit?usp=sharing",
                      "_blank"
                    );
                  }
                }}
                className="form__form-btn"
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Заказать звонок
              </a>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default FormComponentAiConf;
