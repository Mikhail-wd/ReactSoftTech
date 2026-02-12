import React from 'react';
import BannerBlogImg from '/images/blog/2.jpg';
import './BannerBlog.css';

function BannerBlog({title}) {
  return (
    <div className='banneSolutions__box'>
      <img className='banneSolutions__img-banner' src={BannerBlogImg} alt="" />
      <h1 className='banneSolutions__header'>{title}</h1>
    </div>
  );
}

export default BannerBlog;
