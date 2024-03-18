import React, { useState, useEffect } from 'react';


async function fetchPosts() {
  try {
    const response = await fetch('http://44.227.164.159/18071/Lab6.html');
    if (!response.ok) {
      throw new Error('Error al obtener los posts');
    }
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('Error al obtener los posts:', error);
    return [];
  }
}

function PostsComponent() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);


  if (posts.length === 0) {
    return <div>No hay posts disponibles.</div>;
  }

  if (posts.length === 0) {
    return <div className="empty-state">No hay posts disponibles.</div>;
  }
  
  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsComponent;

