import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDbAsJu12eSFOkTouIySgN63QsNvy_ygk",
  authDomain: "netflix-clone-88d6d.firebaseapp.com",
  projectId: "netflix-clone-88d6d",
  storageBucket: "netflix-clone-88d6d.appspot.com",
  messagingSenderId: "469201548130",
  appId: "1:469201548130:web:d9e6b644b2cbcdf499723b",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
export default app;
export { auth, db };
