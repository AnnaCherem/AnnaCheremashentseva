import React, { cimport React, { useContext } from 'react';
import PostContext from '../contexts/PostContext';
import Layout from './Layout';
import Header from './Header';
import PostTitle from './PostTitle';
import PostMain from './PostMain';

const Post = () => {
  // Отримання даних про пост з контексту
  const post = useContext(PostContext);

  return (
    <PostContext.Provider value={post}>
      <Layout>
        <Header />
        <PostTitle />
        <PostMain />
      </Layout>
    </PostContext.Provider>
  );
}

export default Post;
