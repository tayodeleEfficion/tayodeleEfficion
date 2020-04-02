import React, { Component } from "react";
import { StyleSheet, Image, Text, View, Button, TextInput } from "react-native";
import back from "../assets/icons8-back-48.png";
//import styles from "../styles";
import {
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native-gesture-handler";
import Firebase from "firebase";

class LoginScreen extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: null
  };

  _handleLogin = () => {
    const { email, password } = this.state;
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  // facebook login
  FacebooklLogIn = async () => {
    try {
      await Facebook.initializeAsync("264890371190721");
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"]
      });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.greetings}>{`Aradugbo Login`}</Text>

        <View style={styles.errorMessage}>
          {this.state.errorMessage && (
            <Text style={styles.error}>{this.state.errorMessage}</Text>
          )}
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Email Address</Text>
            <TextInput
              style={styles.input}
              autoCapitalize='none'
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </View>

          <View style={{ marginTop: 32 }}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
              style={styles.input}
              autoCapitalize='none'
              secureTextEntry
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={this._handleLogin}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            Google Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.facebookButton}
          onPress={this.FacebooklLogIn}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            Facebook Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignSelf: "center", marginTop: 32 }}
          onPress={() => this.props.navigation.navigate("Sign Up Page")}
        >
          <Text style={{ color: "#414959 ", fontSize: 13 }}>
            Already Have An Account?{" "}
            <Text style={{ fontWeight: "bold", color: "#E9446A" }}>
              Sign Up
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  greetings: {
    marginTop: 32,
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center"
  },
  form: {
    marginBottom: 38,
    marginHorizontal: 30
  },
  inputTitle: {
    color: "#8A8F9E",
    fontSize: 15,
    textTransform: "uppercase"
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center"
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 30,
    fontSize: 15,
    color: "#161F30"
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "gray",
    borderRadius: 5,
    height: 52,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  googleButton: {
    marginHorizontal: 30,
    backgroundColor: "#E9446A",
    borderRadius: 5,
    height: 52,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  facebookButton: {
    marginHorizontal: 30,
    backgroundColor: "#4267B2",
    borderRadius: 5,
    height: 52,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default LoginScreen;
