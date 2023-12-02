import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

// import Logo from "./Screens/Logo";
import OnBoardingScreen1 from './Screens/OnBoardingScreen1';
import OnBoardingScreen2 from './Screens/OnBoardingScreen2';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';

function AppNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OnBoardingScreen1"
            component={OnBoardingScreen1}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OnBoardingScreen2"
            component={OnBoardingScreen2}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default AppNavigator;
