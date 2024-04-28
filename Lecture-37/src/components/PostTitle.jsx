import React from 'react';
import PostContext from '../contexts/PostContext';

const PostTitle = () => {
  const post = React.useContext(PostContext);
  
  return (
    <h2>{post.title}</h2>
  );
}

export default PostTitle;
