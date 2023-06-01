import { useEffect, useState } from "react";
import Post from "../Post";


export default function HomePage() {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER+'post').then(response => {
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