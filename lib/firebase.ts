// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHdbhYu-7RPjnAZareKwFZlk26O807myk",
  authDomain: "babysitting-app-3b53d.firebaseapp.com",
  projectId: "babysitting-app-3b53d",
  storageBucket: "babysitting-app-3b53d.appspot.com",
  messagingSenderId: "525398638033",
  appId: "1:525398638033:web:9a91cffa6321e449b374f0",
  measurementId: "G-NQQE4ZT5K9"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app); // puoi usarlo quando vuoi
export const auth = getAuth(app); // per autenticazione utenti
