import React from "react";

import FormComponentAiConf from "../../components/FormComponent/FormComponentAiConf";
import "./AiConfPage.css";

function AiConfPage(props) {
  return (
    <div className="writeToTheDirector__container">
      <title>СофтТек | IT-решения от российского разработчика</title>
      <meta
        name="description"
        content="СофтТек предлагает умные решения для бизнеса и жизни: разработка,  внедрение, готовые решения, офисное оборудование 24/7. Увеличили доход клиентов на 1 трлн.+"
      />
      <meta
        name="keywords"
        content="автоматизация бизнеса, СофтТек, софт, разработка ПО, внедрение, офисное оборудование, торговое оборудование, IT-решения, поддержка 24/7"
      />
      <div className="container">
        <div className="writeToTheDirector__form">
          <FormComponentAiConf header="Получите подборку ИИ-сервисов и месяц хостинга бесплатно!" />
        </div>
      </div>
    </div>
  );
}

export default AiConfPage;
