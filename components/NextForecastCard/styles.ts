import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  background-color: #000000;
`
export const Card = styled.View`
  background-color: #363636;
  padding: 10px;
  margin: 5px 0;
  flex-direction: row;
  border-radius: 5px;
  align-items: center;
`

export const WeatherIcon = styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`

export const WeatherDescription = styled.Text`
  font-family: 'Nunito_400Regular';
  font-size: 13px;
  color: #EEEEEE;
`

export const WeatherTemperature = styled.Text`
  font-family: 'Nunito_700Bold';
  font-size: 15px;
  margin-left: auto;
  color: #EEEEEE;
`
