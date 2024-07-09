// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxCqFJ1ofxhU4IK_b_E5QZM4Ct7cmY1RY",
  authDomain: "aitravelplanner-4877c.firebaseapp.com",
  projectId: "aitravelplanner-4877c",
  storageBucket: "aitravelplanner-4877c.appspot.com",
  messagingSenderId: "171191309447",
  appId: "1:171191309447:web:0002137cb8817662919422",
  measurementId: "G-014CQ4PJJJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);