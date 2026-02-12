import { useGetVacanciesQuery } from "../../redux/api";

import WorkingAtSofttechgroup from "../../components/VacanciesPage/WorkingAtSofttechgroup";
import FormVacancies from "../../components/VacanciesPage/FormVacancies/FormVacancies";
import VideoBigContent from "../../assets/video/video-big.mp4";

import "./VacanciesPage.css";

function VacanciesPage(props) {
  const {
    data: vacancies,
    error: errorVacancies,
    isLoading: isLoadingVacancies,
  } = useGetVacanciesQuery();

  /*  if (errorVacancies) {
    return <h1>An error occurred. Please try again.</h1>;
  }

  if (isLoadingVacancies) {
    return <h1>'...Loading'</h1>;
  } */

  return (
    <div className="vacancies__container">
      {" "}
      <title>Найдите своё место в СофтТек: работа в дружной команде</title>
      <meta
        name="description"
        content="Ищете работу в IT? СофтТек предлагает дружный коллектив, понятные задачи, развитие и достойную оплату! Узнайте больше о возможностях"
      />
      <meta
        name="keywords"
        content="работа, СофтТек, вакансии, it, команда, разработка, зарплата, карьера, стажировка"
      />
      <video className="bigVideo" width="100%" loop autoPlay muted playsInline>
        <source src={VideoBigContent} type="video/mp4" />
      </video>
      <section className="vacancies">
        <div className="container">
          <WorkingAtSofttechgroup vacancies={vacancies?.vacancies} />
        </div>
      </section>
      <section className="formVacancies">
        <FormVacancies />
      </section>
    </div>
  );
}

export default VacanciesPage;
