import {
  useGetMenuQuery,
  useGetClientsQuery,
  useGetAdvantagesHomeQuery,
  useGetVendorsQuery,
} from "../../redux/api";

import Banner from "../../components/Home/Banner/Banner";
import Advantages from "../../components/Home/Advantages/Advantages";
import Directions from "../../components/Home/Directions/Directions";
import Сlients from "../../components/Home/Сlients/Сlients";
import Vendors from "../../components/Home/Vendors/Vendors";
import girl from "/images/portraits/girl3.jpg";
import VideoBigContent from "../../assets/video/video-big.mp4"; // вынесеноd
import "./HomePage.css";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../utils/useFetchFromStrapi.js";
import FormWithImage from "../../components/FormComponent/FormWithImage.jsx";

function HomePage(props) {
  const {
    isLoading,
    error,
    data: homePage,
  } = useQuery({
    queryKey: ["homePage"],
    queryFn: () => axiosInstance("pages/1", `populate=all`),
  });

  const homePageData = homePage;

  const { data } = useGetMenuQuery();

  const {
    data: clients,
    error: errorClients,
    isLoading: isLoadingClients,
  } = useGetClientsQuery();

  const {
    data: advantagesHome,
    error: advantagesHomeError,
    isLoading: advantagesHomeisLoading,
  } = useGetAdvantagesHomeQuery();
  const {
    data: vendors,
    error: errorVendors,
    isLoading: isLoadingVendors,
  } = useGetVendorsQuery();

  // if (isLoading || advantagesHomeisLoading || isLoadingClients) {
  //     return <h1>Loading...</h1>;
  // }

  return (
    <div className="home__container">
      <title>СофтТек | IT-решения от российского разработчика</title>
      <meta
        name="description"
        content="СофтТек предлагает умные решения для бизнеса и жизни: разработка,  внедрение, готовые решения, офисное оборудование 24/7. Увеличили доход клиентов на 1 трлн.+"
      />
      <meta
        name="keywords"
        content="автоматизация бизнеса, СофтТек, софт, разработка ПО, внедрение, офисное оборудование, торговое оборудование, IT-решения, поддержка 24/7"
      />
      <video className="bigVideo" width="100%" loop autoPlay muted playsInline>
        <source src={VideoBigContent} type="video/mp4" />
      </video>

      <section className="banner">
        <div className="container">
          <Banner />
        </div>
      </section>

      <section className="advantages">
        <div className="container">
          <Advantages
            header={"Преимущества"}
            advantagesArr={advantagesHome?.advantagesHome}
            countItem={4}
          />
        </div>
      </section>

      <section className="directions">
        <div className="container">
          <Directions menu={data} />
        </div>
      </section>

      <section className="clients">
        <div className="container">
          <Сlients clients={clients?.clients} />
        </div>
      </section>

      <section>
        <div className="container home-form__container">
          <h2 className="form-header">Нужна консультация нашего менеджера?</h2>
          <div className="Form">
            <FormWithImage header={""} text="" imageSrc={girl} />
          </div>
        </div>
      </section>

      <section className="vendors">
        <div className="container">
          <Vendors vendors={vendors?.vendors} />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
