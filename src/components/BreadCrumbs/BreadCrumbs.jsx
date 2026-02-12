import React from 'react';
import { Link } from 'react-router-dom';

function BreadCrumbs({ text }) {
  return (
    <div className='bread-crumbs__box'>
      <div className='container'>
        <Link to='/' className='bread-crumbs__link'><span className='bread-crumbs__link'>Главная - </span></Link><span className='bread-crumbs__active'>{text}</span>
      </div>
    </div>
  );
}

export default BreadCrumbs;