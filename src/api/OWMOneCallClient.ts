import axios, { AxiosInstance } from 'axios'
import { OWMGeocodingClient } from './OWMGeocodingClient'
const API_URL = 'http://api.openweathermap.org'
const API_VERSION = 'data/2.5'
const ENDPOINT = 'weather'
const DEFAULT_UNIT = 'metric'

export interface IWeatherAPIResponse {
    weather: [{
        "id": number;
        "main": string;
        "description": string;
        "icon": string;
    }],
    main: {
        temp: number;
        feels_like: number
    }
}
export class OWMOneCallClient {
    axiosClient: AxiosInstance
    geocodingClient: OWMGeocodingClient
    constructor() {
        this.axiosClient = axios.create({
            baseURL: API_URL,
            timeout: 1000,
            params: {
                appid: process.env.REACT_APP_OWM_APIKEY,
                units: DEFAULT_UNIT,
                exclude: 'hourly,daily,minutely',
            },
            headers: { 'Content-Type': 'application/json' },
        })
        this.geocodingClient = new OWMGeocodingClient()
    }

    async retrieveWeatherInfo(location: string): Promise<IWeatherAPIResponse> {
        const geocodingResponses =
            await this.geocodingClient.retrieveGeocodingInfo(location)
        const { lat, lon } = geocodingResponses[0]
        const { data } = await this.axiosClient.get<IWeatherAPIResponse>(
            `${API_VERSION}/${ENDPOINT}`,
            { params: { lat, lon } }
        )
        return data
    }
}
