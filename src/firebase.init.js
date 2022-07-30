// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsR1PTvAH9ONFYoZ1ag7dVhYTdhnI6ZK0",
  authDomain: "react-firebase-auth-8fc23.firebaseapp.com",
  projectId: "react-firebase-auth-8fc23",
  storageBucket: "react-firebase-auth-8fc23.appspot.com",
  messagingSenderId: "863877112927",
  appId: "1:863877112927:web:e26d8d7b75113ac664a7ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
