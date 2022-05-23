import React from "react";
// React navigation

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//styled components
import styled from "styled-components/native";
import { colors } from "../components/colors";
const { primary, accent, secondary } = colors;
import { AccessibilityInfo } from "react-native-web";

import Login from "../screens/Login";
import Signup from "../screens/Signup";
import EmailVerification from "../screens/EmailVerification";
import ForgotPassword from "../screens/ForgotPassword";
import ResetPassword from "../screens/ResetPassword";
import Dashboard from "../screens/Dashboard";

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: accent,
          headerStyle: {
            height: 100,
            backgroundColor: secondary,
            borderBottomWidth: 0,
            shadowColor: "transparent",
            shadowOpacity: 0,
            elevation: 0,
          },
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
          headerRightContainerStyle: {
            paddingRight: 25,
          },
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="EmailVerification" component={EmailVerification}
        options={{headerTitle: 'Email Verification'}}
        />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}
        options={{headerTitle: 'Forgot Password'}} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} 
        options={{headerTitle: 'Reset Password'}} />
        <Stack.Screen name="Dashboard" component={Dashboard} 
        options={{headerTitle: 'Dashboard'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
