import React from "react";
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import { ScrollToTop } from "./components/ScrollToTop";

import WriteToTheDirector from "./components/Header/WriteToTheDirector";

import BlogPage from "./pages/BlogPage/BlogPage";
import BlogItemPage from "./pages/BlogPage/BlogItemPage";

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";

import PrivacyPolicyPage from "./pages/PrivacyPolicyPage/PrivacyPolicyPage";
import TermsofUsePage from "./pages/TermsofUsePage/TermsofUsePage";
import ReturnConditionsPage from "./pages/ReturnConditionsPage/ReturnConditionsPage";

import Integration1сPage from "./pages/ServicesPage/IntegrationPage/Integration1cPage/Integration1cPage";
import IntegrationBitrix24Page from "./pages/ServicesPage/IntegrationPage/IntegrationBitrix24Page/IntegrationBitrix24Page";

import ServerStoragePage from "./pages/ServicesPage/SolutionsPage/ServerStorage/ServerStorage";
import HostingStoragePage from "./pages/ServicesPage/SolutionsPage/HostingStorage/HostingStorage";
import WebsitesPage from "./pages/ServicesPage/SolutionsPage/Websites/WebsitesPage";

import OfficeEquipmentPage from "./pages/ServicesPage/EquipmentPage/OfficeEquipmentPage/OfficeEquipmentPage";
import CashEquipmentPage from "./pages/ServicesPage/EquipmentPage/CashEquipmentPage/CashEquipmentPage";
import ServerEquitmentPage from "./pages/ServicesPage/EquipmentPage/ServerEquitmentPage/ServerEquitmentPage";

import WebDesignPage from "./pages/ServicesPage/DesignPage/WebDesignPage/WebDesignPage";
import ProductDesign from "./pages/ServicesPage/DesignPage/ProductDesign/ProductDesign";

import SeoPage from "./pages/ServicesPage/AdvertisingPage/SeoPage/SeoPage";
import SmmPage from "./pages/ServicesPage/AdvertisingPage/SmmPage/SmmPage";

import AppPage from "./pages/ServicesPage/DevelopmentPage/AppPage/AppPage";
import PersonalAccountsPage from "./pages/ServicesPage/DevelopmentPage/PersonalAccountsPage/PersonalAccountsPage";
import SoftwarePage from "./pages/ServicesPage/DevelopmentPage/SoftwarePage/SoftwarePage";
import WebsitePage from "./pages/ServicesPage/DevelopmentPage/WebsitePage/WebsitePage";

import LicensesPage from "./pages/ServicesPage/LicensesPage/LicensesPage";
import VacanciesPage from "./pages/VacanciesPage/VacanciesPage";
import OpenVacanciesPage from "./pages/VacanciesPage/OpenVacanciesPage/OpenVacanciesPage";

import "./global.css";
import { MainProvider } from "./providers/main/mainProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AiConfPage from "./pages/AiConfPage/AiConfPage.jsx";

import FormVacansiesPage from "./pages/FormVacansiesPage/FormVacansiesPage.jsx";
import ServicesPage from "./pages/ServicesPage/ServicesPage.jsx";
import RequisitesPage from "./pages/RequisitesPage/RequisitesPage.jsx";
import LicensePage from "./pages/LicensePage/LicensePage.jsx";
import Page404 from "./pages/Page404/Page404.jsx";
import {
  FormModalProvider,
  useFormModal,
} from "./contexts/FormModalContext.jsx";
import FormModal from "./components/FormComponent/FormModal.jsx";
import DirectorFormModal from "./components/FormComponent/DirectorFormModal.jsx";
import CookieConsent from "./components/CookieConsent/CookieConsent.jsx";

function AppContent() {
  const {
    isFormModalOpen,
    isDirectorModalOpen,
    preselectedService,
    modalHeader,
    closeFormModal,
    closeDirectorModal,
  } = useFormModal();

  return (
    <>
      <ScrollToTop />
      <WriteToTheDirector />
      <FormModal
        isOpen={isFormModalOpen}
        onClose={closeFormModal}
        showServices={true}
      />
      <DirectorFormModal
        isOpen={isDirectorModalOpen}
        onClose={closeDirectorModal}
        preselectedService={preselectedService}
        header={modalHeader}
      />
      <CookieConsent />
      <MainProvider>
        <main>
          <Routes>
            <Route path="/aiconf" element={<AiConfPage />} />
            <Route path="/form-vacansies" element={<FormVacansiesPage />} />

            <Route path="/" element={<HomePage />} />
            <Route path="/*" element={<Page404 />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:slug" element={<ProjectPage />} />

            <Route
              path="/vacancies/open-vacancies"
              element={<OpenVacanciesPage />}
            />
            <Route path="/vacancies" element={<VacanciesPage />} />

            <Route path="/privacy_policy" element={<PrivacyPolicyPage />} />
            <Route path="/user_agreement" element={<TermsofUsePage />} />
            <Route path="/return_policy" element={<ReturnConditionsPage />} />
            <Route path="/requisites" element={<RequisitesPage />} />
            <Route path="/license" element={<LicensePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogItemPage />} />
            <Route path="/services" element={<ServicesPage />} />

            <Route
              path="/services/integration/1c"
              element={<Integration1сPage />}
            />
            <Route
              path="/services/integration/bitrix24"
              element={<IntegrationBitrix24Page />}
            />

            <Route
              path="/services/solutions/server-storage-support"
              element={<ServerStoragePage />}
            />
            <Route
              path="/services/solutions/hosting"
              element={<HostingStoragePage />}
            />
            <Route
              path="/services/solutions/websites-online-stores"
              element={<WebsitesPage />}
            />

            <Route
              path="/services/equipment/office"
              element={<OfficeEquipmentPage />}
            />
            <Route
              path="/services/equipment/server"
              element={<ServerEquitmentPage />}
            />
            <Route
              path="/services/equipment/cash"
              element={<CashEquipmentPage />}
            />

            <Route path="/services/design/web" element={<WebDesignPage />} />
            <Route
              path="/services/design/product"
              element={<ProductDesign />}
            />

            <Route path="/services/advertising/seo" element={<SeoPage />} />
            <Route path="/services/advertising/smm" element={<SmmPage />} />

            <Route path="/services/development/app" element={<AppPage />} />
            <Route
              path="/services/development/personal-accounts"
              element={<PersonalAccountsPage />}
            />
            <Route
              path="/services/development/software"
              element={<SoftwarePage />}
            />
            <Route
              path="/services/development/website"
              element={<WebsitePage />}
            />

            <Route path="/services/licenses" element={<LicensesPage />} />
          </Routes>
        </main>
      </MainProvider>
    </>
  );
}

function App() {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <FormModalProvider>
            <AppContent />
          </FormModalProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
