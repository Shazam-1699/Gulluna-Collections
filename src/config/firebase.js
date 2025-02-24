// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLdm6d0vUYledplK2uVPaUgQxcxj8V3Ic",
  authDomain: "gulluna-creations-bd8f3.firebaseapp.com",
  projectId: "gulluna-creations-bd8f3",
  storageBucket: "gulluna-creations-bd8f3.firebasestorage.app",
  messagingSenderId: "1018646862922",
  appId: "1:1018646862922:web:bc6fa647cc7825ca771ab3",
  measurementId: "G-D6LMRRLJBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);