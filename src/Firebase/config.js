import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAfYncxAFvmFvEVaJTZyNhCnczNPTU_lzA",
  authDomain: "primerproyecto22-f918d.firebaseapp.com",
  projectId: "primerproyecto22-f918d",
  storageBucket: "primerproyecto22-f918d.appspot.com",
  messagingSenderId: "672899130070",
  appId: "1:672899130070:web:9fc4cc67f31d59c9afdf77"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)