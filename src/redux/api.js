import * as urls from "./urls";

import { createApi } from "@reduxjs/toolkit/query/react";

import data from "./data.json";

export const api = createApi({
  baseQuery: () => ({ data }),
  tagTypes: [
    "MENU",
    "ADVANTADGES-HOME",
    "ADVANTADGES-SISTEMS",
    "ADVANTADGES-WEB-DESING",
    "ADVANTADGES-SMM",
    "ADVANTADGES-SEO",
    "ADVANTADGES-WEBSITE",
    "ADVANTADGES-PERSONAL-ACCOUNTS",
    "ADVANTADGES-SOFTWARE",
    "ADVANTADGES-DEVELOP-WEBSITE",
    "ADVANTADGES-CASH",
    "ADVANTADGES-OFFICE",
    "ADVANTADGES-SERVER",
    "PORTFOLIO-LIST",
    "BLOG-LIST",
    "WORK-PROCCES-SMM",
    "WORK-PROCCES-SEO",
    "EMPLOYEES",
    "SERVER-EQUIPMENT",
    "SERVER-EQUIPMENT_PARTNERS",
    "OFFICE-EQUIPMENT",
    "OFFICE-EQUIPMENT_PARTNERS",
    "CASH-EQUIPMENT",
    "CASH-EQUIPMENT-PARTNERS",
    "VERSIONS1C",
    "CLIENTS",
    "TARRIFS",
    "RENT-SOLUTIONS",
    "HOSTING-SOLUTIONS",
    "CORPORATE-TEMPLATE",
    "ONLINE-SHOPPING-TEMPLATES",
    "VACANCIES",
  ],
  endpoints: (builder) => ({
    getMenu: builder.query({
      query: () => "/menu",
      providesTags: (_) => ["MENU"],
    }),
    getAdvantagesHome: builder.query({
      query: () => "/advantages-home",
      providesTags: (_) => ["ADVANTADGES-HOME"],
    }),

    getAdvantagesSistems: builder.query({
      query: () => "/advantages-sistems",
      providesTags: (_) => ["ADVANTADGES-SISTEMS"],
    }),
    getAdvantagesWebDesing: builder.query({
      query: () => "/advantages-web-desing",
      providesTags: (_) => ["ADVANTADGES-WEB-DESING"],
    }),
    getAdvantagesProductDesing: builder.query({
      query: () => "/advantages-web-desing",
      providesTags: (_) => ["ADVANTADGES-WEB-DESING"],
    }),
    getadvantagesSeo: builder.query({
      query: () => "/advantages-seo",
      providesTags: (_) => ["ADVANTADGES-SEO"],
    }),
    getadvantagesSmm: builder.query({
      query: () => "/advantages-smm",
      providesTags: (_) => ["ADVANTADGES-SMM"],
    }),
    getAdvantagesWebsite: builder.query({
      query: () => "/advantages-website",
      providesTags: (_) => ["ADVANTADGES-WEBSITE"],
    }),
    getAdvantagesDevelopWebsite: builder.query({
      query: () => "/advantages-develop-website",
      providesTags: (_) => ["ADVANTADGES-DEVELOP-WEBSITE"],
    }),
    getAdvantagesPersonalAccounts: builder.query({
      query: () => "/advantages-personal-accounts",
      providesTags: (_) => ["ADVANTADGES-PERSONAL-ACCOUNTS"],
    }),
    getAdvantagesSoftware: builder.query({
      query: () => "/advantages-software",
      providesTags: (_) => ["ADVANTADGES-SOFTWARE"],
    }),
    getAdvantagesCash: builder.query({
      query: () => "/advantages-cash",
      providesTags: (_) => ["ADVANTADGES-CASH"],
    }),
    getAdvantagesOffice: builder.query({
      query: () => "/advantages-office",
      providesTags: (_) => ["ADVANTADGES-OFFICE"],
    }),
    getAdvantagesServer: builder.query({
      query: () => "/advantages-server",
      providesTags: (_) => ["ADVANTADGES-SERVER"],
    }),
    getPortfolioList: builder.query({
      query: () => "/potfolio-list",
      providesTags: (_) => ["PORTFOLIO-LIST"],
    }),
    getBlogList: builder.query({
      query: () => "/blog-list",
      providesTags: (_) => ["BLOG-LIST"],
    }),
    getWorkProcessSeo: builder.query({
      query: () => "/work-proccess-smm",
      providesTags: (_) => ["WORK-PROCCES-SEO"],
    }),
    getWorkProcessSmm: builder.query({
      query: () => "/work-proccess-seo",
      providesTags: (_) => ["WORK-PROCCES-SMM"],
    }),
    getEmployees: builder.query({
      query: () => "/employees",
      providesTags: (_) => ["EMPLOYEES"],
    }),
    getServerEquipment: builder.query({
      query: () => "/server-equipment",
      providesTags: (_) => ["SERVER-EQUIPMENT"],
    }),
    getServerEquipmentPartners: builder.query({
      query: () => "/server-equipment-partners",
      providesTags: (_) => ["SERVER-EQUIPMENT_PARTNERS"],
    }),
    getOfficeEquipment: builder.query({
      query: () => "/server-equipment",
      providesTags: (_) => ["SERVER-EQUIPMENT"],
    }),
    getOfficeEquipmentPartners: builder.query({
      query: () => "/office-equipment-partners",
      providesTags: (_) => ["OFFICE-EQUIPMENT_PARTNERS"],
    }),
    getCashEquipment: builder.query({
      query: () => "/cash-equipment",
      providesTags: (_) => ["CASH-EQUIPMENT"],
    }),
    getCashEquipmentPartners: builder.query({
      query: () => "/cash-equipment-partners",
      providesTags: (_) => ["CASH-EQUIPMENT-PARTNERS"],
    }),
    getVersions1c: builder.query({
      query: () => "/versions1c",
      providesTags: (_) => ["VERSIONS1C"],
    }),
    getClients: builder.query({
      query: () => "/clients",
      providesTags: (_) => ["CLIENTS"],
    }),
    getVendors: builder.query({
      query: () => "/vendors",
      providesTags: (_) => ["VENDORS"],
    }),
    getTarrifs: builder.query({
      query: () => "/tarrifs",
      providesTags: (_) => ["TARRIFS"],
    }),
    getRentSolutions: builder.query({
      query: () => "/rent-solution",
      providesTags: (_) => ["RENT-SOLUTIONS"],
    }),
    getHostingSolutions: builder.query({
      query: () => "/hosting-solution",
      providesTags: (_) => ["HOSTING-SOLUTIONS"],
    }),
    getCorporateTemplates: builder.query({
      query: () => "/corporate-templates",
      providesTags: (_) => ["CORPORATE-TEMPLATE"],
    }),
    getOnlineShoppingTemplates: builder.query({
      query: () => "/online-shopping-templates",
      providesTags: (_) => ["ONLINE-SHOPPING-TEMPLATES"],
    }),
    getVacancies: builder.query({
      query: () => "/vacancies",
      providesTags: (_) => ["VACANCIES"],
    }),
  }),
});

