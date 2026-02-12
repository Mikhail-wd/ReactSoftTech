import React from 'react';
import './WorkProcess.css';

function WorkProcess({ title, workProcess, arrImgWorkProcess }) {

  let imgIndex = 0;

  return (
    <div>
      <h2 className='workProcess__header'>{title}</h2>
      <div className='workProcess__list'>

        {workProcess.map((item, index) => {
          return <div className='workProcess__item' key={index}>
            <div className='workProcess__title-box'>
              <span className='workProcess__number'>{index + 1}</span>
              <p className='workProcess__title'>{item.title}</p>
            </div>
            <p className='workProcess__text'>{item.text}</p>
            <img src={arrImgWorkProcess[imgIndex++]} alt="icon workProcess" className="workProcess__icon" />
            
          </div>
        })}

      </div>
    </div>

  );
}

export default WorkProcess;