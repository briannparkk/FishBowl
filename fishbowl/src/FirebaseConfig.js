// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzRaWtvf6kw4zTrvtafRktP8i7aT6CRuY",
  authDomain: "fishbowl-90aeb.firebaseapp.com",
  projectId: "fishbowl-90aeb",
  storageBucket: "fishbowl-90aeb.appspot.com",
  messagingSenderId: "293591132818",
  appId: "1:293591132818:web:62dd1a0242fbf3bf8c144b",
  measurementId: "G-44CHZLY11M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;