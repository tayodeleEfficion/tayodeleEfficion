import React, {Component} from 'react';
import {View, Button, AsyncStorage} from 'react-native';
import * as Google from 'expo-google-app-auth';
import config from "../config";
import LocalStorage from "../utility/local_storage";

class GoogleLoginButton extends Component {
    render() {
        return (
            //Onclick, request permission from user using google OAuth
            <Button title="Login with Google" color="red" onPress={
                () => {
                   Google.logInAsync(config.googleLogin).then((value) => {
                       if(value.type === 'cancel') {
                           this.props.canceledLogin();
                       } else {
                           this.props.successfulLogin(value);

                           //Store the returned value in a key value store
                           LocalStorage.store(LocalStorage.GOOGLE_LOGIN, JSON.stringify(value)).catch((err)=>{
                                console.log(`Could not save google login info: ${err}`);
                           });
                       }
                   }, (reason) => {
                       this.props.failedLogin(reason.message);
                   });
                }
            }/>
        );
    }
}

export default GoogleLoginButton;
