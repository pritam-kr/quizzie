// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { getAuth } from "firebase/auth";
import { collection, getFirestore} from "firebase/firestore";

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Authentication
export const auth = getAuth(firebaseApp);

//FireStore
export const db = getFirestore(firebaseApp);

export const categoriesRef = collection(db, "quizCategories");

export const quizRef = collection(db, "allQuizzes");
