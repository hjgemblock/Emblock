import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore"; // Firestore functions
import { useLocation } from 'react-router-dom';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEyHHTq7X6wvS2epVD9vM_Kt_w18NfQxg",
  authDomain: "emblock-3a756.firebaseapp.com",
  projectId: "emblock-3a756",
  storageBucket: "emblock-3a756.appspot.com",
  messagingSenderId: "364457031684",
  appId: "1:364457031684:web:b99c035b963f5961d41d51",
  measurementId: "G-132X1BMNQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore