import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDeaY5BxKLr5xuJr7gKAtjegWgrPXoIs1k",
  authDomain: "devlinks-ac814.firebaseapp.com",
  projectId: "devlinks-ac814",
  storageBucket: "devlinks-ac814.appspot.com",
  messagingSenderId: "31165904698",
  appId: "1:31165904698:web:89fe8214792d4463574203",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
