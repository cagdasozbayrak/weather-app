import React from 'react';
import Weather from "../weather/Weather";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      {/*<Weather location="Your location"/>*/}
      <Weather location="Berlin"/>
      <Weather location="London"/>
    </div>
  );
}

export default Dashboard;