// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5CNiChkRd3wGIFXvYcZa0ZrqQA5ihxTs",
  authDomain: "house-marketplace-app-e3f51.firebaseapp.com",
  projectId: "house-marketplace-app-e3f51",
  storageBucket: "house-marketplace-app-e3f51.appspot.com",
  messagingSenderId: "141822526039",
  appId: "1:141822526039:web:6d98b17374e8f2c4065912",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
