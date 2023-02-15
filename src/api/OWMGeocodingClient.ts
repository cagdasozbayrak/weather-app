import axios, { AxiosInstance } from 'axios'
const API_URL = 'http://api.openweathermap.org'
const API_VERSION = 'geo/1.0'
const ENDPOINT = 'direct'

export interface IGeocodingResponse {
    name: string
    local_names: Map<string, string>
    lat: number
    lon: number
    country: string
    state?: string
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

    async retrieveGeocodingInfo(
        location: string
    ): Promise<IGeocodingResponse[]> {
        const { data } = await this.axiosClient.get<IGeocodingResponse[]>(
            `${API_VERSION}/${ENDPOINT}`,
            { params: { q: location, limit: 1 } }
        )
        return data
    }
}
