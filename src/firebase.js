/* import * as firebase from "firebase"; */
import firebase from "firebase/app";
import "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2MLZMkgjjRbvIdm7nmPvJELuxJRZ4xjk",
    authDomain: "rahat-ecommerce-project.firebaseapp.com",
    projectId: "rahat-ecommerce-project",
    storageBucket: "rahat-ecommerce-project.appspot.com",
    messagingSenderId: "520327793439",
    appId: "1:520327793439:web:105ede6f0aa127bc45be2a"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
