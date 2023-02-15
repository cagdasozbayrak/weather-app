import axios, { AxiosInstance } from 'axios'
const API_URL = 'http://api.openweathermap.org'
const API_VERSION = 'geo/1.0'
const GEOCODING_ENDPOINT = 'direct'
const REVERSE_GEOCODING_ENDPOINT = 'reverse'

export interface IGeocodingResponse {
    name: string
    local_names: Map<string, string>
    lat: number
    lon: number
    country: string
    state?: string
}

export interface IReverseGeocodingResponse {
    name: string
}

export class OWMGeocodingClient {
    axiosClient: AxiosInstance

    constructor() {
        this.axiosClient = axios.create({
            baseURL: API_URL,
            timeout: 1000,
            params: { appid: process.env.REACT_APP_OWM_APIKEY },
            headers: { 'Content-Type': 'application/json' },
        })
    }

    async retrieveGeocodingInfo(location: string): Promise<IGeocodingResponse> {
        const { data } = await this.axiosClient.get<IGeocodingResponse[]>(
            `${API_VERSION}/${GEOCODING_ENDPOINT}`,
            { params: { q: location, limit: 1 } }
        )
        return data[0]
    }

    async retrieveLocationName(lat: number, lon: number): Promise<string> {
        const { data } = await this.axiosClient.get<
            IReverseGeocodingResponse[]
        >(`${API_VERSION}/${REVERSE_GEOCODING_ENDPOINT}`, {
            params: { lat, lon, limit: 1 },
        })
        return data[0].name
    }
}
