// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDXlwsVtraENHz15odd6MgzPflYeJzi7bc",
    authDomain: "mytrainer-decab.firebaseapp.com",
    projectId: "mytrainer-decab",
    storageBucket: "mytrainer-decab.appspot.com",
    messagingSenderId: "44874881991",
    appId: "1:44874881991:web:59a219aeb85a1c84cfd7e2",
    measurementId: "G-G83KN3N9R5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
