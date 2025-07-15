import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res)=> res.json())
    .then((data)=> 
      setPosts(data));
  },[]);
  return (
    <div>
        <h1>All posts</h1>
        <ul>
          {posts.map((post)=>(
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}
              </Link>
            </li>
          ))};
        </ul>
        </div>
  );
};

export default PostList;