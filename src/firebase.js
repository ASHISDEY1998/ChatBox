
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDL9wPuUafD_VzQlnI9nghwmhfU3ngKxqQ",
    authDomain: "chatbox-a9175.firebaseapp.com",
    projectId: "chatbox-a9175",
    storageBucket: "chatbox-a9175.appspot.com",
    messagingSenderId: "693520651400",
    appId: "1:693520651400:web:f00dd141f32b42ac0ffb3d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()