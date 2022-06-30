import axios, { AxiosInstance } from 'axios';

import { estados } from '../data/cidades.json';
import City from '../models/City';
import { SERVER_URL, CITY_SEARCH_ENDPOINT, API_KEY } from '../config/service';

export default class CityService {
  private _cities: City[];
  private _http: AxiosInstance;

  constructor() {
    this._http = axios.create({
      baseURL: SERVER_URL
    });

    this._cities = [];

    estados.forEach((e) => {
      const { sigla } = e;

      e.cidades.forEach((c) => {
        const city: City = {
          name: c,
          state: sigla,
        };

        this._cities.push(city);
      });
    });

    this._cities.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }

      if (a.name > b.name) {
        return 1;
      }

      return 0;
    });
  }

  get cities() {
    return this._cities;
  }

  async findCityCode(cityName: string): Promise<number> {
    let cityCode = -1;

    const response = await this._http.get(CITY_SEARCH_ENDPOINT, {
      params: {
        q: cityName,
        apiKey: API_KEY,
        language: 'pt-BR',
      },
    });

    if (response.status == 200) {
      const { data } = response;
      if (data && data.length > 0) {
        cityCode = parseInt(data[0]['Key']);
      }
    }

    return cityCode;
  }
}
