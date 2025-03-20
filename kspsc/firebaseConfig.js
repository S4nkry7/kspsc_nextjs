// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTvvksWQ5mRxv1Pf0QsAWiewEk5rWTWXo",
  authDomain: "kspsc-c8817.firebaseapp.com",
  projectId: "kspsc-c8817",
  storageBucket: "kspsc-c8817.appspot.com",
  messagingSenderId: "634979509331",
  appId: "1:634979509331:web:66c4245f68a925471212a6",
  measurementId: "G-M2MHP32KQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
