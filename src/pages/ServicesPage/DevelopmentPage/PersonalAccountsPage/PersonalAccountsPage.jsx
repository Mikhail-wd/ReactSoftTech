import { useGetAdvantagesPersonalAccountsQuery } from "../../../../redux/api";

import BannerVideo from "../../../../components/Integration/BannerVideo/bannerVideo";
import PortfolioList from "../../../../components/Portfolio/PortfolioList/PortfolioList";
import BreadCrumbs from "../../../../components/BreadCrumbs/BreadCrumbs";
import Advantages from "../../../../components/Home/Advantages/Advantages";
import "./PersonalAccountsPage.css";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../../utils/useFetchFromStrapi.js";
import FormWithImage from "../../../../components/FormComponent/FormWithImage.jsx";

function PersonalAccountsPage(props) {
  const {
    isLoading,
    error,
    data: portfolioList,
  } = useQuery({
    queryKey: ["projects", "design"],
    queryFn: () => axiosInstance("projects", `populate=all`),
  });
  const {
    data: advantagesPersonalAccounts,
    error: errorAdvantagesPersonalAccounts,
    isLoading: isLoadingAdvantagesPersonalAccounts,
  } = useGetAdvantagesPersonalAccountsQuery();

  return (
    <div className="developmentPage__container">
      {" "}
      <title>
        Разработка личных кабинетов и систем управления предприятием
      </title>
      <meta
        name="description"
        content="Разработка личных кабинетов и систем управления. Автоматизация бизнес-процессов, повышение эффективности и увеличение прибыли. Прототипы, макеты под ключ!"
      />
      <meta
        name="keywords"
        content="личный кабинет, система управления, разработка, автоматизация, бизнес-процессы, эффективность, СофтТек, прибыль, прототип, макет
"
      />
      <BreadCrumbs text={"Разработка личных кабинетов и СУП"} />
      <section className="developmentPage__box">
        <div className="container">
          <BannerVideo
            header={"Разработка личных кабинетов и СУП"}
            classHeaderBanner={"personalAccountsPage__header-banner"}
          />
        </div>
      </section>
      <section className="developmentPage__box">
        <div className="container">
          <PortfolioList
            title={"Упростим и автоматизируем бизнес-процессы"}
            text={
              "Внедрив в работу системы управления, личные кабинеты и дашборды"
            }
            linkPortfolio={true}
            sort={true}
            portfolioList={portfolioList?.data}
            loading={isLoading}
          />
        </div>
      </section>
      <section className="developmentPage__box">
        <div className="container">
          <Advantages
            header={"Почему нужно выбрать нас?"}
            advantagesArr={
              advantagesPersonalAccounts?.advantagesPersonalAccounts
            }
            countItem={3}
          />
        </div>
      </section>
      <section className="developmentPage__box">
        <FormWithImage />
      </section>
    </div>
  );
}

export default PersonalAccountsPage;
