import { FirebaseError, initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import 'firebase/storage'
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBFBQq-st7DFkwRpbRJ2ZAZ6-7Vxh0q8e0",
    authDomain: "daliao-24609.firebaseapp.com",
    databaseURL: "https://daliao-24609-default-rtdb.firebaseio.com",
    projectId: "daliao-24609",
    storageBucket: "daliao-24609.appspot.com",
    messagingSenderId: "897794268104",
    appId: "1:897794268104:web:c76581cf9ec42068037efd"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);


export const fg = initializeApp(firebaseConfig)

