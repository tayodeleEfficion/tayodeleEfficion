import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAlNURb5UnvLxWHoZvjUgBr2nlaevdaQNA",
  authDomain: "reactnative-firebase-f337b.firebaseapp.com",
  databaseURL: "https://reactnative-firebase-f337b.firebaseio.com",
  projectId: "reactnative-firebase-f337b",
  storageBucket: "reactnative-firebase-f337b.appspot.com",
  messagingSenderId: "925827841538",
  appId: "1:925827841538:web:fb36708768428c9f13b11b"
};
// Initialize Firebase
const firebase = firebase.initializeApp(firebaseConfig);
export default firebase;
