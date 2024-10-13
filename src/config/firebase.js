import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAR8LlSCJOBzTwkqpQPfkgiakFzevWmmG0",
  authDomain: "convocatoria1-a9024.firebaseapp.com",
  projectId: "convocatoria1-a9024",
  storageBucket: "convocatoria1-a9024.appspot.com",
  messagingSenderId: "227636863844",
  appId: "1:227636863844:web:5984c092edcd8dacb39071",
  measurementId: "G-7WVH9F8LSD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
