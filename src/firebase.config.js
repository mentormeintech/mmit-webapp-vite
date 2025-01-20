// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfigOld = {
    apiKey: "AIzaSyDIL8-ezhp2RCkZJhSrUMKX1mN2u-if9hQ",
    authDomain: "mmit-event-1.firebaseapp.com",
    projectId: "mmit-event-1",
    storageBucket: "mmit-event-1.firebasestorage.app",
    messagingSenderId: "395687531221",
    appId: "1:395687531221:web:d335b2c1ffaea10777c85c",
    measurementId: "G-ZFWS627K3V"
};
const firebaseConfig = {
    apiKey: "AIzaSyDIL8-ezhp2RCkZJhSrUMKX1mN2u-if9hQ",
    authDomain: "mmit-event-1.firebaseapp.com",
    projectId: "mmit-event-1",
    storageBucket: "mmit-event-1.firebasestorage.app",
    messagingSenderId: "395687531221",
    appId: "1:395687531221:web:da20c54c05e1a53977c85c",
    measurementId: "G-V4JG4WBP3Q"
  };

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseAnalytics = getAnalytics(firebaseApp);


export const googleProvider = new GoogleAuthProvider();