import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
