import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import BlogInfo from '../components/BlogInfo';
import Posts from '../components/Posts';
import BlogContext from '../contexts/BlogContext';

function Blog() {
  const blogName = "Назва вашого блогу";

  return (
    <BlogContext.Provider value={blogName}>
      <Layout>
        <Header />
        <BlogInfo blogName={blogName} />
        <Posts />
      </Layout>
    </BlogContext.Provider>
  );
}

export default Blog;
