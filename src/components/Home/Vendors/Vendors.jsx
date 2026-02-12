import React from 'react';

import './Vendors.css';

function Vendors({vendors}) {

  return (
    <div className='vendors__container'>

      <h2 className='vendors__header'>Вендоры</h2>

      <div className='vendors__list'>
        {vendors?.map((vendor, index) => (
          <div key={index} className="vendors__item">
            <img src={vendor.img} alt="client img" className="vendors__item-img" />
          </div>
        ))}
      </div>

    </div>

  );
}

export default Vendors;
