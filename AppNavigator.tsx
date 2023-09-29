import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {NavigationContainer} from '@react-navigation/native';

// import Logo from "./Screens/Logo";
import OnBoardingScreen1 from "./Screens/OnBoardingScreen1";
import OnBoardingScreen2 from "./Screens/OnBoardingScreen2";

const Stack = createNativeStackNavigator

function AppNavigator(){
    return(
        <Stack.Navigator initialRouteName='OnBoardingScreen1'>
          <Stack.Screen name='OnBoardingScreen1' component={OnBoardingScreen1} options={{ headerShown: false}}/>
          <Stack.Screen name='OnBoardingScreen2' component={OnBoardingScreen2} options={{ headerShown: false}}/>
        </Stack.Navigator>
    );
}

export default AppNavigator;