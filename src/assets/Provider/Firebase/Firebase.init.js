// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqE-UWEV1I4JuJ6IAxbgX5cyJYILOByS0",
  authDomain: "fire-base-64c1c.firebaseapp.com",
  projectId: "fire-base-64c1c",
  storageBucket: "fire-base-64c1c.appspot.com",
  messagingSenderId: "101464864195",
  appId: "1:101464864195:web:af1161e020677174857976"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;