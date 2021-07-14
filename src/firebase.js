import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD0rdLFXpYTbt7LvgtD8M0HF7S4x0a735U",
  authDomain: "webapp-c6850.firebaseapp.com",
  projectId: "webapp-c6850",
  storageBucket: "webapp-c6850.appspot.com",
  messagingSenderId: "640269647417",
  appId: "1:640269647417:web:1a5575e65a34c572acd7e8",
  measurementId: "G-6QY4HVY9M2"
};

firebase.initializeApp(firebaseConfig);
let storage = firebase.storage().ref(`images/`)
const db=firebase.database();
export {firebase,db,storage}