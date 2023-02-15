import React, { useEffect, useState } from 'react'
import { OWMWeatherClient } from '../../api/OWMWeatherClient'
import { CircularProgress } from '@mui/material'
import Loading from '../loading/Loading'

interface IWeatherProps {
    location: string
    onClickWeather: (loc: string) => () => void
}

const owmClient = new OWMWeatherClient()
const unit = '°C'

function Weather(props: IWeatherProps) {
    const [temperature, setTemperature] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        if (props.location !== '') {
            owmClient.retrieveWeatherInfo(props.location).then((res) => {
                setTemperature(res.main.temp)
                setLoading(false)
            })
        }
    }, [props.location])

    const renderLocation = () => (
        <div className="location">{props.location}</div>
    )

    const renderTemperature = () => (
        <div className="temperature">{`${temperature.toFixed(0)} ${unit}`}</div>
    )
    const renderContent = () => (
        <Loading loading={loading}>
            {renderLocation()}
            {renderTemperature()}
        </Loading>
    )

    return (
        <div
            className={'weather' + (loading ? ' loading' : '')}
            onClick={props.onClickWeather(props.location)}
        >
            {renderContent()}
        </div>
    )
}

export default Weather
