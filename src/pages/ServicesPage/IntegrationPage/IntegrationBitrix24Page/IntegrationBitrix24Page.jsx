import { useGetTarrifsQuery } from "../../../../redux/api";

import BreadCrumbs from "../../../../components/BreadCrumbs/BreadCrumbs";
import BannerVideo from "../../../../components/Integration/BannerVideo/bannerVideo";
import FormWithImage from "../../../../components/FormComponent/FormWithImage";

import Tarrifs24 from "../../../../components/IntegrationBitrix24Page/Tarrifs24/Tarrifs24";
import Partner24 from "../../../../components/IntegrationBitrix24Page/Partner24/Partner24";

import "./IntegrationBitrix24Page.css";

function IntegrationBitrix24Page(props) {
  const {
    data: tarrifs,
    error: errorTarrifs,
    isLoading: isLoadingTarrifs,
  } = useGetTarrifsQuery();

  if (errorTarrifs) {
    return <h1>An error occurred. Please try again.</h1>;
  }

  if (isLoadingTarrifs) {
    return <h1>'...Loading'</h1>;
  }

  return (
    <>
      {" "}
      <title>Внедрение Bitrix24 от официального партнера</title>
      <meta
        name="description"
        content="Повысьте эффективность бизнеса с Bitrix24! Оперативная поддержка и выгодные условия от СофтТек - официального партнера. Внедрение, обучение, консультации"
      />
      <meta
        name="keywords"
        content="СофтТек, внедрение Bitrix24, партнер Bitrix24, CRM, автоматизация бизнеса, оптимизация бизнес-процессов, поддержка Bitrix24"
      />
      <BreadCrumbs text={"Bitrix24"} />
      <div className="developmentPage__container">
        <section className="developmentPage__box">
          <div className="container">
            <BannerVideo
              header={"Bitrix24"}
              classHeaderBanner={"integrationBitrix24Page__header-banner"}
            />
          </div>
        </section>

        <section className="developmentPage__box">
          <div className="container">
            <Tarrifs24 tarrifs={tarrifs.tarrifs} serviceValue="bitrix24" />
          </div>
          <div className={"container"}>
            <p className={"developmentPage__txt"}>
              Стоимость указана за 1 месяц при условии оплаты тарифа на 12
              месяцев
            </p>
          </div>
        </section>

        <section className="developmentPage__box">
          <div className="container">
            <Partner24 />
          </div>
        </section>

        <section className="developmentPage__box">
          <FormWithImage />
        </section>
      </div>
    </>
  );
}

export default IntegrationBitrix24Page;
