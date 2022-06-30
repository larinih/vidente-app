import React, { useState, useEffect, useContext } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList } from '../../navigation'
import City from '../../models/City'
import CityService from '../../services/CityService'
import { Container, CityFilterInput, ScrollPanel } from './styles'
import CityCard from '../../components/CityCard'
import { UserContext } from '../../context/UserContext'

type Props = NativeStackScreenProps<RootStackParamList, 'Config'>

const Config = ({ navigation }: Props) => {
  const [filter, setFilter] = useState('')
  const [filteredCities, setFilteredCities] = useState<City[]>([])

  const cityService = new CityService()
  const cities = cityService.cities

  useEffect(() => {
    let citiesFound: City[] = []
    if(filter) {
      citiesFound = cities.filter((c: City) =>
        c.name.toLowerCase().includes(filter.toLowerCase())
      )
    }

    setFilteredCities(citiesFound.slice(0, 5))
  }, [filter])

  const { setCityCode, setCityName } = useContext(UserContext)

  const onCitySelected = (city: City) => {
    setCityName(`${city.name}-${city.state}`)
    cityService
      .findCityCode(city.name)
      .then((cityCode: number) => {
        console.log(`City code: ${cityCode}`)
        setCityCode(cityCode)
        navigation.pop()
      })
  }

  return (
    <Container>
      <CityFilterInput
        placeholder='Digite o nome da cidade'
        value={filter}
        onChangeText={setFilter}
       />

       {filteredCities.length > 0 && (
         <ScrollPanel>
          {filteredCities.map((city, index) => (
            <CityCard
              key={index}
              cityName={city.name}
              cityState={city.state}
              onPress={() => onCitySelected(city)}
             />
          ))}
         </ScrollPanel>
       )}
    </Container>
  )
}

export default Config

