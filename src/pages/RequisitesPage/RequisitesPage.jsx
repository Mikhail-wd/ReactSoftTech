import React from "react";
import "./RequisitesPage.css";

function RequisitesPage() {
  const requisites = {
    general: [
      {
        label: "Юридическое наименование",
        value: "Индивидуальный предприниматель Кочнев Андрей Вадимович",
      },
      { label: "Коммерческое наименование", value: "«СофтТек»" },
    ],
    management: [
      { label: "Руководитель", value: "Кочнев Андрей Вадимович" },
      /*   { label: "Генеральный директор", value: "Юлдашев Рустам Муратханович" }, */
    ],
    legal: [
      { label: "ИНН", value: "160102821504" },
      { label: "ОГРНИП", value: "325169000102670" },
      /*  { label: "ОГРН", value: "1241800012860" }, */
      {
        label: "Адрес",
        value: "422230, Республика Татарстан, г. Агрыз",
      },
      /*      {
        label: "Почтовый адрес",
        value:
          "426039, Удмуртская Республика, г.о. Город Ижевск, г. Ижевск, ш. Воткинское, зд. 170Е, помещ. 19, офис 817",
      }, */
    ],
    banking: [
      { label: "Расчётный счёт", value: "40802810800100166189" },
      { label: "Банк", value: 'ООО "Бланк банк"' },
      { label: "ИНН банка", value: "6027006032" },
      { label: "БИК банка", value: "044525801" },
      { label: "Корреспондентский счёт", value: "30101810645250000801" },
    ],
  };

  const Section = ({ title, items }) => (
    <section className="requisites__section">
      <h2 className="requisites__title">{title}</h2>
      <dl>
        {items.map((item, index) => (
          <div key={index} className="requisites__item">
            <dt className="requisites__item-label">{item.label}</dt>
            <dd className="requisites__item-value">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );

  return (
    <div className="requisites">
      {" "}
      <title>Реквизиты СофтТек</title>
      <meta
        name="description"
        content="Реквизиты СофтТек для клиентов и партнеров"
      />
      <meta name="keywords" content="СофтТек, реквизиты" />
      <header className="requisites__header">
        <h1>Реквизиты</h1>
      </header>
      <main className="requisites__main">
        <Section title="Общие сведения" items={requisites.general} />
        <Section title="Руководство" items={requisites.management} />
        <Section title="Юридическая информация" items={requisites.legal} />
        <Section title="Банковские реквизиты" items={requisites.banking} />
      </main>
    </div>
  );
}

export default RequisitesPage;
