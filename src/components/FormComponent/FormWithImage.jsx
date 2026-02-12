import React from "react";
import FormComponent from "./FormComponent";
import "./FormWithImage.css";
import defaultGirl from "/images/portraits/girl2.jpg";

function FormWithImage({
  header = "Мы работаем - вы растете",
  text = "Оставьте заявку, а мы проконсультируем вас по всем вопросам и услугам в рамках вашей задачи",
  imageSrc = defaultGirl,
  imageAlt = "Картинка Софт Тек",
}) {
  return (
    <div className="container formWithImage__wrapper">
      <FormComponent header={header} text={text} />
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
}

export default FormWithImage;
