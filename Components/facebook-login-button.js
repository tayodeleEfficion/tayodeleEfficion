import React, {Component} from 'react';
import {Button} from 'react-native';
import * as Facebook from 'expo-facebook';
import config from '../config'
import LocalStorage from "../utility/local_storage";

/**
 * This class represents a Facebook login button. It is intended to render a component that has the look of a standard facebook login button.
 * The button is able to use the expo-facebook sdk to request permissions from a user and log them into the app using their facebook credentials.
 * Since this button my be reused in different parent components, it is up to the parent to dictate what should happen when:
 * a) The login is successful.
 * b) The login is canceled.
 * c) The login failed.
 * 
 * The button will pass an the error message to the function provided to handle login failure. It will pass the object returned to it upon
 * successful login to the function provided to handle successful login. It will not pass anything to the function provided to it to
 * handle a cancelled login
 */
class FBLoginButton extends Component {
    render() {
        return (
            //Onclick, request permission from user to access their facebook data
            <Button title="Login with Facebook" onPress={
                () => {
                    Facebook.initializeAsync(config.facebookLogin.appId, config.facebookLogin.appName).then((value)=>{return Facebook.logInWithReadPermissionsAsync({permissions:['email']})})
                    .then((value)=>{
                        if(value.type === 'cancel') {
                            //Handle the cancelation of the login
                            this.props.canceledLogin();
                        } else {
                            //The login was successful
                            this.props.successfulLogin();

                            //Store the returned value in a key value store
                            LocalStorage.store(LocalStorage.FB_LOGIN, JSON.stringify(value)).catch((err)=>{
                                console.log(`Could not save facebook login info: ${err}`);
                            });
                        }
                    })
                    .catch((err) => { //Handle any error in the promise chain
                        this.props.failedLogin(err.message);
                    });
                }
            }/>
        );
    }
}

export default FBLoginButton;