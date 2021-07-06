import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCC5FvHgYsXxGiasKMwplNeM5Loit4loc8",
    authDomain: "webapp-e27c6.firebaseapp.com",
    projectId: "webapp-e27c6",
    storageBucket: "webapp-e27c6.appspot.com",
    messagingSenderId: "760318849270",
    appId: "1:760318849270:web:0c508c7cb0385fc82d3cd7",
    measurementId: "G-N23XH35Q6X"
  };

firebase.initializeApp(firebaseConfig);
let storage = firebase.storage().ref(`images/`)
const db=firebase.database();
export {firebase,db,storage}