import React, { useEffect, useState } from 'react'
import { OWMWeatherClient } from '../../api/OWMWeatherClient'
import WeatherDetailsExtra from './weatherDetailsExtra/WeatherDetailsExtra'
import './weatherDetails.css'
import Loading from '../loading/Loading'

interface IWeatherDetailsProps {
    location: string
}

interface IWeatherDetailsState {
    main: string
    temp: number
    humidity: number
    temp_max: number
    temp_min: number
    sunrise: number
    sunset: number
    visibility: number
}

const initialState: IWeatherDetailsState = {
    main: 'temp',
    temp: 0,
    humidity: 0,
    temp_max: 100,
    temp_min: -100,
    sunrise: Date.now(),
    sunset: Date.now(),
    visibility: 100,
}
const owmClient = new OWMWeatherClient()
const unit = '°C'

/**
 * Renders detailed weather information of a certain location
 * @param props
 * @constructor
 */
function WeatherDetails(props: IWeatherDetailsProps) {
    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        owmClient.retrieveWeatherInfo(props.location).then((res) => {
            const { temp, temp_min, temp_max, humidity } = res.main
            const { sunset, sunrise } = res.sys
            const { main } = res.weather[0]
            const { visibility } = res
            setState({
                main,
                temp,
                temp_min,
                temp_max,
                humidity,
                sunset,
                sunrise,
                visibility,
            })
            setLoading(false)
        })
    }, [props.location])

    const getTemperatureString = (temp: number) => `${temp.toFixed(0)} ${unit}`

    const renderDetails = (
        <div className="weather-details">
            <div className="weather-details-title detail">{state.main}</div>
            <div className="weather-details-temp detail">
                {getTemperatureString(state.temp)}
            </div>
            <span className="weather-details-temp-extra detail">{`H: ${getTemperatureString(
                state.temp_max
            )} L: ${getTemperatureString(state.temp_min)}`}</span>
        </div>
    )

    return (
        <div className="weather-details-wrapper">
            <Loading loading={loading}>
                {renderDetails}
                <WeatherDetailsExtra
                    sunrise={state.sunrise}
                    sunset={state.sunset}
                    humidity={state.humidity}
                    visibility={state.visibility}
                />
            </Loading>
        </div>
    )
}

export default WeatherDetails
