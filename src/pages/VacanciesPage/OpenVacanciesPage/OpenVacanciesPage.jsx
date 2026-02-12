import React from "react";
import { useGetVacanciesQuery } from "../../../redux/api";

import FormVacancies from "../../../components/VacanciesPage/FormVacancies/FormVacancies";
import BreadCrumbs from "../../../components/BreadCrumbs/BreadCrumbs";

import VideoBigContent from "../../../assets/video/video-big.mp4";
import "./OpenVacanciesPage.css";

function OpenVacanciesPage(props) {
  const {
    data: vacancies,
    error: errorVacancies,
    isLoading: isLoadingVacancies,
  } = useGetVacanciesQuery();

  if (errorVacancies) {
    return <h1>An error occurred. Please try again.</h1>;
  }

  if (isLoadingVacancies) {
    return <h1>'...Loading'</h1>;
  }

  return (
    <div className="open-vacancies__container">
      <title>Найдите своё место в СофтТек: работа в дружной команде</title>
      <meta
        name="description"
        content="Ищете работу в IT? СофтТек предлагает дружный коллектив, понятные задачи, развитие и достойную оплату! Узнайте больше о возможностях"
      />
      <meta
        name="keywords"
        content="работа, СофтТек, вакансии, it, команда, разработка, зарплата, карьера, стажировка"
      />
      <BreadCrumbs text={"Открытые вакансии"} />
      <video className="bigVideo" width="100%" loop autoPlay muted playsInline>
        <source src={VideoBigContent} type="video/mp4" />
      </video>
      <section className="vacancies">
        <div className="container">
          {vacancies.vacancies.length > 0 ? (
            vacancies.vacancies.map((vacancy, index) => (
              <div className="vacancy__box" key={index}>
                <h3 className="vacancy__name">{vacancy.name}</h3>
                <p className="vacancy__text">{vacancy.text}</p>
                <ul className="vacancy__skills">
                  {vacancy.skills.map((skill, skillIndex) => (
                    <li className="vacancy__skill" key={skillIndex}>
                      {skill.name}
                    </li>
                  ))}
                </ul>
                <button className="vacacy__btn">Прислать резюме</button>
              </div>
            ))
          ) : (
            <p className="workingAtSofttechgroup__text">
              Открытых вакансий нет, но мы будем рады пообщаться с вами и
              договориться о работе в дальнейшем!
            </p>
          )}
        </div>
      </section>
      <section className="formVacancies">
        <div className="container">
          <FormVacancies title={"Не нашли вакансию?"} />
        </div>
      </section>
    </div>
  );
}

export default OpenVacanciesPage;
