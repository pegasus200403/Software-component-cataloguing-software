// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqFC-IgDUUBnCI-5am-1DlKntMlAQt6s4",
  authDomain: "software-component-catal-63c3b.firebaseapp.com",
  projectId: "software-component-catal-63c3b",
  storageBucket: "software-component-catal-63c3b.firebasestorage.app",
  messagingSenderId: "773310472878",
  appId: "1:773310472878:web:14f0bd3c55c8cf813c433f",
  measurementId: "G-6BB7WBL08F"
};

export const componentStorageName = "components";
export const usersStorageName = "users";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
