import React, { useState, useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { 
  Container,
  NextForecastsButton,
  NextForecastsArea,
  NextForecastsText
} from './styles'
import Resume from '../../components/Resume'
import Forecast from '../../models/Forecast'
import ForecastingService from '../../services/ForecastingService'
import { RootStackParamList } from '../../navigation'
import ConfigButton from '../../components/ConfigButtom'
import { TouchableOpacity } from 'react-native'

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({ navigation }: Props) => {
  const [nextForecasts, setNextForecasts] = useState<Forecast[]>([])
  const [currentForecast, setCurrentForecast] = useState<Forecast>({
    description: '',
    iconNumber: 0,
    temperature: 0,
    time: ''
  })
  const [maxTemperature, setMaxTemperature] = useState<number>(0)
  const [minTemperature, setMinTemperature] = useState<number>(0)

  const forecastingService = new ForecastingService()

  const loadForecasts = async () => {
    const forecasts: Forecast[] = await forecastingService.getNextForecasts()
    setCurrentForecast(forecasts[0])
    setNextForecasts(forecasts.slice(1))

    let max = Number.NEGATIVE_INFINITY
    let min = Number.POSITIVE_INFINITY

    forecasts.forEach((f) => {
      if(max < f.temperature) {
        max = f.temperature
      }

      if(min > f.temperature) {
        min = f.temperature
      }
    })

    setMaxTemperature(max)
    setMinTemperature(min)
  }

  useEffect(() => {
    loadForecasts()
  }, [])

  return (
    <Container>
     <ConfigButton>
    
       </ConfigButton>
      <Resume
        cityName='Aquidauana'
        currentTemperature={currentForecast.temperature}
        description={currentForecast.description}
        iconNumber={currentForecast.iconNumber}
        maxTemperature={maxTemperature}
        minTemperature={minTemperature}
       />

       <NextForecastsButton onPress={
         () => navigation.push('NextForecasts', {nextForecasts})
       }>
        <NextForecastsArea>
          <NextForecastsText>Próximas Temperaturas</NextForecastsText>
        </NextForecastsArea>
       </NextForecastsButton>
    </Container>
  )
}

export default Home
