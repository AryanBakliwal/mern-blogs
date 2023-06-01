import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";


export default function Header() {

  const {setUserInfo, userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('https://mern-blogs-api.onrender.com/profile', {
      credentials: 'include',
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch(process.env.REACT_APP_SERVER+'logout', {
      credentials: 'include',
      method: 'POST'
    });
    setUserInfo(null);
  }

    return (
        <header>
          <Link to="/" className="logo">
            Blogs
          </Link>
          <nav>
            {(userInfo?.username) && (
              <>
                <Link to={'/create'}>Create new post</Link>
                <a onClick={logout}>Logout</a>
              </>
            )}
            {(!userInfo?.username) && (
              <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              </>
            )}
            
          </nav>
        </header>
    );
}