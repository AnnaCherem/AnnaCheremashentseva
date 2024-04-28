import React, { createContext, useContext, useState, useEffect } from 'react';

// Створення контексту PostContext
const PostContext = createContext({});

// Компонент Layout
const Layout: React.FC = ({ children }) => {
  return <div className="layout">{children}</div>;
};

// Компонент Header
const Header: React.FC = () => {
  return <header className="header">Header</header>;
};

// Компонент PostTitle
const PostTitle: React.FC = () => {
  const post = useContext(PostContext);
  return <h3 className="post-title">{post.title}</h3>;
};

// Компонент PostMain
const PostMain: React.FC = () => {
  const post = useContext(PostContext);
  return (
    <div className="post-main">
      <div className="cover-container">
        <img src={post.cover} alt={post.title} />
      </div>
      <p>{post.content}</p>
      <button id="like">Like this post</button>
    </div>
  );
};

// Компонент Post
const Post: React.FC = () => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/<https://github.com/AnnaCherem/AnnaCheremashentseva.git>/db/posts/1');
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <PostContext.Provider value={post}>
      <Layout>
        <Header />
        <PostTitle />
        <PostMain />
      </Layout>
    </PostContext.Provider>
  );
};

export default Post;
