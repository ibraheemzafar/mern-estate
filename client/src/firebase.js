// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-36c26.firebaseapp.com",
  projectId: "mern-estate-36c26",
  storageBucket: "mern-estate-36c26.appspot.com",
  messagingSenderId: "845518115721",
  appId: "1:845518115721:web:b70e3d3b736cde12674758"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);