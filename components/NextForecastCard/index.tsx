import React from 'react'

import { getWeatherIconUri } from '../../assets/weather'
import Forecast from '../../models/Forecast'
import {
  Container,
  Card,
  WeatherIcon,
  WeatherDescription,
  WeatherTemperature
} from './styles'

type Props = {
  weather: Forecast
}

const NextForecastCard = ({ weather }: Props) => {
  return (
    <Container>
    <Card>
      <WeatherIcon source={getWeatherIconUri(weather.iconNumber)} />
      <WeatherDescription>
        {weather.time} | {weather.description}
      </WeatherDescription>
      <WeatherTemperature>{weather.temperature}°C</WeatherTemperature>
    </Card>
    </Container>
  )
}

export default NextForecastCard
