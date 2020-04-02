import React, { Component } from "react";
import { StyleSheet, Image, Text, View, Button, TextInput } from "react-native";
import back from "../assets/icons8-back-48.png";
//import styles from "../styles";
import {
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native-gesture-handler";
import Firebase from "firebase";

class SignupScreen extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    errorMessage: null
  };

  _handleSignin = () => {
    Firebase.auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(userCredentials => {
        return userCredentials.user.updateProfile({
          displayName: this.state.name
        });
      })
      .catch(error => this.setState({ errorMessage: error.message }));
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.greetings}>{`Aradugbo Sign up Page`}</Text>

        <View style={styles.errorMessage}>
          {this.state.errorMessage && (
            <Text style={styles.error}>{this.state.errorMessage}</Text>
          )}
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Full Name</Text>
            <TextInput
              style={styles.input}
              autoCapitalize='none'
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
            />
          </View>
          <View style={{ marginTop: 32 }}>
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
              secureTextEntry={true}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={this._handleSignin}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignSelf: "center", marginTop: 32 }}
          onPress={() => this.props.navigation.navigate("Login Page")}
        >
          <Text style={{ color: "#414959 ", fontSize: 13 }}>
            New To Aradugbo App ?{" "}
            <Text style={{ fontWeight: "bold", color: "#E9446A" }}>Login</Text>
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
  }
});

export default SignupScreen;
