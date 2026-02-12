import React, { useRef, useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import IMask from "imask";
import { Link } from "react-router-dom";
import ModalForm from "../../components/ModalForm/ModalForm";
import MultiSelect from "./MultiSelect";

import "./FormComponent.css";

function FormComponent({
  header,
  text,
  onFormSubmit,
  showServices = false,
  preselectedService = null,
}) {
  const [chatId, setChatId] = useState("-1001820850326");
  const [modalOpen, setIsModalOpen] = useState(false);

  // Опции для мульти-селекта услуг
  const serviceOptions = [
    { value: "bitrix24", label: "Bitrix24" },
    { value: "integration1c", label: "Внедрение 1С" },
    { value: "websiteDev", label: "Разработка сайтов" },
    { value: "appDev", label: "Разработка приложений" },
    { value: "softwareDev", label: "Разработка ПО" },
    { value: "personalAccounts", label: "Разработка личных кабинетов и СУП" },
    { value: "seo", label: "SEO продвижение" },
    { value: "smm", label: "SMM продвижение" },
    { value: "uxui", label: "UX/UI дизайн" },
    { value: "productDesign", label: "Продуктовый дизайн" },
    { value: "officeEquipment", label: "Офисная техника и комплектующие" },
    { value: "cashEquipment", label: "Контрольно-кассовая техника" },
    {
      value: "serverEquipment",
      label: "Серверное и вычислительное оборудование",
    },
    { value: "serverRent", label: "Сервер в аренду" },
    { value: "hostingRent", label: "Хостинг в аренду" },
    { value: "readySites", label: "Готовые сайты и интернет-магазины" },
  ];

  const sendMessage = async (values, resetForm) => {
    const token = import.meta.env.VITE_APP_TELEGRAM_BOT_TOKEN;
    let name = values.name;
    let phone = values.phone;

    // Формируем список выбранных услуг
    let servicesText = "";
    if (
      showServices &&
      values.selectedServices &&
      values.selectedServices.length > 0
    ) {
      const selectedLabels = values.selectedServices
        .map(
          (serviceValue) =>
            serviceOptions.find((option) => option.value === serviceValue)
              ?.label
        )
        .filter(Boolean);

      servicesText = `\nЧто Вас интересует:\n${selectedLabels.join("\n")}`;
    }

    const text = `Новая заявка:
Имя: ${name}
Телефон: ${phone}${servicesText}
${values.agreement ? "✅ Согласие на обработку персональных данных" : ""}`;

    fetch(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
        text
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          setIsModalOpen(true);
          resetForm();
          // Закрыть модальное окно через 2 секунды после показа сообщения об успехе
          if (onFormSubmit) {
            setTimeout(() => {
              onFormSubmit();
            }, 4000);
          }
        } else {
          console.error("Failed to send message", data);
        }
      });
  };
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
        className="form__form-input"
        placeholder="Телефон"
      />
    );
  };

  return (
    <div className="form__container">
      {modalOpen && <ModalForm onClose={() => setIsModalOpen(false)} />}
      {header && <p className="form__form-title">{header}</p>}
      <p className="form__form-text">{text}</p>
      <div className="form__box">
        <Formik
          initialValues={{
            name: "",
            phone: "",
            agreement: false,
            selectedServices: showServices
              ? preselectedService
                ? [preselectedService]
                : []
              : undefined,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          {({ isSubmitting }) => (
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
              <label className="form__form-label">
                <MyInputField type="tel" name="phone" />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="form__form-error"
                />
              </label>

              {showServices && (
                <div className="form__form-label">
                  {/*  <p className="form__form-services-title">
                    Что Вас интересует?
                  </p> */}
                  <Field name="selectedServices">
                    {({ field, form }) => (
                      <MultiSelect
                        options={serviceOptions}
                        selectedValues={field.value || []}
                        onChange={(values) =>
                          form.setFieldValue(field.name, values)
                        }
                        placeholder="Что Вас интересует?"
                        name={field.name}
                      />
                    )}
                  </Field>
                </div>
              )}

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
                    Выражаю согласие с содержанием{" "}
                    <Link to="/privacy_policy" className="form__form-link">
                      Политики конфиденциальности
                    </Link>{" "}
                    и{" "}
                    <Link to="/user_agreement" className="form__form-link">
                      Соглашения об обработке персональных данных
                    </Link>
                    <span style={{ color: "red" }}> *</span>
                  </span>
                </label>
                <ErrorMessage
                  name="agreement"
                  component="div"
                  className="form__form-error"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="form__form-btn"
              >
                Заказать звонок
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default FormComponent;
