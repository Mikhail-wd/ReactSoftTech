import {
  useGetAdvantagesWebsiteQuery,
  useGetCorporateTemplatesQuery,
  useGetOnlineShoppingTemplatesQuery,
} from "../../../../redux/api";

import BannerWebsites from "../../../../components/Solutions/Websites/BannerWebsites/BannerWebsites";

import Advantages from "../../../../components/Home/Advantages/Advantages";

import BreadCrumbs from "../../../../components/BreadCrumbs/BreadCrumbs";

import ListWebsites from "../../../../components/Solutions/Websites/ListWebsites/ListWebsites";
import "./WebsitesPage.css";
import FormWithImage from "../../../../components/FormComponent/FormWithImage";

function WebsitesPage(props) {
  const {
    data: advantagesWebsite,
    error: errorAdvantagesWebsite,
    isLoading: isLoadingAdvantagesWebsite,
  } = useGetAdvantagesWebsiteQuery();
  const {
    data: corporateTemplates,
    error: errorCorporateTemplates,
    isLoading: isLoadingCorporateTemplates,
  } = useGetCorporateTemplatesQuery();
  const {
    data: onlineShoppingTemplates,
    error: errorOnlineShoppingTemplates,
    isLoading: isLoadingOnlineShoppingTemplates,
  } = useGetOnlineShoppingTemplatesQuery();

  if (errorAdvantagesWebsite || errorCorporateTemplates) {
    return <h1>An error occurred. Please try again.</h1>;
  }

  if (isLoadingAdvantagesWebsite || isLoadingCorporateTemplates) {
    return <h1>'...Loading'</h1>;
  }

  return (
    <div className="developmentPage__container">
      {" "}
      <title>Готовый сайт или интернет-магазин? Это к СофтТек!</title>
      <meta
        name="description"
        content="Нужен готовый сайт или интернет-магазин? Универсальные шаблоны для любого бизнеса. Быстрый старт вашего онлайн проекта!"
      />
      <meta
        name="keywords"
        content="готовые сайты, СофтТек, интернет-магазин, шаблон сайта, корпоративный сайт, купить сайт, бизнес сайт"
      />
      <BreadCrumbs text={"Готовые сайты и интернет магазины"} />
      <section className="developmentPage__box">
        <BannerWebsites />
      </section>
      <section className="developmentPage__box">
        <div className="container">
          <ListWebsites
            corporateTemplates={corporateTemplates.corporateTemplates}
            onlineShoppingTemplates={
              onlineShoppingTemplates.onlineShoppingTemplates
            }
          />
        </div>
      </section>
      <section className="developmentPage__box">
        <div className="container">
          <Advantages
            advantagesArr={advantagesWebsite?.advantagesWebsite}
            header={"Наши преимущества"}
            countItem={3}
          />
        </div>
      </section>
      <section className="developmentPage__box">
        <FormWithImage text={"Обсудить проект"} header={""} />
      </section>
    </div>
  );
}

export default WebsitesPage;
