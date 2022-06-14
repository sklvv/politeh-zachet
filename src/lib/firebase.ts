// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGybGf3YBLNpuHuN9MoQaEFSFm8iiSDfM",
  authDomain: "zachet-94c4f.firebaseapp.com",
  projectId: "zachet-94c4f",
  databaseURL:
    "https://zachet-94c4f-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: "zachet-94c4f.appspot.com",
  messagingSenderId: "801736536281",
  appId: "1:801736536281:web:43a88c4fff30471ff78ec8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
