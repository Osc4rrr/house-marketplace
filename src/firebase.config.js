import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDRgb8_cIftEoodxLTWCzHqfKtwJHTg560",
  authDomain: "house-marketplace-app-d0e53.firebaseapp.com",
  projectId: "house-marketplace-app-d0e53",
  storageBucket: "house-marketplace-app-d0e53.appspot.com",
  messagingSenderId: "381351542384",
  appId: "1:381351542384:web:8384cf405bab14dcd87eb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()