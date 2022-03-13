import Firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from "../seed";
// we need to somehow seed the database 

// we need a config here
const config = {
    apiKey: "AIzaSyBkWrLdgQkyoGrKTR-qOyk5Eg4LI7JarHs",
    authDomain: "netflix-4a633.firebaseapp.com",
    projectId: "netflix-4a633",
    storageBucket: "netflix-4a633.appspot.com",
    messagingSenderId: "363575001982",
    appId: "1:363575001982:web:1e801d109e54d064efa92f"
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };    
