import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyChlW0vke_9qRouQMMElL7D_-qlI9J75T4",
  authDomain: "whatsapp-1e2c9.firebaseapp.com",
  projectId: "whatsapp-1e2c9",
  storageBucket: "whatsapp-1e2c9.appspot.com",
  messagingSenderId: "598011533203",
  appId: "1:598011533203:web:5c6ae5debad527213ffa66",
  measurementId: "G-0JHZGR3F68",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
