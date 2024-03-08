// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, } from "firebase/auth";
import {getDatabase} from "firebase/database"
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/firestore";
import "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfVbonFIT46HILrNVOLC4is8cxs5lTT9Y",
  authDomain: "virtual-closet-2d419.firebaseapp.com",
  projectId: "virtual-closet-2d419",
  storageBucket: "virtual-closet-2d419.appspot.com",
  messagingSenderId: "144798889779",
  appId: "1:144798889779:web:0c8410b849c86aee81f046",
  measurementId: "G-CQZHCSMBFD"
};

// Initialize Firebase

export const googleProvider = new GoogleAuthProvider();

// export {database}

export const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();
export const auth = getAuth(app);
