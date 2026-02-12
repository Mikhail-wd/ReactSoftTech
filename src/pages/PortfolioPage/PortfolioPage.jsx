import Portfolio from "../../components/Portfolio/Portfolio";
import VideoBigContent from "../../assets/video/video-big.mp4";

import "./PortfolioPage.css";
import FormWithImage from "../../components/FormComponent/FormWithImage";

function PortfolioPage(props) {
  return (
    <div className="portfolio__container">
      <title>Примеры работ СофтТек</title>
      <meta
        name="description"
        content="Ознакомьтесь с примерами нашей работы. Хотите запустить свой проект? Оставьте заявку! Получите бесплатную консультацию по всем вопросам и услугам для успешной реализации"
      />
      <meta
        name="keywords"
        content="разработка проектов, портфолио, консультации, услуги, СофтТек, заявка, реализация задач, бизнес-консультация"
      />
      <div className="container">
        <video
          className="bigVideo"
          width="100%"
          loop
          autoPlay
          muted
          playsInline
        >
          <source src={VideoBigContent} type="video/mp4" />
        </video>

        <section className="portfolio">
          <Portfolio />
        </section>

        <section className="portfolio__form">
          <h2 className="portfolio__form-header">
            Хотите реализовать подобный проект?
          </h2>
          <p className="portfolio__form-sub-header">
            Оставьте заявку, а мы проконсультируем вас по всем вопросам и
            услугам в рамках вашей задачи
          </p>
          <FormWithImage text={""} header={""} />
        </section>
      </div>
    </div>
  );
}

export default PortfolioPage;
