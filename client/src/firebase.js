// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ibestate.firebaseapp.com",
  projectId: "ibestate",
  storageBucket: "ibestate.appspot.com",
  messagingSenderId: "418106414457",
  appId: "1:418106414457:web:2999fb570e566d9de80ba8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
