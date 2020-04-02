import React, { Component } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import firebase from "firebase";
class LoadingScreen extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? " welcome Page" : "Login Page ");
    });
  }
  render() {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
      >
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default LoadingScreen;
