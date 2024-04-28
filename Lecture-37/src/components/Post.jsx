import React, { useEffect, useState } from 'react';
import PostContext from '../contexts/PostContext';
import Layout from './Layout';
import Header from './Header';
import PostTitle from './PostTitle';
import PostMain from './PostMain';

const Post = ({ postData }) => {
  const [post, setPost] = useState(postData);

  useEffect(() => {
    setPost(postData);
  }, [postData]);

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
