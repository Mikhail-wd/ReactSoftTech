import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IMaskInput } from "react-imask";
import { Link } from "react-router-dom";
import defaultGirl from "/images/portraits/girl1.jpg";
import FileIcon from "../../../assets/icons/file.svg";

import ModalForm from "../../../components/ModalForm/ModalForm";
import "./FormVacancies.css";

const initialValues = {
  name: "",
  phone: "",
  telegram: "",
  job_interest: "",
  portfolio_link: "",
  comment: "",
  agreement: false,
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Требуется ввести имя"),
  phone: Yup.string().required("Требуется ввести номер телефона"),
  telegram: Yup.string().required("Требуется ввести Telegram ID"),
  job_interest: Yup.string().required("Укажите интересующую вас вакансию"),
  portfolio_link: Yup.string()
    .url("Недействительный URL")
    .required("Требуется URL портфолио"),
  comment: Yup.string(),
  resume: Yup.mixed().required("Требуется прикрепить файл резюме"),
  agreement: Yup.boolean()
    .oneOf([true], "Необходимо согласие на обработку персональных данных")
    .required("Необходимо согласие на обработку персональных данных"),
});

const FormVacancies = ({
  title,
  imageSrc = defaultGirl,
  imageAlt = "Картинка Софт Тек",
}) => {
  const [chatId, setChatId] = useState("-1001820850326");
  const [modalOpen, setIsModalOpen] = useState(false);

  //получение чат id
  //   const searchChatId = async () => {
  //     const token = import.meta.env.VITE_APP_TELEGRAM_BOT_TOKEN
  // ;
  //     const response = await fetch(`https://api.telegram.org/bot${token}/getUpdates`);
  //     const data = await response.json();

  //     if (data.ok) {
  //       setChatId(data.result[data.result.length - 1]?.message?.chat?.id);

  //     } else {
  //       console.error("Failed to get chat ID");
  //     }
  //   };
  //   useEffect(() => {
  //     searchChatId();
  //   }, []);

  const sendMessageWithDocument = async (values, resetForm) => {
    const token = import.meta.env.VITE_APP_TELEGRAM_BOT_TOKEN;
    const url = `https://api.telegram.org/bot${token}/sendDocument?chat_id=${chatId}`;

    const formData = new FormData();

    //values.resume это File
    formData.append("document", values.resume);

    const text = `Имя: ${values.name}, Телефон: ${values.phone}, Telegram: ${
      values.telegram
    }, Интересующая вакансия: ${values.job_interest}, Ссылка на портфолио: ${
      values.portfolio_link
    }, Комментарий: ${values.comment}
${values.agreement ? "✅ Согласие на обработку персональных данных" : ""}`;
    formData.append("caption", text);

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.ok) {
      setIsModalOpen(true);
      resetForm();
    } else {
      console.error("Failed to send message", data);
    }
  };

  return (
    <div className="container formWithImage__wrapper formVacancies__box">
      <div className="formVacancies__container">
        {modalOpen && <ModalForm onClose={() => setIsModalOpen(false)} />}
        {title ? (
          <h1 className="formVacancies__form-title">{title}</h1>
        ) : (
          <div>
            <h1 className="formVacancies__form-title">
              Присоединяйтесь к нам!
            </h1>
            <p className="formVacancies__form-sub-title">
              Давайте вместе работать на благо наших клиентов!
            </p>
          </div>
        )}

        <p className="formVacancies__form-text">
          Отправьте ваше резюме и мы постараемся чтобы вы попали в лучшую
          команду!
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            sendMessageWithDocument(values, resetForm);
          }}
        >
          {({ setFieldValue }) => (
            <Form className="formVacancies__form">
              <Field
                className="formVacancies__field"
                name="name"
                type="text"
                placeholder="Имя"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="formVacancies__error"
              />

              <Field name="phone">
                {({ field }) => (
                  <>
                    <IMaskInput
                      {...field}
                      mask="+{7} (000) 000-00-00"
                      placeholder="Телефон"
                      className="formVacancies__field"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="formVacancies__error"
                    />
                  </>
                )}
              </Field>

              <Field
                className="formVacancies__field"
                name="telegram"
                type="text"
                placeholder="Telegram"
              />
              <ErrorMessage
                name="telegram"
                component="div"
                className="formVacancies__error"
              />

              <Field
                className="formVacancies__field"
                name="job_interest"
                type="text"
                placeholder="Какая вакансия вас интересует?"
              />
              <ErrorMessage
                name="job_interest"
                component="div"
                className="formVacancies__error"
              />

              <Field
                className="formVacancies__field"
                name="portfolio_link"
                type="text"
                placeholder="Ссылка на портфолио (GitHub, Behance, Dribble)"
              />
              <ErrorMessage
                name="portfolio_link"
                component="div"
                className="formVacancies__error"
              />

              <Field
                className="formVacancies__field"
                name="comment"
                type="text"
                placeholder="Комментарий"
              />
              <ErrorMessage
                name="comment"
                component="div"
                className="formVacancies__error"
              />

              <label className="formVacancies__label" htmlFor="resume">
                <img
                  className="formVacancies__label-img"
                  src={FileIcon}
                  alt="File icon"
                />
                Прикрепить резюме
              </label>
              <input
                className="formVacancies__field-file"
                id="resume"
                name="resume"
                type="file"
                onChange={(event) => {
                  setFieldValue("resume", event.currentTarget.files[0]);
                }}
              />

              <ErrorMessage
                name="resume"
                component="div"
                className="formVacancies__error"
              />

              <label className="formVacancies__checkbox-label">
                <Field
                  type="checkbox"
                  name="agreement"
                  className="formVacancies__checkbox"
                />
                <span className="formVacancies__checkbox-text">
                  Выражаю согласие с содержанием{" "}
                  <Link to="/privacy_policy" className="formVacancies__link">
                    Политики конфиденциальности
                  </Link>{" "}
                  и{" "}
                  <Link to="/user_agreement" className="formVacancies__link">
                    Соглашения об обработке персональных данных
                  </Link>
                  <span style={{ color: "red" }}> *</span>
                </span>
              </label>
              <ErrorMessage
                name="agreement"
                component="div"
                className="formVacancies__error"
              />

              <button className="formVacancies__form-btn" type="submit">
                Отправить
              </button>
            </Form>
          )}
        </Formik>
      </div>
      {imageSrc && (
        <div className="formWithImage__image">
          <img
            className="formWithImage__picture"
            src={imageSrc}
            alt={imageAlt}
          />
        </div>
      )}
    </div>
  );
};

export default FormVacancies;
