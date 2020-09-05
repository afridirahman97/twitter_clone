import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDoD9YROM5ZLCx7O65OE_-9QqsZoJxiXio",
    authDomain: "cptwitterclone.firebaseapp.com",
    databaseURL: "https://cptwitterclone.firebaseio.com",
    projectId: "cptwitterclone",
    storageBucket: "cptwitterclone.appspot.com",
    messagingSenderId: "1029557415170",
    appId: "1:1029557415170:web:0d67d82f383d248e60261b",
    measurementId: "G-571P8T77PK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;