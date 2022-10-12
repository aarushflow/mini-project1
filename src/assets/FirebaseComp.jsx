// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQrISoXgxXr4E-dIzSs-7R6iVU889HwHQ",
  authDomain: "project-app-4dfa5.firebaseapp.com",
  projectId: "project-app-4dfa5",
  storageBucket: "project-app-4dfa5.appspot.com",
  messagingSenderId: "407903131412",
  appId: "1:407903131412:web:1ddf48247c17030e811401",
  measurementId: "G-LP6Z2D3L76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export default db;