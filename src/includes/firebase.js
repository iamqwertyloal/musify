import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

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
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  storage,
  usersCollection,
  songsCollection,
  commentsCollection,
};
