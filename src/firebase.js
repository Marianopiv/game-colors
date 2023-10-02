// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChwq1x-n-uXvLPNsT5I43W--7x6jJ1Vq0",
  authDomain: "practica2709.firebaseapp.com",
  projectId: "practica2709",
  storageBucket: "practica2709.appspot.com",
  messagingSenderId: "583350670571",
  appId: "1:583350670571:web:476b2e940419e2260b1aae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
