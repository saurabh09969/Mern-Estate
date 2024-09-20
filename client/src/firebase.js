// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-86818.firebaseapp.com",
  projectId: "mern-estate-86818",
  storageBucket: "mern-estate-86818.appspot.com",
  messagingSenderId: "918261723205",
  appId: "1:918261723205:web:209d8ae402b66f3798b32c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
