import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDRDgxkqLxn19HTV7ATUdfzJ7QQpD7J-Ko",
  authDomain: "enye-firebase-4d29f.firebaseapp.com",
  databaseURL: "https://enye-firebase-4d29f.firebaseio.com",
  projectId: "enye-firebase-4d29f",
  storageBucket: "enye-firebase-4d29f.appspot.com",
  messagingSenderId: "898861153461",
  appId: "1:898861153461:web:98ff036a88d33539e152fc",
  measurementId: "G-JF04RMWPP9"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const database = firebase.database();

export default database;
