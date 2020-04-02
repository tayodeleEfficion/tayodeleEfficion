import React, { Component } from "react";
import { Text, StyleSheet, View, ImageBackground, Button } from "react-native";
import StartupScreen from "./screens/startup";
import LoginScreen from "./screens/login";
import Signupscreen from "./screens/signup";
import HomeScreen from "./screens/home";
//import LoadingScreen from "./screens/loading";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import * as firebase from "firebase";
import firebase from "./config/fireConfig";

const stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Aradugbo Home'>
        {/* <stack.Screen
          name='Loading Page'
          component={LoadingScreen}
          options={{ title: " Loading" }}
        /> */}
        <stack.Screen
          name='welcome Page'
          component={StartupScreen}
          options={{
            title: "welcome",
            headerStyle: {
              backgroundColor: "#f4511e"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
        />
        <stack.Screen
          name='Login Page'
          options={{
            title: "Aradugb Login",
            headerStyle: {
              backgroundColor: "#f4511d"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
          component={LoginScreen}
        />
        <stack.Screen
          name='Sign Up Page'
          options={{
            title: "Aradugbo Sign up",
            headerStyle: {
              backgroundColor: "#f4511e"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
          component={Signupscreen}
        />
        <stack.Screen
          name='Home Page'
          options={{
            title: "Home",
            headerStyle: {
              backgroundColor: "#f4511e"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
          component={HomeScreen}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
