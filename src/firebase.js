// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxHi7vQ5Y7yLucL0mhwKOH6jIw0hZj5ec",
  authDomain: "react-form-7a25e.firebaseapp.com",
  databaseURL: "https://react-form-7a25e-default-rtdb.firebaseio.com",
  projectId: "react-form-7a25e",
  storageBucket: "react-form-7a25e.appspot.com",
  messagingSenderId: "739921966983",
  appId: "1:739921966983:web:b226a5c9777daa96194522"
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);

export default db