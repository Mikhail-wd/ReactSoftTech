import React from 'react';

import LikeIcon from '/images/blog/like.png';
import DisLikeIcon from '/images/blog/dislike.png';
import EmployeesPhoto from '/images/employees/liana.jpg'; // вынести

import './PostBlog.css';

function PostBlog({ blogItem }) {
  return (
    <div className='postBlog__box'>

      <div className='postBlog_item'>


        <div className='postBlog__tags-box'>
          {blogItem.tags.map(( item, index ) => {
            return <div className='postBlog__tag' key={index}>{item}</div>
          })}
        </div>

        <p className='postBlog__text'>
          {blogItem.text}
        </p>

        <div className='postBlog__quote'>
          {blogItem.quote}
        </div>

        <p className='postBlog__text2'>
          {blogItem.text}
        </p>

        <div className='postBlog__likes-box'>
          <p className='postBlog__likes-text'>Вам понравилась статья?</p>

          <div className='postBlog__like-flex-tablet'>

            <div className='postBlog__like-flex'>
              <div className='postBlog__like-box'>
                <img className='postBlog__like' src={LikeIcon} alt="" />
              </div>
              <span className='postBlog__like-numbers'>{blogItem.likes}</span>
            </div>

            <div className='postBlog__like-flex'>
              <div className='postBlog__like-box'>
                <img className='postBlog__dislike' src={DisLikeIcon} alt="" />
              </div>
              <span className='postBlog__like-numbers'>{blogItem.dislikes}</span>
            </div>

          </div>
        </div>
      </div>

      <div className='postBlog_item'>
        <p className='postBlog__author-text'>Автор статьи</p>

        <div className='postBlog__author-box'>


          <div className='postBlog__author-photo-box'>
            {/* <img className='postBlog__author-photo' src={blogItem.photo} alt="" /> */}
            <img className='postBlog__author-photo' src={EmployeesPhoto} alt="" />

          </div>


          <div className='postBlog__author-name-box'>
            <p className='postBlog__author-name'>{blogItem.author}</p>
            <p className='postBlog__author-position'>{blogItem.position}</p>
          </div>


        </div>
      </div>
    </div>
  );
}

export default PostBlog;
