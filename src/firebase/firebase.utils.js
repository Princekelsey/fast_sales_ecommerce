import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAQ5PhY4H4hp_1Sy-TKkrjM_Qd9hUIYx70",
  authDomain: "fast-sales-db.firebaseapp.com",
  databaseURL: "https://fast-sales-db.firebaseio.com",
  projectId: "fast-sales-db",
  storageBucket: "fast-sales-db.appspot.com",
  messagingSenderId: "230003527384",
  appId: "1:230003527384:web:02cc402f0c9f61be3791ad",
  measurementId: "G-48FTRZQZ4J"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
