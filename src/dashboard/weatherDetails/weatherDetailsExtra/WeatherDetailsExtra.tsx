import React from 'react'
import Moment from 'react-moment'
import './weatherDetailsExtra.css'
interface IWeatherDetailsExtraProps {
    sunrise: number
    sunset: number
    humidity: number
    visibility: number
}

/**
 * Renders extra details such as sunrise, sunset, humidity and visibility
 * @param props
 * @constructor
 */
function WeatherDetailsExtra(props: IWeatherDetailsExtraProps) {
    const renderDayTimeInfo = (title: 'Sunrise' | 'Sunset', time: number) => (
        <div className="extra-info">
            <span className="daytime-title">{title}</span>
            <Moment className="daytime-time" date={time} format={'HH:mm'} />
        </div>
    )

    return (
        <div className="weather-details-extra">
            <div className="info-wrapper">
                {renderDayTimeInfo('Sunrise', props.sunrise)}
                {renderDayTimeInfo('Sunset', props.sunset)}
            </div>
            <div className="info-wrapper">
                <span className="extra-info">
                    <span className="humidity-title">Humidity</span>
                    <span className="humidity-value">{`${props.humidity}%`}</span>
                </span>
                <span className="extra-info">
                    <span className="visibility-title">Visibility</span>
                    <span className="visibility-value">{`${
                        props.visibility / 1000
                    } km`}</span>
                </span>
            </div>
        </div>
    )
}

export default WeatherDetailsExtra
