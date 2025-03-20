// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD5wTMCES8a9blhyGJX6hyFHrJUMk6jk4E",
    authDomain: "react-clinic-5e047.firebaseapp.com",
    projectId: "react-clinic-5e047",
    storageBucket: "react-clinic-5e047.firebasestorage.app",
    messagingSenderId: "600110444351",
    appId: "1:600110444351:web:6950cf744d3befb295ed8a",
    measurementId: "G-R30KKV20HH"
};

// Initialize Firebase
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider, signInWithPopup };