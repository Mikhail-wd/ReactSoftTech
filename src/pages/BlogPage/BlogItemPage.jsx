import React from 'react';
import { useParams } from 'react-router-dom';

import { useGetBlogListQuery } from '../../redux/api';

import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import BannerBlog from '../../components/BannerBlog/BannerBlog';
import PostBlog from '../../components/PostBlog/PostBlog';

import './BlogItemPage.css';

function BlogItemPage() {
  const { id } = useParams();

  const { data: blogList, error: errorBlogList, isLoading: isLoadingBlogList } = useGetBlogListQuery();


  if (errorBlogList) {
    return <h1>An error occurred. Please try again.</h1>;
  }

  if (isLoadingBlogList) {
    return <h1>'...Loading'</h1>;
  }

  const blogItem = blogList.blogList.find(item => item.id === Number(id));

  return (
    <div className='developmentPage__container'>
      <BreadCrumbs text={'Блог'} />

      <section className='developmentPage__box'>
        <BannerBlog title={blogItem.title} fontSize={'48px'} />
      </section>

      <section className='developmentPage__box'>
        <div className='container'>
          <PostBlog blogItem={blogItem} />
        </div>
      </section>

    </div>
  );
}

export default BlogItemPage;
