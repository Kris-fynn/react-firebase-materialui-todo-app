// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN82CpB7fh_EPOaKPnyi4bd83FcVR3uFQ",
  authDomain: "react-firebase-mui-todo-app.firebaseapp.com",
  databaseURL: "https://react-firebase-mui-todo-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-firebase-mui-todo-app",
  storageBucket: "react-firebase-mui-todo-app.appspot.com",
  messagingSenderId: "580469045953",
  appId: "1:580469045953:web:6d2b0ff09ae996d6e8f240",
  measurementId: "G-NZWZVHYWMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);