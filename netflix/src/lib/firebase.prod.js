import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBkWrLdgQkyoGrKTR-qOyk5Eg4LI7JarHs",
  authDomain: "netflix-4a633.firebaseapp.com",
  projectId: "netflix-4a633",
  storageBucket: "netflix-4a633.appspot.com",
  messagingSenderId: "363575001982",
  appId: "1:363575001982:web:1e801d109e54d064efa92f"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
