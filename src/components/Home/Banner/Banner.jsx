import React, { useRef, useEffect, useState } from "react";

import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import IMask from "imask";
import { Link } from "react-router-dom";

import ModalForm from "../../../components/ModalForm/ModalForm";

import "./Banner.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Обязательное поле"),
  phone: Yup.string()
    .matches(
      /^(\+7|8)?\s?\(?\d{3}\)?\s?\d{3}-?\d{2}-?\d{2}$/,
      "Формат телеофна +7 (xxx) xxx-xx-xx"
    )
    .required("Обязательное поле"),
  agreement: Yup.boolean()
    .oneOf([true], "Необходимо согласие на обработку персональных данных")
    .required("Необходимо согласие на обработку персональных данных"),
});

function Banner(props) {
  const [chatId, setChatId] = useState("-1001820850326");
  const [modalOpen, setIsModalOpen] = useState(false);

  const sendMessage = async (values, resetForm) => {
    const token = import.meta.env.VITE_APP_TELEGRAM_BOT_TOKEN;
    let name = values.name;
    let phone = values.phone;
    const text = `Name: ${name}, Phone: ${phone}
${values.agreement ? "✅ Согласие на обработку персональных данных" : ""}`;
    fetch(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          setIsModalOpen(true);
          resetForm();
        } else {
          console.error("Failed to send message", data);
        }
      });
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    sendMessage(values, resetForm);
    setSubmitting(false);
    resetForm();
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

      // Clean up
      return () => {
        mask.destroy();
      };
    }, [helpers]);

    return (
      <input
        {...field}
        ref={inputRef}
        className="banner__form-input"
        placeholder="Телефон"
      />
    );
  };

  return (
    <>
      {modalOpen && <ModalForm onClose={() => setIsModalOpen(false)} />}

      <div className="banner__container">
        <div className="banner__box">
          <h1 className="banner__header">Умные решения</h1>
          <h2 className="banner__sub-header">Для бизнеса и жизни</h2>
        </div>

        <div className="banner__box">
          <p className="banner__form-title">
            Получите консультацию нашего менеджера
          </p>
          <Formik
            initialValues={{ name: "", phone: "", agreement: false }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <label className="banner__form-label">
                  <Field
                    type="text"
                    name="name"
                    className="banner__form-input"
                    placeholder="Имя"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="banner__form-error"
                  />
                </label>
                <label className="banner__form-label">
                  <MyInputField type="tel" name="phone" />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="banner__form-error"
                  />
                </label>
                <div className="banner__form-label">
                  <label
                    className="banner__form-label--checkbox"
                    style={{ marginBottom: 0 }}
                  >
                    <Field
                      type="checkbox"
                      name="agreement"
                      className="banner__form-checkbox"
                    />
                    <span className="banner__form-checkbox-label">
                      Выражаю согласие с содержанием{" "}
                      <Link to="/privacy_policy" className="banner__form-link">
                        Политики конфиденциальности
                      </Link>{" "}
                      и{" "}
                      <Link to="/user_agreement" className="banner__form-link">
                        Соглашения об обработке персональных данных
                      </Link>
                      <span style={{ color: "red" }}> *</span>
                    </span>
                  </label>
                  <ErrorMessage
                    name="agreement"
                    component="div"
                    className="banner__form-error"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="banner__form-btn"
                >
                  Заказать звонок
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Banner;
