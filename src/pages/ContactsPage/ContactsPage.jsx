import Сontacts from "../../components/ContactsPage/Contacts/Contacts";
import VideoBigContent from "../../assets/video/video-big.mp4"; // вынесено

import "./ContactsPage.css";
import FormWithImage from "../../components/FormComponent/FormWithImage";
import girl from "/images/portraits/girl1.jpg";
function ContactsPage(props) {
  return (
    <div className="сontacts__container">
      <title>Откройте для себя новые возможности - свяжитесь с нами</title>
      <meta
        name="description"
        content="Контакты компании СофтТек - российского разработка ПО."
      />
      <meta
        name="keywords"
        content="трудоустройство, работа, стажировка, вакансии, СофтТек, HR, бухгалтерия, резюме"
      />
      <video className="bigVideo" width="100%" loop autoPlay muted playsInline>
        <source src={VideoBigContent} type="video/mp4" />
      </video>

      <section className="сontacts">
        <div className="container">
          <Сontacts />
        </div>
      </section>

      <section className="сontactsForm">
        <FormWithImage imageSrc={girl} />
      </section>
    </div>
  );
}

export default ContactsPage;
