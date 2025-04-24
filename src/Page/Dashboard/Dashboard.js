import React, {useEffect,useState} from "react";
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
  },[]);

  return (
    <div className="container">

      <Header />
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {data.map((item) => (
          <Card key={item.id} title={item.title} postId={item.id} value={item.body} />
        ))}
    </div>
      <Footer />
    </div>
  );
}

export default Dashboard;