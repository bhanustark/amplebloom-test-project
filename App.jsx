import * as React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './store'
import { Provider } from 'react-redux'

import { useColorScheme } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import BottomMenu from './screens/BottomMenu';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import LoggedInScreen from "./screens/LoggedInScreen";
import IntroScreen from './screens/IntroScreen';

const Stack = createNativeStackNavigator();

function App() {

  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
      <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Intro" component={IntroScreen} options={{headerShown: false}} />
          <Stack.Screen name="Main" component={BottomMenu} options={{headerShown: false}} />
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="LoggedIn" component={LoggedInScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;