import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDyhdFN5ZJVdncQfe9GJqZEensnnfW5Uvc",
  authDomain: "expotest-b393b.firebaseapp.com",
  projectId: "expotest-b393b",
  storageBucket: "expotest-b393b.appspot.com",
  messagingSenderId: "1062432300841",
  appId: "1:1062432300841:web:2875a4e82e1b52513f2138"
};
const app= firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();

export { db };