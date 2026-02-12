import React from "react";

import {
  useGetAdvantagesWebDesingQuery,
  useGetBlogListQuery,
} from "../../redux/api";

import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import BannerVideo from "../../components/Integration/BannerVideo/bannerVideo";
import BlogList from "../../components/BlogList/BlogList";
import Advantages from "../../components/Home/Advantages/Advantages";
import FormComponent from "../../components/FormComponent/FormComponent";

import "./BlogPage.css";

function BlogPage(props) {
  const {
    data: advantagesWebDesing,
    error: errorAdvantagesWebDesing,
    isLoading: isLoadingAdvantagesWebDesing,
  } = useGetAdvantagesWebDesingQuery();
  const {
    data: blogList,
    error: errorBlogList,
    isLoading: isLoadingBlogList,
  } = useGetBlogListQuery();

  if ((errorAdvantagesWebDesing, errorBlogList)) {
    return <h1>An error occurred. Please try again.</h1>;
  }

  if ((isLoadingAdvantagesWebDesing, isLoadingBlogList)) {
    return <h1>'...Loading'</h1>;
  }

  return (
    <div className="developmentPage__container">
      <title>СофтТек | IT-решения от российского разработчика</title>
      <meta
        name="description"
        content="СофтТек предлагает умные решения для бизнеса и жизни: разработка,  внедрение, готовые решения, офисное оборудование 24/7. Увеличили доход клиентов на 1 трлн.+"
      />
      <meta
        name="keywords"
        content="автоматизация бизнеса, СофтТек, софт, разработка ПО, внедрение, офисное оборудование, торговое оборудование, IT-решения, поддержка 24/7"
      />
      <BreadCrumbs text={"Блог"} />

      <section className="developmentPage__box">
        <div className="container">
          <div className="blogPage__header-btn-box">
            <BannerVideo
              header={"Подпишитесь и читайте статьи первыми!"}
              classHeaderBanner={"blogPage__header-banner"}
            />

            <button className="banneSolutions__btn">Подписаться</button>
          </div>
        </div>
      </section>

      <section className="developmentPage__box">
        <div className="container">
          <BlogList blogList={blogList.blogList} />
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
        <div className="container">
          <FormComponent
            header={"Мы работаем - вы растете"}
            text={
              "Оставьте заявку, а мы проконсультируем вас по всем вопросам и услугам в рамках вашей задачи"
            }
          />
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
