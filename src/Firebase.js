import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBLdgZwKYQkW45Pd9WwCmuMALb9C4KwcN8",
  authDomain: "e-b9343.firebaseapp.com",
  projectId: "e-b9343",
  storageBucket: "e-b9343.appspot.com",
  messagingSenderId: "129844818011",
  appId: "1:129844818011:web:e18bc4024427d88ef34f7e",
  measurementId: "G-8PBPH3MP1G"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export default db;
export { auth, provider };
