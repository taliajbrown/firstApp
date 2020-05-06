import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyALTD3YgJAvsekaQDsUnPM1FXeJ85ZB0lI",
  authDomain: "newapp-9b259.firebaseapp.com",
  databaseURL: "https://newapp-9b259.firebaseio.com",
  projectId: "newapp-9b259",
  storageBucket: "newapp-9b259.appspot.com",
  messagingSenderId: "253582814962",
  appId: "1:253582814962:web:368088f7157d451c7faa6b",
  measurementId: "G-G753ELXPWP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
