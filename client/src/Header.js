import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import logo from './blog.png';

export default function Header() {
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch( 'https://mern-blogs-api.onrender.com/profile' , {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('https://mern-blogs-api.onrender.com/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/"><div className="logo-div">
        <img src={logo} alt="logo"/>
        <h2>Blogs</h2>
      </div>
      </Link>
      
      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <a onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login"><button className="nav-btns">Login</button></Link>
            <Link to="/register"><button className="nav-btns">Register</button></Link>
          </>
        )}
      </nav>
    </header>
  );
}
