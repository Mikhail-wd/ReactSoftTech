import React from "react";

import { useGetAdvantagesWebsiteQuery } from "../../../../redux/api";

import BannerVideo from "../../../../components/Integration/BannerVideo/bannerVideo";
import PortfolioList from "../../../../components/Portfolio/PortfolioList/PortfolioList";
import BreadCrumbs from "../../../../components/BreadCrumbs/BreadCrumbs";
import Advantages from "../../../../components/Home/Advantages/Advantages";
import "./AppPage.css";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../../utils/useFetchFromStrapi.js";
import FormWithImage from "../../../../components/FormComponent/FormWithImage.jsx";

function AppPage(props) {
  const {
    isLoading,
    error,
    data: portfolioList,
  } = useQuery({
    queryKey: ["projects", "design"],
    queryFn: () => axiosInstance("projects", `populate=all`),
  });
  const {
    data: advantagesWebsite,
    error: errorAdvantagesWebsite,
    isLoading: isLoadingAdvantagesWebsite,
  } = useGetAdvantagesWebsiteQuery();

  return (
    <div className="developmentPage__container">
      {" "}
      <title></title>
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <BreadCrumbs text={"Разработка приложений"} />
      <section className="developmentPage__box">
        <div className="container">
          <BannerVideo
            header={"Разработка приложений"}
            classHeaderBanner={"appPage__header-banner"}
          />
        </div>
      </section>
      <section className="developmentPage__box">
        <div className="container">
          <PortfolioList
            title={"Разработаем десктопное или мобильное приложение"}
            text={"Ускорив и упростив коммуникацию и формирование заказов"}
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
            advantagesArr={advantagesWebsite?.advantagesWebsite}
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

export default AppPage;
