import { useEffect, useState } from "react";
import Post from "../Post";


export default function HomePage() {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch('https://mern-blogs-api.onrender.com/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <>
      {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
    </>
  );
}