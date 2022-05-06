// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { getAuth } from "firebase/auth"
import { collection, getFirestore, getDoc } from "firebase/firestore";


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Authentication 
export const auth = getAuth(firebaseApp)

//FireStore
export const db = getFirestore(firebaseApp)

const quizRef:any = collection(db, 'quizzes')

//  getDoc(quizRef).then((snapshot) => {
//      console.log(snapshot)
//  })

