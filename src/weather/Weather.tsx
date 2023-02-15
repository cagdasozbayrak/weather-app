import React, { useState } from "react";

interface WeatherProps {
  location: string;
}

function Weather(props: WeatherProps) {

  const [temperature, setTemperature] = useState(0);
  const renderLocation = () => <div className="location">{props.location}</div>;

  const renderTemperature = () => <div className="temperature">{temperature}</div>

  return (
    <div className="weather">
      {renderLocation()}
      {renderTemperature()}
    </div>
  );
}

export default Weather;