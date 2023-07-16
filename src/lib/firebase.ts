// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwOmubFjOFstyxnlKRHlawqUTcEZyIxds",
  authDomain: "tech-net-89299.firebaseapp.com",
  projectId: "tech-net-89299",
  storageBucket: "tech-net-89299.appspot.com",
  messagingSenderId: "248091041976",
  appId: "1:248091041976:web:70a9c2a8c6ef919193144d",
  measurementId: "G-88NJQB2F0P"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);