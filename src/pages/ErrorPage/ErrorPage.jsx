import "./ErrorPage.css";

export const ErrorPage = () => {
  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={"error__container"}>
      <title>СофтТек | IT-решения от российского разработчика</title>
      <meta
        name="description"
        content="СофтТек предлагает умные решения для бизнеса и жизни: разработка,  внедрение, готовые решения, офисное оборудование 24/7. Увеличили доход клиентов на 1 трлн.+"
      />
      <meta
        name="keywords"
        content="автоматизация бизнеса, СофтТек, софт, разработка ПО, внедрение, офисное оборудование, торговое оборудование, IT-решения, поддержка 24/7"
      />
      <h2>Произошла непредвиденная ошибка</h2>
      <button className={"error__btn"} onClick={reloadPage}>
        Обновить страницу
      </button>
    </div>
  );
};
