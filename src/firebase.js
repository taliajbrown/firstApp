import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAE2_EZ0LazNFHtF2duq5FiLIZcYIoxcFw",
  authDomain: "newapp-607aa.firebaseapp.com",
  databaseURL: "https://newapp-607aa.firebaseio.com",
  projectId: "newapp-607aa",
  storageBucket: "newapp-607aa.appspot.com",
  messagingSenderId: "699416793923",
  appId: "1:699416793923:web:0c990a021fd109113fd5f6",
  measurementId: "G-3NTEHSMNV5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
