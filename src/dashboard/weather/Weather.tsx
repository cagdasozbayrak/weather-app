import React, { useEffect, useState } from 'react'
import { OWMWeatherClient } from '../../api/OWMWeatherClient'

interface IWeatherProps {
    location: string
    onClickWeather: (loc: string) => () => void
}

const owmClient = new OWMWeatherClient()
const unit = '°C'

function Weather(props: IWeatherProps) {
    const [temperature, setTemperature] = useState(0)

    useEffect(() => {
        owmClient
            .retrieveWeatherInfo(props.location)
            .then((res) => setTemperature(res.main.temp))
    }, [props.location])

    const renderLocation = () => (
        <div className="location">{props.location}</div>
    )

    const renderTemperature = () => (
        <div className="temperature">{`${temperature.toFixed(0)} ${unit}`}</div>
    )

    return (
        <div className="weather" onClick={props.onClickWeather(props.location)}>
            {renderLocation()}
            {renderTemperature()}
        </div>
    )
}

export default Weather
