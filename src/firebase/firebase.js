import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyA9OjTlW4RQP1tCduMoTGA0eK4ocMY6KTU",
  authDomain: "lautaro-mielgo.firebaseapp.com",
  projectId: "lautaro-mielgo",
  storageBucket: "lautaro-mielgo.appspot.com",
  messagingSenderId: "636831801774",
  appId: "1:636831801774:web:168cbcf8ab51c386bd683f"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
