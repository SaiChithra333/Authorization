import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:5000/auth/verify").then((res) => {
      if (res.data.status) {
      } else {
        alert('cant access ,please login')
        navigate("/");
      }
    });
  }, []);
  return <div>Dashboard</div>;
};

export default Dashboard;
