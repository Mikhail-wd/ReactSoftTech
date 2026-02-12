import React from "react";
import ProjectComponent from "../../components/Portfolio/Projects/Project";
import "./ProjectPage.css";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../utils/useFetchFromStrapi.js";

function ProjectPage(props) {
  let { slug } = useParams();

  const {
    isLoading,
    error,
    data: portfolioList,
  } = useQuery({
    queryKey: ["project", slug],
    queryFn: () =>
      axiosInstance("projects", `populate=all&[filters][slug]=${slug}`),
  });

  return (
    <>
      <title>СофтТек | IT-решения от российского разработчика</title>
      <meta
        name="description"
        content="СофтТек предлагает умные решения для бизнеса и жизни: разработка,  внедрение, готовые решения, офисное оборудование 24/7. Увеличили доход клиентов на 1 трлн.+"
      />
      <meta
        name="keywords"
        content="автоматизация бизнеса, СофтТек, софт, разработка ПО, внедрение, офисное оборудование, торговое оборудование, IT-решения, поддержка 24/7"
      />
      {isLoading ? (
        <div className={"projectPage__skeleton"}></div>
      ) : (
        <ProjectComponent project={portfolioList?.data[0]} />
      )}
    </>
  );
}

export default ProjectPage;
