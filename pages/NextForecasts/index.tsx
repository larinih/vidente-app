import React from 'react'
import { 
  NativeStackScreenProps
} from '@react-navigation/native-stack'

import NextForecastCard from '../../components/NextForecastCard'
import { RootStackParamList } from '../../navigation'
import { Container, ScrollPanel } from './styles'

type Props = NativeStackScreenProps<RootStackParamList, 'NextForecasts'>

const NextForecasts = ({ navigation, route}: Props) => {
  const { nextForecasts } = route.params

  return (
    <Container>
      <ScrollPanel>
        {nextForecasts.map((f) => (
          <NextForecastCard key={f.time} weather={f} />
        ))}
      </ScrollPanel>
    </Container>
  )
}

export default NextForecasts
