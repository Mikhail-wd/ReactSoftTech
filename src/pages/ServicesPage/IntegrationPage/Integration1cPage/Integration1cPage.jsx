import React from "react";

import { useGetVersions1cQuery } from "../../../../redux/api";

import BreadCrumbs from "../../../../components/BreadCrumbs/BreadCrumbs";

import BannerVideo from "../../../../components/Integration/BannerVideo/bannerVideo"; // вынесено
import Versions1c from "../../../../components/Integration/Versions1c/Versions1c";
import Description1c from "../../../../components/Integration/Description1c/Description1c";
import "./Integration1cPage.css";
import FormWithImage from "../../../../components/FormComponent/FormWithImage";

function Integration1cPage(props) {
  const {
    data: versions1c,
    error: errorVersions1c,
    isLoading: isLoadingVersions1c,
  } = useGetVersions1cQuery();

  if (errorVersions1c) {
    return <h1>An error occurred. Please try again.</h1>;
  }

  if (isLoadingVersions1c) {
    return <h1>'...Loading'</h1>;
  }

  return (
    <>
      {" "}
      <title>1С: внедрение, серверы, интеграции от партнера 1С</title>
      <meta
        name="description"
        content="Внедрение 1С, размещение на сервере, интеграция с другими системами. Масштабируемые решения СофтТек для любого бизнеса. Высокая доступность и надежность!"
      />
      <meta
        name="keywords"
        content="СофтТек, внедрение 1С, сервер, интеграция 1С, учет, бухгалтерия, масштабирование."
      />
      <BreadCrumbs text={"1C"} />
      <div className="developmentPage__container">
        <section className="developmentPage__box">
          <div className="container">
            <BannerVideo
              header={"1C"}
              classHeaderBanner={"integration1cPage__header-banner"}
            />
          </div>
        </section>

        <section className="developmentPage__box">
          <div className="container">
            <Versions1c versions1c={versions1c.versions1c} />
          </div>
        </section>

        <section className="developmentPage__box">
          <div className="container">
            <Description1c />
          </div>
        </section>

        <section className="developmentPage__box">
          <FormWithImage />
        </section>
      </div>
    </>
  );
}

export default Integration1cPage;
