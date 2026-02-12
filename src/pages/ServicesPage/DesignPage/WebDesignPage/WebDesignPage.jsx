import { useGetAdvantagesWebDesingQuery } from "../../../../redux/api";

import BannerVideo from "../../../../components/Integration/BannerVideo/bannerVideo";
import BreadCrumbs from "../../../../components/BreadCrumbs/BreadCrumbs";
import PortfolioList from "../../../../components/Portfolio/PortfolioList/PortfolioList";
import Advantages from "../../../../components/Home/Advantages/Advantages";

import "./WebDesignPage.css";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../../utils/useFetchFromStrapi.js";
import FormWithImage from "../../../../components/FormComponent/FormWithImage.jsx";

function WebDesignPage(props) {
  const {
    isLoading,
    error,
    data: portfolioList,
  } = useQuery({
    queryKey: ["projects", "design"],
    queryFn: () =>
      axiosInstance("projects", `populate=*&[filters][services][slug]=design`),
  });

  const {
    data: advantagesWebDesing,
    error: errorAdvantagesWebDesing,
    isLoading: isLoadingAdvantagesWebDesing,
  } = useGetAdvantagesWebDesingQuery();

  return (
    <div className="developmentPage__container">
      {" "}
      <title>Веб-дизайн: уникальный стиль, увеличение конверсии</title>
      <meta
        name="description"
        content="Разработка эффективного веб-дизайна. Индивидуальный подход, UX/UI, юзер-френдли интерфейсы. Повысьте конверсию и прибыль"
      />
      <meta
        name="keywords"
        content="веб-дизайн, разработка сайтов, СофтТек, UI/UX дизайн, прототипирование, индивидуальный дизайн, продающий сайт"
      />
      <BreadCrumbs text={"Веб-дизайн"} />
      <section className="developmentPage__box">
        <div className="container">
          <BannerVideo
            header={"Веб-дизайн"}
            classHeaderBanner={"webDesignPage__header-banner"}
          />
        </div>
      </section>
      <section className="developmentPage__box">
        <div className="container">
          <PortfolioList
            title={"Разработаем уникальный стиль, который продаёт"}
            // text={'Клиенты будут находить вас быстрее, а коммуникация с ними станет надежной и продуктивной'}
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
            advantagesArr={advantagesWebDesing?.advantagesWebDesing}
            countItem={4}
          />
        </div>
      </section>
      <section className="developmentPage__box">
        <FormWithImage />
      </section>
    </div>
  );
}

export default WebDesignPage;
