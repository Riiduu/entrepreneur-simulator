// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLSgqHS6KAkXH9VtGkXNa3oQ5Nu8Mrhkc",
  authDomain: "entrepreneur-simulator.firebaseapp.com",
  projectId: "entrepreneur-simulator",
  storageBucket: "entrepreneur-simulator.appspot.com",
  messagingSenderId: "899725397483",
  appId: "1:899725397483:web:9c56b53fa3e2266a9d1dae",
  measurementId: "G-HW4ZHQ0Y8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);