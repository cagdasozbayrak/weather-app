import React, { useState } from 'react'
import Weather from './weather/Weather'
import './dashboard.css'
import WeatherDetails from './weatherDetails/WeatherDetails'
import Header from './header/Header'

const initialState = { location: 'Dashboard', show: false }

function Dashboard() {
    const [showDetails, setShowDetails] = useState(initialState)
    const onClickWeather = (location: string) => () =>
        setShowDetails({ location, show: true })
    const onClickBack = () => setShowDetails(initialState)
    const getTitle = () =>
        showDetails.show ? showDetails.location : 'Dashboard'

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
        <>
            <Header title={getTitle()} onClickBack={onClickBack} />
            <div className="dashboard">
                {showDetails.show ? renderDetails() : renderWeather()}
            </div>
        </>
    )
}

export default Dashboard
