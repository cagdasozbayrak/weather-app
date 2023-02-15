import React, { useEffect, useState } from 'react'
import Weather from './weather/Weather'
import './dashboard.css'
import WeatherDetails from './weatherDetails/WeatherDetails'
import Header from './header/Header'
import { OWMGeocodingClient } from '../api/OWMGeocodingClient'
import { useGeolocated } from 'react-geolocated'
const initialState = { location: 'Dashboard', show: false }
const owmGeocodingClient = new OWMGeocodingClient()

function Dashboard() {
    const [showDetails, setShowDetails] = useState(initialState)
    const [location, setLocation] = useState('')

    const { coords } = useGeolocated()
    const onClickWeather = (location: string) => () =>
        setShowDetails({ location, show: true })
    const onClickBack = () => setShowDetails(initialState)
    const getTitle = () =>
        showDetails.show ? showDetails.location : 'Dashboard'

    useEffect(() => {
        if (!coords) {
            return
        }
        owmGeocodingClient
            .retrieveLocationName(coords?.latitude, coords?.longitude)
            .then(setLocation)
    }, [coords])

    const renderWeather = () => (
        <>
            <Weather location={location} onClickWeather={onClickWeather} />
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
