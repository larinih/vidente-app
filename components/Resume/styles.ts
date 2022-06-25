import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 0 10px;
  background-color: #000000;
`

export const CityName = styled.Text`
  font-family: 'Nunito_700Bold';
  color: #EEEEEE;
  font-size: 30px;
  margin: 10px 0;
  text-align: center;
`

export const WeatherInfoArea = styled.View`
  padding: 10px;
  border: 5px dashed #EEEEEE;
  width: 300px;
  height: 300px;
  border-radius: 150px;
  margin: 10px auto;
  justify-content: center;
`

export const WeatherImage = styled.Image`
  margin: 0 auto;
  width: 100px;
  height: 100px;
`

export const CurrentTemperature = styled.Text`
  font-family: 'Nunito_700Bold';
  font-size: 20px;
  color: #EEEEEE;
  text-align: center;
`

export const WeatherDescription = styled.Text`
  font-family: 'Nunito_700Bold';
  color: #EEEEEE;
  font-size: 20px;
  text-align: center;
`

export const OtherTemperatures = styled.Text`
  font-family: 'Nunito_400Regular';
  color: #A7A6A6;
  font-size: 15px;
  text-align: center;
`