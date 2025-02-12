// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsDVoEn6uttJ7abPrAIC5SC01HviUYGKc",
  authDomain: "shop-634f1.firebaseapp.com",
  projectId: "shop-634f1",
  storageBucket: "shop-634f1.firebasestorage.app",
  messagingSenderId: "203940243221",
  appId: "1:203940243221:web:fa4568c68f78ef68652b1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
