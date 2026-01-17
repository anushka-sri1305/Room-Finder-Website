// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "room-finder-b7f7a.firebaseapp.com",
  projectId: "room-finder-b7f7a",
  storageBucket: "room-finder-b7f7a.firebasestorage.app",
  messagingSenderId: "676347750084",
  appId: "1:676347750084:web:60163c641a76eed77bcb91"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);