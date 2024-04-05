import React, { useEffect } from "react";
import axios from "axios";

const Adminpage = () => {
  useEffect(() => {
    const verify = async () => {
      await axios
        .get("http://localhost:5000/profile")
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
    };
  });
  return (
    <div>
      <h2>Welcome To Admin Page</h2>
    </div>
  );
};

export default Adminpage;
