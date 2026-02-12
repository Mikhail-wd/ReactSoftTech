import React from 'react';
import FormComponent from '../../../../components/FormComponent/FormComponent';

import './Discuss.css';

function Discuss(props) {
  return (

    <div className='discuss__container'>

      <div className='container'>
        <div className='discuss__box'>
          <FormComponent header={'Обсудить проект'} text={'Оставьте заявку, а мы проконсультируем вас по всем вопросам и услугам в рамках вашей задачи'} />
        </div>
      </div>
    </div>
  );
}

export default Discuss;