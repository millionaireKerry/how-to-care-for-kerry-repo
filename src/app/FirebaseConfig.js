import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOUtwaCND7b6xLrOOLHljpqNxKUTeymxo",
  authDomain: "how-to-care-for-kerry.firebaseapp.com",
  projectId: "how-to-care-for-kerry",
  storageBucket: "how-to-care-for-kerry.firebasestorage.app",
  messagingSenderId: "739269633263",
  appId: "1:739269633263:web:fdf84ad139f54a0b46e71a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, ref, getDownloadURL };
