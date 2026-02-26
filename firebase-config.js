// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh0Azzq5cCUJIREWGn8Uky0wpjAn_hF4Y",
  authDomain: "temi-tablet-display.firebaseapp.com",
  projectId: "temi-tablet-display",
  storageBucket: "temi-tablet-display.firebasestorage.app",
  messagingSenderId: "200677882490",
  appId: "1:200677882490:web:e08c52af15ced7ec64d9c3",
  measurementId: "G-YVJTF25Z9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);