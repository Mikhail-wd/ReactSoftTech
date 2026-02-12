import Header from "../../components/Header/Header.jsx";
import React from "react";
import Footer from "../../components/Footer/Footer.jsx";
import { axiosInstance } from "../../utils/useFetchFromStrapi.js";
import { Loader } from "../../components/Loader/Loader.jsx";
import { useQuery } from "@tanstack/react-query";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage.jsx";

export const MainProvider = ({ children }) => {
  const {
    isLoading,
    error,
    data: global,
  } = useQuery({
    queryKey: ["global"],
    queryFn: () => axiosInstance("global", `populate=all`),
  });

  const globalData = global?.data;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header data1={globalData.header} />
          {children}
          <Footer data1={globalData.footer} />
        </>
      )}
    </>
  );
};