export const {
  useGetMenuQuery,

  useGetAdvantagesHomeQuery,
  useGetAdvantagesSistemsQuery,
  useGetAdvantagesWebDesingQuery,
  useGetAdvantagesProductDesingQuery,
  useGetadvantagesSeoQuery,
  useGetadvantagesSmmQuery,
  useGetAdvantagesWebsiteQuery,
  useGetAdvantagesDevelopWebsiteQuery,
  useGetAdvantagesPersonalAccountsQuery,
  useGetAdvantagesSoftwareQuery,
  useGetAdvantagesCashQuery,
  useGetAdvantagesOfficeQuery,
  useGetAdvantagesServerQuery,

  useGetPortfolioListQuery,

  useGetBlogListQuery,

  useGetWorkProcessSeoQuery,
  useGetWorkProcessSmmQuery,

  useGetEmployeesQuery,
  useGetHostingSolutionsQuery,
  useGetServerEquipmentQuery,
  useGetOfficeEquipmentQuery,
  useGetCashEquipmentQuery,
  useGetCashEquipmentPartnersQuery,
  useGetServerEquipmentPartnersQuery,
  useGetOfficeEquipmentPartnersQuery,

  useGetVersions1cQuery,

  useGetClientsQuery,

  useGetTarrifsQuery,

  useGetRentSolutionsQuery,

  useGetCorporateTemplatesQuery,

  useGetOnlineShoppingTemplatesQuery,

  useGetVacanciesQuery,
  useGetVendorsQuery,
} = api;
