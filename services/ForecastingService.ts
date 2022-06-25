import axios, { AxiosInstance } from 'axios'


import Forecast, { convertTime } from '../models/Forecast'
import { 
  SERVER_URL,
  FORECASTING_ENDPOINT,
  CITY_CODE,
  API_KEY
} from '../config/service'

export default class ForecastingService {
  private _http: AxiosInstance

  constructor() {
    this._http = axios.create({
      baseURL: SERVER_URL
    })
  }

  async getNextForecasts(): Promise<Forecast[]> {
    const forecasts: Forecast[] = []

    const response = await this._http.get(
      `${FORECASTING_ENDPOINT}/${CITY_CODE}`,
      {
        params: {
          apikey: API_KEY,
          language: 'pt-br',
          metric: 'true'
        }
      }
    )

    if(response.status == 200) {
      const { data } = response

      data.forEach((f: any) => {
        const { 
          DateTime, 
          IconPhrase,
          WeatherIcon,
          Temperature  
        } = f
        const { Value } = Temperature

        const forecast: Forecast = {
          description: IconPhrase,
          iconNumber: WeatherIcon,
          temperature: Value,
          time: convertTime(DateTime)
        }

        forecasts.push(forecast)
      })
    } else {
      console.log(`STATUS: ${response.status}`)
      console.log(`STATUS TEXT: ${response.statusText}`)
    }

    console.log(forecasts)
    return forecasts
  }
}