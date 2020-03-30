import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyB3zR0m6FMOPD1cnSKonSs7Fr7f18TK7W8",
    authDomain: "recursive-real-estate.firebaseapp.com",
    databaseURL: "https://recursive-real-estate.firebaseio.com",
    projectId: "recursive-real-estate",
    storageBucket: "recursive-real-estate.appspot.com",
    messagingSenderId: "579339353430",
    appId: "1:579339353430:web:96bd9666ecd36d40592af7",
    measurementId: "G-HQWWYGTL8M"

});

export default app;