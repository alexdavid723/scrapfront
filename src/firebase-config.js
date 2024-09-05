// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBUAsyC3WJvx6AQ57O0NOy4FUcRnVCO32E",
  authDomain: "datoscrap.firebaseapp.com",
  projectId: "datoscrap",
  storageBucket: "datoscrap.appspot.com",
  messagingSenderId: "1095478313201",
  appId: "1:1095478313201:web:a36c2bbab9cbf6b7f22950"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs };
