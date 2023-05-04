// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBarh7XY98XrfP_3ybmRQSc03Cu2bMi3bo",
  authDomain: "chef-food-hunter.firebaseapp.com",
  projectId: "chef-food-hunter",
  storageBucket: "chef-food-hunter.appspot.com",
  messagingSenderId: "51858695952",
  appId: "1:51858695952:web:9a24c27051855cafa32795"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app