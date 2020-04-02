import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Firebase from "firebase";
import { TouchableOpacity } from "react-native-gesture-handler";
const HomeScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    const { email, displayName } = Firebase.auth().currentUser;
    this.setEmail({ email });
    this.setDisplayName({ displayName });
  }, []);

  const _signOutUser = () => {
    Firebase.auth().signOut();
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> hi {displayName}</Text>

      <TouchableOpacity style={{ marginTop: 32 }} onPress={_signOutUser}>
        Logout
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
