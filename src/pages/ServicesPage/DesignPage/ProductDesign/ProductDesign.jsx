import { useGetAdvantagesProductDesingQuery } from "../../../../redux/api";

import BannerVideo from "../../../../components/Integration/BannerVideo/bannerVideo";
import BreadCrumbs from "../../../../components/BreadCrumbs/BreadCrumbs";
import PortfolioList from "../../../../components/Portfolio/PortfolioList/PortfolioList";

import Advantages from "../../../../components/Home/Advantages/Advantages";

import "./ProductDesign.css";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../../utils/useFetchFromStrapi.js";
import FormWithImage from "../../../../components/FormComponent/FormWithImage.jsx";

function ProductDesign(props) {
  const {
    isLoading,
    error,
    data: portfolioList,
  } = useQuery({
    queryKey: ["projects", "design"],
    queryFn: () =>
      axiosInstance(
        "projects",
        `populate=all&[filters][services][slug]=design`
      ),
  });

  const {
    data: advantagesProductDesing,
    error: errorAdvantagesProductDesing,
    isLoading: isLoadingAdvantagesProductDesing,
  } = useGetAdvantagesProductDesingQuery();

  return (
    <div className="developmentPage__container">
      {" "}
      <title>Продуктовый дизайн: уникальная упаковка продукта</title>
      <meta
        name="description"
        content="Продуктовый дизайн от экспертов. Выделяйтесь среди конкурентов и привлекайте внимание клиентов. Прототипирование, подготовка к печати, индивидуальный подход. Поддержка 24/7"
      />
      <meta
        name="keywords"
        content="продуктовый дизайн, СофтТек, прототипирование, user experience, разработка продукта, бизнес, прибыль, продажа"
      />
      <BreadCrumbs text={"Продуктовый дизайн"} />
      <section className="developmentPage__box">
        <div className="container">
          <BannerVideo
            header={"Продуктовый дизайн"}
            classHeaderBanner={"productDesign__header-banner"}
          />
        </div>
      </section>
      <section className="developmentPage__box">
        <div className="container">
          <PortfolioList
            title={"Упакуем Ваш продукт, выделив на рынке"}
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
            header={"Почему стоит заказать у нас"}
            advantagesArr={advantagesProductDesing?.advantagesProductDesing}
            countItem={3}
          />
        </div>
      </section>
      {/*<section className='advantages'>*/}
      {/*    <div className='container'>*/}
      {/*        <Advantages data={homePageData?.contentSections[0]} isLoading={isLoadingAdvantages} countItem={4}/>*/}
      {/*    </div>*/}
      {/*</section>*/}
      <section className="developmentPage__box">
        <FormWithImage />
      </section>
    </div>
  );
}

export default ProductDesign;
