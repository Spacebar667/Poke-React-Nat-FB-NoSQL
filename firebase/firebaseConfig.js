import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI1oihaIbrAs82fp1vn86XRCpoAl4HTVY",
  authDomain: "pokeapi2-6e550.firebaseapp.com",
  projectId: "pokeapi2-6e550",
  storageBucket: "pokeapi2-6e550.firebasestorage.app",
  messagingSenderId: "315930497248",
  appId: "1:315930497248:web:24e18f6eb97e544fdf8085"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);