// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLkoODkMD-rItkYe3J6ichWRCG6mnlKF4",
  authDomain: "projet-ecole-familial.firebaseapp.com",
  projectId: "projet-ecole-familial",
  storageBucket: "projet-ecole-familial.firebasestorage.app",
  messagingSenderId: "349833342586",
  appId: "1:349833342586:web:9b84d2ac1e2b0f04fcd5c3",
  measurementId: "G-05K5JXJ1CK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
