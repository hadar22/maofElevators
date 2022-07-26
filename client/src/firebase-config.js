import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQGzlAm1UH-C_7soGtK0wUWcUD6RYuM6A",
  authDomain: "maofelevators-d9a1b.firebaseapp.com",
  projectId: "maofelevators-d9a1b",
  storageBucket: "maofelevators-d9a1b.appspot.com",
  messagingSenderId: "649617202552",
  appId: "1:649617202552:web:aae24d840f9e1b15b4fc8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)