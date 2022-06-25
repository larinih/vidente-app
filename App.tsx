import React from 'react'
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppLoading from 'expo-app-loading'

import { RootStackParamList } from './navigation'
import Config from './pages/Config'
import Home from './pages/Home'
import NextForecasts from './pages/NextForecasts'


const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Vidente' }}
        />
       
        <Stack.Screen
          name="NextForecasts"
          component={NextForecasts}
          options={{ title: 'Próximas Temperaturas' }}
        />
        <Stack.Screen
            name="Config"
            component={Config}
            options={{
              title: 'Configurações',
              headerStyle: {
                backgroundColor: '#24252a',
              },
              headerTintColor: 'white',
            }}
          />
       
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
