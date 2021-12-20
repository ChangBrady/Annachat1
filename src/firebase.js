import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyDpLJ1IzC2secIy747mwjlpaTj6JsH21bI",
    authDomain: "annachat-c7f69.firebaseapp.com",
    projectId: "annachat-c7f69",
    storageBucket: "annachat-c7f69.appspot.com",
    messagingSenderId: "88081498577",
    appId: "1:88081498577:web:128d8734eddf0064b9e0f0"
  }).auth(); 