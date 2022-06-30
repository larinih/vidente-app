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

import 'react-native-gesture-handler';

import {useColorScheme, StatusBar} from 'react-native';

import {ThemeProvider} from 'styled-components/native';

import colorTheme from './themes/index';
import { Routes } from './routes/routes'

const d = (): React.ReactElement => {
  const colorScheme = useColorScheme();
  const theme = colorTheme[colorScheme ? colorScheme : 'light'];

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar backgroundColor={theme.color.navigation.background} />
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};


const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  const colorScheme = useColorScheme();
  const theme = colorTheme[colorScheme ? colorScheme : 'light'];

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar backgroundColor={theme.color.navigation.background} />
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
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
