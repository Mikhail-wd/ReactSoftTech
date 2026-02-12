import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CookieConsent.css";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем, есть ли согласие в localStorage
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // Сохраняем согласие в localStorage
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent">
      <div className="cookie-consent__container">
        <div className="cookie-consent__content">
          <p className="cookie-consent__text">
            Для персонализации сервисов сайт софттекгрупп.рф использует cookies,
            применяя метрические и иные системы аналитики в соответствии с{" "}
            <Link to="/privacy_policy" className="cookie-consent__link">
              Политикой конфиденциальности
            </Link>{" "}
            и{" "}
            <Link to="/user_agreement" className="cookie-consent__link">
              Соглашением об обработке персональных данных
            </Link>
            . Запретить эти действия можно в настройках браузера.
          </p>
        </div>
        <button onClick={handleAccept} className="cookie-consent__button">
          Принять
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
