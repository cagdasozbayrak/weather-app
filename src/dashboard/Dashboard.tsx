import React, { useState } from 'react'
import Weather from './weather/Weather'
import './dashboard.css'
import WeatherDetails from '../weatherDetails/WeatherDetails'

function Dashboard() {
    const [showDetails, setShowDetails] = useState({
        location: 'london',
        show: false,
    })
    const onClickWeather = (location: string) => () =>
        setShowDetails({ location, show: true })

    const renderWeather = () => (
        <>
            <Weather location="Your location" onClickWeather={onClickWeather} />
            <Weather location="Berlin" onClickWeather={onClickWeather} />
            <Weather location="London" onClickWeather={onClickWeather} />
        </>
    )

    const renderDetails = () => (
        <WeatherDetails location={showDetails.location} />
    )
    return (
        <div className="dashboard">
            {showDetails.show ? renderDetails() : renderWeather()}
        </div>
    )
}

export default Dashboard
