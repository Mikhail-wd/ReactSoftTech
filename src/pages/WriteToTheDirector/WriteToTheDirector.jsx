import React from 'react';

import FormComponent from '../../components/FormComponent/FormComponent';
import './WriteToTheDirector.css';

function WriteToTheDirectorPage({ header, text }) {
  return (
    <div className='writeToTheDirector__container'>
      <div className='container'>

        <div className='writeToTheDirector__form'>
          <FormComponent header='Написать директору' />
        </div>
      </div>
    </div>
  );
}

export default WriteToTheDirectorPage;