/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import OnBoardingScreen1 from './Screens/OnBoardingScreen1';
import OnBoardingScreen2 from './Screens/OnBoardingScreen2';

import {
  StatusBar,
  StyleSheet,

} from 'react-native';
import AppNavigator from './AppNavigator';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <>
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='OnBoardingScreen1' component={OnBoardingScreen1} options={{ headerShown: false}}/>
          <Stack.Screen name='OnBoardingScreen2' component={OnBoardingScreen2} options={{ headerShown: false}}/>
        </Stack.Navigator>
        {/* <AppNavigator /> */}
      </NavigationContainer>
      {/* <OnBoardingScreen1 /> */}
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
