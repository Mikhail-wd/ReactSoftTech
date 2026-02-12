import {
  useGetAdvantagesOfficeQuery,
  useGetOfficeEquipmentPartnersQuery,
  useGetOfficeEquipmentQuery,
} from "../../../../redux/api";

import Banner from "../../../../components/Equipment/Banner/Banner";
import List from "../../../../components/Equipment/List/List";
import Partners from "../../../../components/Equipment/Partners/Partners";
import BreadCrumbs from "../../../../components/BreadCrumbs/BreadCrumbs";

import BannerEquipmentImg from "/images/equipment/bannerEquipment.jpg";

import Advantages from "../../../../components/Home/Advantages/Advantages";
import "./OfficeEquipmentPage.css";
import FormWithImage from "../../../../components/FormComponent/FormWithImage";

function OfficeEquipmentPage(props) {
  const {
    data: advantagesOffice,
    error: errorAdvantagesOffice,
    isLoading: isLoadingAdvantagesOffice,
  } = useGetAdvantagesOfficeQuery();

  const {
    data: officeEquipment,
    error: errorOfficeEquipment,
    isLoading: isLoadingOfficeEquipment,
  } = useGetOfficeEquipmentQuery();

  const {
    data: officeEquipmentPartners,
    error: errorOfficeEquipmentPartners,
    isLoading: isLoadingOfficeEquipmentPartners,
  } = useGetOfficeEquipmentPartnersQuery();

  return (
    <div className="developmentPage__container">
      {" "}
      <title>Офисная техника: надежность по доступной цене</title>
      <meta
        name="description"
        content="Купите новую офисную технику и комплектующие под заказ! Повысьте производительность сотрудников и оптимизируйте рабочий процесс. Широкий выбор и выгодные цены!"
      />
      <meta
        name="keywords"
        content="СофтТек, офисная техника, компьютеры, принтеры, сканеры, МФУ, оргтехника, комплектующие, повышение производительности, офис"
      />
      <BreadCrumbs text={"Офисная техника и комплектующие"} />
      <section className="developmentPage__box">
        <Banner
          BannerEquipmentImg={BannerEquipmentImg}
          header={
            "Повысьте производительность персонала с помощью новой качественной техники"
          }
        />
      </section>
      <section className="developmentPage__box">
        <div className="container">
          <List
            arr={officeEquipment?.officeEquipment}
            header={"Офисная техника и комплектующие"}
          />
        </div>
      </section>
      <section className="developmentPage__box">
        <div className="container">
          <Partners arr={officeEquipmentPartners?.officeEquipmentPartners} />
        </div>
      </section>
      <section className="developmentPage__box">
        <div className="container">
          <Advantages
            header={"Почему стоит заказать у нас"}
            advantagesArr={advantagesOffice?.advantagesOffice}
            countItem={4}
          />
        </div>
      </section>
      <section className="developmentPage__box">
        <FormWithImage />
      </section>
    </div>
  );
}

export default OfficeEquipmentPage;
