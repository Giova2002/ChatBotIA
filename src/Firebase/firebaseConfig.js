// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZgu49L29vE_3t6iGVUa9rf1PhHqJR3Ck",
  authDomain: "chatbot-e10ff.firebaseapp.com",
  projectId: "chatbot-e10ff",
  storageBucket: "chatbot-e10ff.appspot.com",
  messagingSenderId: "389484662536",
  appId: "1:389484662536:web:c644abbf5960a5e0a1e6bd",
  measurementId: "G-B1K0G8YPPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };