// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn1mRXVtMZUr6wguZ44J1lkk2Yne5pghM",
  authDomain: "xyzcompany-9211e.firebaseapp.com",
  projectId: "xyzcompany-9211e",
  storageBucket: "xyzcompany-9211e.firebasestorage.app",
  messagingSenderId: "54397103376",
  appId: "1:54397103376:web:86d8fcc8bf08aa5dacc995"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;