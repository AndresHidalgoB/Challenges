// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx1zHh0Qeuy-EfG2MlPptgOTacBrMe1ds",
  authDomain: "react-demo-e9d94.firebaseapp.com",
  projectId: "react-demo-e9d94",
  storageBucket: "react-demo-e9d94.appspot.com",
  messagingSenderId: "647645507685",
  appId: "1:647645507685:web:5200866b7df5665b60568c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Auth
const auth = getAuth();
// Intialize Firebase Database
const firebaseStorage = getStorage(app);

export { app, auth, firebaseStorage };