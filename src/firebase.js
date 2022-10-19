import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD933yHLix7FzWY36cW0afBoXKiEHuA1HA",

  authDomain: "find-tech-buddy.firebaseapp.com",

  projectId: "find-tech-buddy",

  storageBucket: "find-tech-buddy.appspot.com",

  messagingSenderId: "476144412495",

  appId: "1:476144412495:web:270477f569f479dbf9073a",

  measurementId: "G-SVBW384GWZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export {auth, provider, storage};
export default db;