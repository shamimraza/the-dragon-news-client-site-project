// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqDgV49OQPloDCzRdaiOOOhP13zwTLNJ8",
  authDomain: "the-dragon-news-client-project.firebaseapp.com",
  projectId: "the-dragon-news-client-project",
  storageBucket: "the-dragon-news-client-project.appspot.com",
  messagingSenderId: "1093317237070",
  appId: "1:1093317237070:web:2e46d24d14bed168e2e61f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;