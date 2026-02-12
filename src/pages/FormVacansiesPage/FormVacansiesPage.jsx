import React from "react";

import FormVacancies from "../../components/VacanciesPage/FormVacancies/FormVacancies";
import "./FormVacansiesPage.css";

function FormVacansiesPage(props) {
  return (
    <div className="formVacanciesPage__container">
      <title>Найдите своё место в СофтТек: работа в дружной команде</title>
      <meta
        name="description"
        content="Ищете работу в IT? СофтТек предлагает дружный коллектив, понятные задачи, развитие и достойную оплату! Узнайте больше о возможностях"
      />
      <meta
        name="keywords"
        content="работа, СофтТек, вакансии, it, команда, разработка, зарплата, карьера, стажировка"
      />
      <div className="container">
        <FormVacancies />
      </div>
    </div>
  );
}

export default FormVacansiesPage;
