import React, { useState, useEffect } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const [name, setUsername] = useState("No");
  const [loggedIn, setLoggedIn] = useState(true);
  useEffect(() => {
    getUser();
  }, []);
  axios.defaults.withCredentials = true;

  const navigate = useNavigate();
  const handlelogout = () => {
    axios
      .get("http://localhost:5000/auth/logout")
      .then((res) => {
        if (res.data.status) {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };
  const getUser = () => {
    axios
      .get("http://localhost:5000/username")
      .then((res) => {
        if (res.data.status) {
          setUsername(res.data.username);
          setLoggedIn(true);
        }
      })
      .catch((err) => console.log(err));
  };
  
  return (
    <div>
    {loggedIn ? 
      <div>
        <p>User {name} is logged in</p>
        <br />
        <button>
          <Link to="/dashboard">Dashboard</Link>
        </button>
        <br />
        <br />
        <button onClick={handlelogout}>LogOut</button>
      </div>
     : 
      <div>
        <p>Please login</p>
        <br />
        <button>
          <Link to="/login">Login</Link>
        </button>
      </div>
    }
  </div>
  );
};

export default Home;
