// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV_7VKwkzY5Ir5keuTRdtWt8eBFBPlDGo",
  authDomain: "practice-9d09f.firebaseapp.com",
  projectId: "practice-9d09f",
  storageBucket: "practice-9d09f.appspot.com",
  messagingSenderId: "763010415149",
  appId: "1:763010415149:web:cb995e4469c61c5e8f16a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)