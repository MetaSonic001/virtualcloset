// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  export const auth = firebase.auth();
  export const googleProvider = new firebase.auth.GoogleAuthProvider();