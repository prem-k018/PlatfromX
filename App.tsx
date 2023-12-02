/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppNavigator from './AppNavigator';

import {StatusBar, StyleSheet} from 'react-native';
import Login from './Screens/Login';
import Carousel from './Screens/Carousel';

function App(): JSX.Element {
  return (
    <>
      <AppNavigator />
      {/* <Carousel /> */}
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
