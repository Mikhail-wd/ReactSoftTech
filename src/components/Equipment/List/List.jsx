import React from 'react';

import './List.css';

function List({ arr, header }) {

  return (
    <div className='listEquipment__box'>

      <h1 className='listEquipment__header'>{header}</h1>

      <div className='listEquipment__list'>
        {arr?.map((item, index) => {
          return <div className='listEquipment__item' key={index}>
            <div className='listEquipment__item-img-box'>
              <img className='listEquipment__item-img' src={item.img} alt={item.name} />
            </div>
            <h2 className='listEquipment__item-name'>{item.name}</h2>
          </div>
        })
        }
      </div>
    </div>
  );
}

export default List;
