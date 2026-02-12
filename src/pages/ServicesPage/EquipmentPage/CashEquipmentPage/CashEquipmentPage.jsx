import {
  useGetAdvantagesCashQuery,
  useGetCashEquipmentPartnersQuery,
  useGetCashEquipmentQuery,
} from "../../../../redux/api";

import Banner from "../../../../components/Equipment/Banner/Banner";
import List from "../../../../components/Equipment/List/List";
import Partners from "../../../../components/Equipment/Partners/Partners";
import BreadCrumbs from "../../../../components/BreadCrumbs/BreadCrumbs";

import Advantages from "../../../../components/Home/Advantages/Advantages";
import BannerServerImg from "/images/server/bannerServer.jpg";
import FormWithImage from "../../../../components/FormComponent/FormWithImage";

function CashEquipmentPage(props) {
  const {
    data: advantagesCash,
    error: errorAdvantagesCash,
    isLoading: isLoadingAdvantagesCash,
  } = useGetAdvantagesCashQuery();

  const {
    data: cashEquipment,
    error: errorCashEquipment,
    isLoading: isLoadingCashEquipment,
  } = useGetCashEquipmentQuery();

  const {
    data: cashEquipmentPartners,
    error: errorCashEquipmentPartners,
    isLoading: isLoadingCashEquipmentPartners,
  } = useGetCashEquipmentPartnersQuery();

  return (
    <div className="developmentPage__container">
      {" "}
      <title>Купить ККТ: цены от 2700 ₽ в СофтТек</title>
      <meta
        name="description"
        content="Выгодные цены на контрольно-кассовую технику и комплектующие! Широкий ассортимент, быстрая доставка. Закажите онлайн прямо сейчас!"
      />
      <meta
        name="keywords"
        content="ККТ, касса, СофтТек, фискальный принтер, сканер штрихкодов, Эвотор, Атол, ШТРИХ-М, онлайн касса, купить ККТ"
      />
      <BreadCrumbs text={"Контрольно кассовая техника и комплектующие"} />
      <section className="developmentPage__box">
        <Banner
          BannerEquipmentImg={BannerServerImg}
          header={"Закажите лучшее оборудование по цене от 2700 ₽"}
        />
      </section>
      <section className="developmentPage__box">
        <div className="container">
          <List
            arr={cashEquipment?.cashEquipment}
            header={"Контрольно кассовая техника и комплектующие"}
          />
        </div>
      </section>
      <section className="developmentPage__box">
        <div className="container">
          <Partners arr={cashEquipmentPartners?.cashEquipmentPartners} />
        </div>
      </section>
      <section className="developmentPage__box">
        <div className="container">
          <Advantages
            header={"Почему стоит заказать у нас"}
            advantagesArr={advantagesCash?.advantagesCash}
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

export default CashEquipmentPage;
