import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTHmeqQdySdhmlMri_tTCzikQ6dkLVH_0",
  authDomain: "musify-4dffb.firebaseapp.com",
  projectId: "musify-4dffb",
  storageBucket: "musify-4dffb.appspot.com",
  appId: "1:626216780444:web:4e7388445fb5de133aa359",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
