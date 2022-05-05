// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { getAuth } from "firebase/auth"


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Authentication 
export const auth = getAuth(firebaseApp)

 