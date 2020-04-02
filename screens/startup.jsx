import React from "react";
import { Text, StyleSheet, View, ImageBackground, Button } from "react-native";
import background from "../assets/splash.png";
import LoginScreen from "./login";
const StartupScreen = ({ navigation }) => {
  return (
    <ImageBackground source={background} style={styles.backgroundImage}>
      <View style={styles.mainView}>
        <Text></Text>
        <Button title='Continue as Guest' />
        <View style={styles.loginView}>
          <Text
            onPress={() => navigation.navigate("Login Page")}
            style={styles.loginText}
          >
            Login
          </Text>
          <Text
            style={{
              borderLeftColor: "black",
              borderLeftWidth: 4,
              height: 35
            }}
          ></Text>
          <Text
            style={styles.loginText}
            onPress={() => navigation.navigate("Sign Up Page")}
          >
            Sign Up
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

let styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%"
  },
  mainView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 250,
    paddingLeft: 20,
    paddingRight: 20
  },
  loginView: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 20
  },
  loginText: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 20
  }
});
export default StartupScreen;
