import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7kMkAC9ip5Rp9jP4CI3VYyXzChA53Ttg",
  authDomain: "yt-vids-ec3e9.firebaseapp.com",
  projectId: "yt-vids-ec3e9",
  storageBucket: "yt-vids-ec3e9.appspot.com",
  messagingSenderId: "1062703342871",
  appId: "1:1062703342871:web:fc212b2c3d61cba2974352",
  measurementId: "${config.measurementId}",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export { db, auth, googleAuthProvider };
export default app;
