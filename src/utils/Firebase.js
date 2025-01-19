// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj-jKJVwVowFi-kn9DiCgbFUCwJ8MAeYc",
  authDomain: "netflix-gpt-by-jas.firebaseapp.com",
  projectId: "netflix-gpt-by-jas",
  storageBucket: "netflix-gpt-by-jas.firebasestorage.app",
  messagingSenderId: "224823430402",
  appId: "1:224823430402:web:1ce4061543d5e67326c61b",
  measurementId: "G-2TBBNP7YD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
