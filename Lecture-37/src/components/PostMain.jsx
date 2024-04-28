import React from 'react';
import PostContext from '../contexts/PostContext';

const PostMain = () => {
  const post = React.useContext(PostContext);
  
  return (
    <div>
      <p>{post.content}</p>
    </div>
  );
}

export default PostMain;
