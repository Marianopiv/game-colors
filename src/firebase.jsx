// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSmVN7Bu1qe54bb-A6jeU00TcNpC5WL6c",
  authDomain: "colors-81932.firebaseapp.com",
  projectId: "colors-81932",
  storageBucket: "colors-81932.appspot.com",
  messagingSenderId: "10281698438",
  appId: "1:10281698438:web:a8f7d189befbd0f997fd07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);