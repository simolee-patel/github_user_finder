import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCZ-bZ71BHpATcqYpiSBSI58pBTCALwwYQ",
    authDomain: "learn-firebase-f6b27.firebaseapp.com",
    databaseURL: "https://learn-firebase-f6b27.firebaseio.com",
    projectId: "learn-firebase-f6b27",
    storageBucket: "learn-firebase-f6b27.appspot.com",
    messagingSenderId: "524859303335",
    appId: "1:524859303335:web:f959f103314fa5d0610282",
    measurementId: "G-3DBVE1SSDQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
