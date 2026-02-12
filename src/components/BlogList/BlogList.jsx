import React from 'react';
import './BlogList.css';
import { Link } from 'react-router-dom';

function BlogList({ blogList }) {


  return (
    <div className='blogList__box'>
      <ul className='blogList__list'>

        { blogList.map((item, index) => {
          return <li className='blogList__item' key={item.id}>
            <div className='blogList__img-box'>
              <img className='blogList__img' src={item.img} alt="" />
            </div>
            <h2 className='blogList__title'>{item.title}</h2>
            <p className='blogList__text'>{item.subTitle}</p>
            <Link className='blogList__link' key={item.id} to={`/blog/${item.id}`}>Подробнее</Link>
          </li>
        })
        }
        
      </ul>
    </div>
  );
}

export default BlogList;