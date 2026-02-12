import React from "react";

import "./Banner.css";
import { useFormModal } from "../../../contexts/FormModalContext";

function Banner({ BannerEquipmentImg, header }) {
  const { openFormModal } = useFormModal();

  return (
    <div className="bannerEquipment__box">
      <img
        className="bannerEquipment__img-banner"
        src={BannerEquipmentImg}
        alt=""
      />
      <div className="bannerEquipment__content">
        <div className="container">
          <h1 className="bannerEquipment__header">{header}</h1>
          <button onClick={openFormModal} className="bannerEquipment__btn">
            Оставить заявку
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
