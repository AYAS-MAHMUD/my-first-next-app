// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXZKUGsIVQIvGTxKX9eXqrY2k2Pab2Eh4",
  authDomain: "youstore-10844.firebaseapp.com",
  projectId: "youstore-10844",
  storageBucket: "youstore-10844.firebasestorage.app",
  messagingSenderId: "741188564514",
  appId: "1:741188564514:web:3e8f16d7fb23eddc027c7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export {app,auth}