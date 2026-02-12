import React from 'react';
import BannerWebsitesImg from '/images/websites/bannerWebsites.png';


import './BannerWebsites.css';

function BannerWebsites(props) {
  return (
    <>
      <div className='bannerWebsites__box'>
        <img className='bannerWebsites__img-banner' src={BannerWebsitesImg} alt="" />
        <h1 className='bannerWebsites__header'>Готовые сайты и интернет магазины</h1>
      </div>
    </>
  );
}

export default BannerWebsites;