/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAjuflnQ94XPCl0vNIwuBit_rWv5L5ps-A",
    authDomain: "netflixgpt-9793e.firebaseapp.com",
    projectId: "netflixgpt-9793e",
    storageBucket: "netflixgpt-9793e.appspot.com",
    messagingSenderId: "78707625237",
    appId: "1:78707625237:web:6214f57bd13b658be66d1c",
    measurementId: "G-ZJGYF60YPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();