import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_1YIMY0hiRkPeGL6L2Cl3lxuBaJdFa8Y",
  authDomain: "shoes-shop-b2fac.firebaseapp.com",
  projectId: "shoes-shop-b2fac",
  storageBucket: "shoes-shop-b2fac.appspot.com",
  messagingSenderId: "360900423760",
  appId: "1:360900423760:web:c6abb37bcb04d228e06155",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// import dotenv from "dotenv";
// dotenv.config();
// const firebaseConfig = {
//   apiKey: process.env.apiKey,
//   authDomain: process.env.authDomain,
//   projectId: process.env.projectId,
//   storageBucket: process.env.storageBucket,
//   messagingSenderId: process.env.messagingSenderId,
//   appId: process.env.appId,
// };
