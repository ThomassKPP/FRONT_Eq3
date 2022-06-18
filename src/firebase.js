// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv8KH3z2uvVaf-qadn2s6OLHPE9trNZ1M",
  authDomain: "react-node-lmt.firebaseapp.com",
  projectId: "react-node-lmt",
  storageBucket: "react-node-lmt.appspot.com",
  messagingSenderId: "28997909315",
  appId: "1:28997909315:web:3c666e864ca822deb28df6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
