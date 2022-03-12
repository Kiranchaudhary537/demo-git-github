// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics"
import 'firebase/auth';
import "firebase/firestore";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9YQhFa34hGGbuu2TIutaK6o-ESZhUJyo",
  authDomain: "neural-cirrus-307015.firebaseapp.com",
  databaseURL: "https://neural-cirrus-307015-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "neural-cirrus-307015",
  storageBucket: "neural-cirrus-307015.appspot.com",
  messagingSenderId: "440051948660",
  appId: "1:440051948660:web:2e3ed2698b7666b3eb4521",
  measurementId: "G-XGERC048JT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authentication=getAuth(app);
export const storage=getStorage(app);
export const db= getFirestore(app);
// export const database = getDatabase(app);
