import React, { useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import Card from "./Component/Card";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        setData(response.data); // Set the data to state
        console.log(response.data); // Handle the data as needed
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    return () => {
      // Cleanup if needed
      console.log("Cleanup function called");
    };
  }, []);

  const handleLoginClick = () => {
    console.log("Button clicked!");
    localStorage.setItem("isAuthenticated", true);
  }; 
  const handleLogoutClick = () => {
    console.log("Button clicked!");
    localStorage.removeItem("isAuthenticated");
  }

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <button className="btn btn-primary" onClick={() => handleLoginClick()}>Login  </button>
      <button className="btn btn-secondary" onClick={() => handleLogoutClick()}>Logout  </button>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {data.map((item) => {
          return item.userId === 1 ? (
          <Card key={item.id} title={item.title} postId={item.id} value={item.body} />
          ): null
        }
)}
      </div>
    </div>
  );
}

export default Dashboard;