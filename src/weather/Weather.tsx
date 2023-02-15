import React, { useEffect, useState } from 'react'
import { OWMOneCallClient } from '../api/OWMOneCallClient'

interface WeatherProps {
    location: string
}

const owmClient = new OWMOneCallClient()
const unit = "°C";

function Weather(props: WeatherProps) {
    const [temperature, setTemperature] = useState(0)
    const renderLocation = () => (
        <div className="location">{props.location}</div>
    )

    const renderTemperature = () => (
        <div className="temperature">{`${temperature} ${unit}`}</div>
    )

    useEffect(() => {
        owmClient
            .retrieveWeatherInfo(props.location)
            .then((res) => setTemperature(res.main.temp))
    }, [props.location])

    return (
        <div className="weather">
            {renderLocation()}
            {renderTemperature()}
        </div>
    )
}

export default Weather
