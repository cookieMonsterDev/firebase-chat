import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAM4JdrVxBRimN5QqQTFcoZabP1bH_wGy0",
  authDomain: "real-time-chat-50884.firebaseapp.com",
  projectId: "real-time-chat-50884",
  storageBucket: "real-time-chat-50884.appspot.com",
  messagingSenderId: "884195350342",
  appId: "1:884195350342:web:54e589c5730712bcc53747"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

