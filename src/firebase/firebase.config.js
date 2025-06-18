// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6oOY1hOL7Qto502-aJ3yHIpgBTIIkynU",
  authDomain: "novelnest-inventory.firebaseapp.com",
  projectId: "novelnest-inventory",
  storageBucket: "novelnest-inventory.appspot.com",
  messagingSenderId: "35595520894",
  appId: "1:35595520894:web:af969cada32b6ca131412f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;