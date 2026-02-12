import { useGetHostingSolutionsQuery } from "../../../../redux/api";

import BreadCrumbs from "../../../../components/BreadCrumbs/BreadCrumbs";

import BannerSolutions from "../../../../components/Solutions/BannerSolutions/BannerSolutions";
import DescriptionSolutuons from "../../../../components/Solutions/DescriptionSolutuons/DescriptionSolutuons";
import RentSolutions from "../../../../components/Solutions/RentSolutions/RentSolutions";
import InfoSolutions from "../../../../components/Solutions/InfoSolutions/InfoSolutions";

import "./HostingStorage.css";
import FormWithImage from "../../../../components/FormComponent/FormWithImage";

function HostingStorage(props) {
  const {
    data: hostingSolutions,
    error: errorHostingSolutions,
    isLoading: isLoadingHostingSolutions,
  } = useGetHostingSolutionsQuery();

  return (
    <div className="developmentPage__container">
      {" "}
      <title>Хостинг в аренду – доступные тарифы и надежность</title>
      <meta
        name="description"
        content="Сдаем хостинги в аренду! Оптимальное решение для любых задач: от рекламы до корпоративного сайта. Выберите подходящий тариф и начните работу сегодня!"
      />
      <meta
        name="keywords"
        content="аренда хостинга, СофтТек, хостинг в аренду, VPS, сервер в аренду, недорогой хостинг, веб-хостинг"
      />
      <BreadCrumbs text={"Хостинг в аренду"} />
      <section className="developmentPage__box">
        <BannerSolutions title="Хостинг в аренду" />
      </section>
      <section className="developmentPage__box">
        <div className="container">
          <DescriptionSolutuons>
            <div className="descriptionSolutuons__box-item">
              <h2 className="descriptionSolutuons__title">
                Польза для бизнеса:
              </h2>
              <p className="descriptionSolutuons__text">
                Экономия - не нужно вкладывать средства в оборудование и его
                обслуживание.
              </p>
              <p className="descriptionSolutuons__text">
                Гибкость - выбирайте то, что отвечает потребностям бизнеса.
              </p>
              <p className="descriptionSolutuons__text">
                Универсальность - поддержка всех доступных языков
                программирования и CMS.
              </p>
              <p className="descriptionSolutuons__text">
                Безопасность: Защита от DDoS-атак и других угроз, регулярные
                обновления системы.
              </p>
              <p className="descriptionSolutuons__text">
                Масштабируемость - легкий переход на более мощный тариф по мере
                роста бизнеса.
              </p>
              <p className="descriptionSolutuons__text">
                Адаптивность - если у Вас особые задачи - мы предложим
                индивидуальное решение.
              </p>
            </div>
            <div className="descriptionSolutuons__box-item">
              <h2 className="descriptionSolutuons__title">
                Преимущества аренды в СофтТек:
              </h2>
              <p className="descriptionSolutuons__text">
                Размещение в РФ - отечественным серверам не грозит блокировка
                или иные ограничения.
              </p>
              <p className="descriptionSolutuons__text">
                Опыт - мы предоставляем только протестированные и доказавшие
                свою эффективность решения.
              </p>
              <p className="descriptionSolutuons__text">
                Поддержка 24/7 - специалисты оперативно решают возникающие
                вопросы.
              </p>
              <p className="descriptionSolutuons__text">
                Производительность - высокая мощность с сохранением скорости вне
                зависимости от масштабов бизнеса.
              </p>
              <p className="descriptionSolutuons__text">
                Безопасность - встроенная система аналитики и блокировки
                оберегает от атак и вирусов.
              </p>
              <p className="descriptionSolutuons__text">
                Модернизация - обновляем оборудование и ПО, шагая в ногу с
                прогрессом.
              </p>
            </div>
          </DescriptionSolutuons>
        </div>
      </section>
      <section className="developmentPage__box">
        <div className="container">
          <RentSolutions
            rentSolutions={hostingSolutions?.hostingSolutions}
            title="Хостинг в аренду"
            serviceValue="hostingRent"
          />
        </div>
      </section>
      <section className="developmentPage__box">
        <div className="container">
          <InfoSolutions>
            <div className="infoSolutions__box-item">
              <h3 className="infoSolutions__title">Расшифровка тарифов:</h3>
              <p className="infoSolutions__text">
                Минимум - подходит для запуска рекламных кампаний и рассылок
              </p>
              <p className="infoSolutions__text">
                Стандарт - идеален для регулярной работы с лендингом
              </p>
              <p className="infoSolutions__text">
                Максимум - лучший вариант для полноценных корпоративных сайтов
              </p>
            </div>

            <div className="infoSolutions__box-item">
              <h3 className="infoSolutions__title">Всё включено:</h3>

              <p className="infoSolutions__text">Антивирус</p>

              <p className="infoSolutions__text">Скорость 1 ГБит/сек</p>
              <p className="infoSolutions__text">Защита от DDoS-атак</p>
              <p className="infoSolutions__text">Резервное копирование</p>
            </div>
          </InfoSolutions>
        </div>
      </section>
      <section className="developmentPage__box">
        <FormWithImage />
      </section>
    </div>
  );
}

export default HostingStorage;
