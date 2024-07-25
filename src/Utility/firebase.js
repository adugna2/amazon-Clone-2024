// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJhpKkca33WZvXrV2SoGt9WaZJYggf4_0",
  authDomain: "clone-2024-b1e86.firebaseapp.com",
  projectId: "clone-2024-b1e86",
  storageBucket: "clone-2024-b1e86.appspot.com",
  messagingSenderId: "210522527585",
  appId: "1:210522527585:web:2240570b7ca00639405720",
  measurementId: "G-RZYBR501EV"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();




