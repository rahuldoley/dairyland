import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAYT0LJdegMyGXZG6unEEUSh2Adi9LcPdc",
    authDomain: "dairyland-7bf65.firebaseapp.com",
    projectId: "dairyland-7bf65",
    storageBucket: "dairyland-7bf65.appspot.com",
    messagingSenderId: "624231086970",
    appId: "1:624231086970:web:9828a847174b27b3faf4c3",
    measurementId: "G-T9WMHHC94N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };